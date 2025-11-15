import { IndexedEntity } from "./core-utils";
import type { Property } from "@shared/types";
import { MOCK_PROPERTIES } from "@shared/mock-data";
export class PropertyEntity extends IndexedEntity<Property> {
  static readonly entityName = "property";
  static readonly indexName = "properties";
  static readonly initialState: Property = {
    id: "",
    title: "",
    description: "",
    price: 0,
    currency: "USD",
    location: {
      address: "",
      city: "",
      neighborhood: "",
    },
    type: "Casa",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    images: [],
    amenities: [],
    featured: false,
    agent: {
      name: "",
      phone: "",
      email: "",
    },
  };
  static seedData = MOCK_PROPERTIES;
}