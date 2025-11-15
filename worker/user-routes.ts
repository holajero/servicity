import { Hono } from "hono";
import type { Env } from './core-utils';
import { PropertyEntity } from "./entities";
import { ok, notFound, bad } from './core-utils';
import type { ContactFormPayload, Property } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // PROPERTIES
  app.get('/api/properties', async (c) => {
    await PropertyEntity.ensureSeed(c.env);
    const { items: allProperties } = await PropertyEntity.list(c.env);
    const { search, type, bedrooms, minPrice, maxPrice, sortBy } = c.req.query();
    let filteredProperties = allProperties;
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProperties = filteredProperties.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.location.neighborhood.toLowerCase().includes(searchTerm) ||
        p.location.city.toLowerCase().includes(searchTerm) ||
        p.location.address.toLowerCase().includes(searchTerm)
      );
    }
    if (type) {
      filteredProperties = filteredProperties.filter(p => p.type === type);
    }
    if (bedrooms) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= Number(bedrooms));
    }
    if (minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= Number(maxPrice));
    }
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filteredProperties.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredProperties.sort((a, b) => b.price - a.price);
          break;
        case 'date-desc':
          // Mocking recency by sorting by ID descending
          filteredProperties.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
      }
    }
    return ok(c, { items: filteredProperties, next: null });
  });
  app.get('/api/properties/:id', async (c) => {
    const { id } = c.req.param();
    const property = new PropertyEntity(c.env, id);
    if (!(await property.exists())) {
      return notFound(c, 'Property not found');
    }
    const data = await property.getState();
    return ok(c, data);
  });
  // CONTACT FORM
  app.post('/api/contact', async (c) => {
    try {
      const payload = await c.req.json<ContactFormPayload>();
      if (!payload.name || !payload.email || !payload.message) {
        return bad(c, 'Name, email, and message are required.');
      }
      console.log('--- NEW CONTACT FORM SUBMISSION ---');
      console.log(`Name: ${payload.name}`);
      console.log(`Email: ${payload.email}`);
      if (payload.phone) console.log(`Phone: ${payload.phone}`);
      if (payload.subject) console.log(`Subject: ${payload.subject}`);
      if (payload.propertyId) console.log(`Property ID: ${payload.propertyId}`);
      if (payload.propertyTitle) console.log(`Property Title: ${payload.propertyTitle}`);
      console.log(`Message: ${payload.message}`);
      console.log('------------------------------------');
      return ok(c, { message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return bad(c, 'Invalid request body.');
    }
  });
}