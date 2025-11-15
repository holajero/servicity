export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type PropertyType = 'Casa' | 'Departamento' | 'PH' | 'Local' | 'Terreno';
export type Currency = 'USD' | 'ARS';
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: Currency;
  location: {
    address: string;
    city: string;
    neighborhood: string;
  };
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square meters
  images: string[];
  amenities: string[];
  featured: boolean;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}