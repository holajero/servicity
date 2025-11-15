import { MainLayout } from "@/components/layout/MainLayout";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Building, Users, Handshake } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Property } from "@shared/types";
import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton";
export function HomePage() {
  const { data: properties, isLoading } = useQuery<{ items: Property[] }>({
    queryKey: ['properties'],
    queryFn: () => api('/api/properties')
  });
  const featuredProperties = properties?.items.filter(p => p.featured).slice(0, 6) || [];
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">Encuentra tu Hogar Ideal</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in animation-delay-300">
            La propiedad de tus sueños está a solo un clic de distancia. Explora nuestro catálogo y déjanos guiarte a casa.
          </p>
          <div className="mt-8 w-full max-w-4xl p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <Input placeholder="Buscar por barrio o dirección..." className="md:col-span-2 bg-white/80 text-gray-800 placeholder:text-gray-500 border-0 focus-visible:ring-brand-accent" />
              <Select>
                <SelectTrigger className="bg-white/80 text-gray-800 border-0 focus:ring-brand-accent">
                  <SelectValue placeholder="Tipo de Propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="departamento">Departamento</SelectItem>
                  <SelectItem value="ph">PH</SelectItem>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90">
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Properties Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Propiedades Destacadas</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de nuestras mejores propiedades disponibles en el mercado.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => <PropertyCardSkeleton key={i} />)
            ) : (
              featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground">
              <a href="/propiedades">Ver Todas las Propiedades</a>
            </Button>
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">¿Por qué elegir Urbe Hogar?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Te ofrecemos un servicio integral y personalizado para que tu experiencia sea excepcional.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Building className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Amplio Catálogo</h3>
              <p className="mt-2 text-muted-foreground">Las mejores propiedades en las ubicaciones m��s deseadas de la ciudad y sus alrededores.</p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Asesores Expertos</h3>
              <p className="mt-2 text-muted-foreground">Un equipo de profesionales con profundo conocimiento del mercado para guiarte en cada paso.</p>
            </div>
            <div className="p-6">
              <Handshake className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Confianza y Transparencia</h3>
              <p className="mt-2 text-muted-foreground">Construimos relaciones a largo plazo basadas en la honestidad y el compromiso con tus objetivos.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}