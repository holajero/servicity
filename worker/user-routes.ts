import { Hono } from "hono";
import type { Env } from './core-utils';
import { PropertyEntity } from "./entities";
import { ok, notFound } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // PROPERTIES
  app.get('/api/properties', async (c) => {
    await PropertyEntity.ensureSeed(c.env);
    const page = await PropertyEntity.list(c.env);
    return ok(c, page);
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
}