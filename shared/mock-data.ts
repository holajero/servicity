import type { Property } from './types';
export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Moderno Departamento en Palermo Hollywood',
    description: 'Espectacular departamento de 2 ambientes con balcón aterrazado. Lleno de luz y sol. Edificio con amenities de lujo: piscina, SUM, parrilla, gimnasio y seguridad 24hs. Ubicación inmejorable en el corazón de Palermo Hollywood.',
    price: 250000,
    currency: 'USD',
    location: {
      address: 'Humboldt 1234',
      city: 'CABA',
      neighborhood: 'Palermo Hollywood',
      coordinates: { lat: -34.5833, lng: -58.4333 }
    },
    type: 'Departamento',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Piscina', 'Gimnasio', 'SUM', 'Seguridad 24hs', 'Balcón'],
    featured: true,
    agent: {
      name: 'Juan Pérez',
      phone: '+54 9 11 1234-5678',
      email: 'juan.perez@servicity.com.ar'
    }
  },
  {
    id: '2',
    title: 'Casa con Jardín y Pileta en Belgrano R',
    description: 'Hermosa casa de estilo clásico en una de las zonas más exclusivas de Belgrano. Cuenta con 4 dormitorios, amplio jardín con pileta y quincho. Ideal para una familia que busca tranquilidad y confort.',
    price: 850000,
    currency: 'USD',
    location: {
      address: 'Melián 2345',
      city: 'CABA',
      neighborhood: 'Belgrano R',
      coordinates: { lat: -34.5625, lng: -58.4583 }
    },
    type: 'Casa',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Jardín', 'Pileta', 'Quincho', 'Garage', 'Lavadero'],
    featured: true,
    agent: {
      name: 'María García',
      phone: '+54 9 11 8765-4321',
      email: 'maria.garcia@servicity.com.ar'
    }
  },
  {
    id: '3',
    title: 'PH Reciclado a Nuevo en Villa Crespo',
    description: 'Encantador PH de 3 ambientes en planta baja, totalmente reciclado con detalles de diseño. Patio privado con parrilla. Bajas expensas. A metros del subte B.',
    price: 180000,
    currency: 'USD',
    location: {
      address: 'Serrano 567',
      city: 'CABA',
      neighborhood: 'Villa Crespo',
      coordinates: { lat: -34.5958, lng: -58.4431 }
    },
    type: 'PH',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571105401298-2b9b8b1a1a1b?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Patio', 'Parrilla', 'Bajas Expensas', 'Reciclado a nuevo'],
    featured: false,
    agent: {
      name: 'Juan Pérez',
      phone: '+54 9 11 1234-5678',
      email: 'juan.perez@servicity.com.ar'
    }
  },
  {
    id: '4',
    title: 'Luminoso Semipiso en Recoleta',
    description: 'Elegante semipiso sobre Av. Alvear. Palier privado, gran recepción, 3 dormitorios en suite y dependencia de servicio. Vistas abiertas y excelente luminosidad. Cochera y baulera.',
    price: 1200000,
    currency: 'USD',
    location: {
      address: 'Av. Alvear 1800',
      city: 'CABA',
      neighborhood: 'Recoleta',
      coordinates: { lat: -34.5889, lng: -58.3917 }
    },
    type: 'Departamento',
    bedrooms: 3,
    bathrooms: 4,
    area: 250,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605276374104-5de67d18394b?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop',
    ],
    amenities: ['Palier Privado', 'Dependencia de Servicio', 'Cochera', 'Baulera', 'Vigilancia'],
    featured: true,
    agent: {
      name: 'María García',
      phone: '+54 9 11 8765-4321',
      email: 'maria.garcia@servicity.com.ar'
    }
  },
  {
    id: '5',
    title: 'Local Comercial en Esquina Estratégica',
    description: 'Excelente local comercial en esquina con gran visibilidad en el barrio de Caballito. Amplia vidriera, planta libre y sótano. Apto para diversos rubros. Alto tránsito peatonal y vehicular.',
    price: 3500,
    currency: 'USD',
    location: {
      address: 'Av. Rivadavia 5500',
      city: 'CABA',
      neighborhood: 'Caballito',
      coordinates: { lat: -34.6189, lng: -58.4436 }
    },
    type: 'Local',
    bedrooms: 0,
    bathrooms: 1,
    area: 120,
    images: [
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596399323849-3d44b1a575b2?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Esquina', 'Vidriera', 'Sótano', 'Apto todo rubro'],
    featured: false,
    agent: {
      name: 'Carlos Rodriguez',
      phone: '+54 9 11 5555-4444',
      email: 'carlos.rodriguez@servicity.com.ar'
    }
  },
  {
    id: '6',
    title: 'Terreno Único en San Isidro',
    description: 'Oportunidad única. Lote de 800m2 en la mejor zona de Lomas de San Isidro. Ideal para construir la casa de tus sueños. Entorno arbolado y tranquilo, con excelentes accesos.',
    price: 600000,
    currency: 'USD',
    location: {
      address: 'Tomkinson 3000',
      city: 'San Isidro',
      neighborhood: 'Lomas de San Isidro',
      coordinates: { lat: -34.485, lng: -58.535 }
    },
    type: 'Terreno',
    bedrooms: 0,
    bathrooms: 0,
    area: 800,
    images: [
      'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604709177595-ee9c2541e842?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Excelente ubicación', 'Entorno arbolado', 'Buen acceso'],
    featured: false,
    agent: {
      name: 'María García',
      phone: '+54 9 11 8765-4321',
      email: 'maria.garcia@servicity.com.ar'
    }
  },
  {
    id: '7',
    title: 'Acogedor 2 Ambientes en Almagro',
    description: 'Lindo departamento de 2 ambientes, muy luminoso y en excelente estado. Cocina separada y lavadero independiente. Ubicado a pocas cuadras de Av. Corrientes y del Parque Centenario.',
    price: 95000,
    currency: 'USD',
    location: {
      address: 'Pringles 400',
      city: 'CABA',
      neighborhood: 'Almagro',
      coordinates: { lat: -34.6083, lng: -58.425 }
    },
    type: 'Departamento',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Luminoso', 'Cocina separada', 'Lavadero'],
    featured: false,
    agent: {
      name: 'Juan Pérez',
      phone: '+54 9 11 1234-5678',
      email: 'juan.perez@servicity.com.ar'
    }
  },
  {
    id: '8',
    title: 'Casa a Estrenar en Nordelta',
    description: 'Impresionante casa de diseño moderno a estrenar con vista al lago. Materiales de primera calidad, 5 suites, playroom, y una increíble galería con parrilla. Muelle propio.',
    price: 1500000,
    currency: 'USD',
    location: {
      address: 'Barrio Los Castores 123',
      city: 'Tigre',
      neighborhood: 'Nordelta',
      coordinates: { lat: -34.413, lng: -58.645 }
    },
    type: 'Casa',
    bedrooms: 5,
    bathrooms: 6,
    area: 550,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
    ],
    amenities: ['Vista al Lago', 'A Estrenar', 'Piscina', 'Muelle', 'Diseño Moderno'],
    featured: true,
    agent: {
      name: 'María García',
      phone: '+54 9 11 8765-4321',
      email: 'maria.garcia@servicity.com.ar'
    }
  }
];