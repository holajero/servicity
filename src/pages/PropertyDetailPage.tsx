import { useParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { BedDouble, Bath, Ruler, MapPin, CheckCircle, Mail, Phone, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Property } from "@shared/types";
import { Skeleton } from "@/components/ui/skeleton";
function PropertyDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Skeleton className="w-full aspect-video rounded-lg" />
          <div className="mt-8">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-3/4 mt-4" />
            <Skeleton className="h-6 w-1/2 mt-2" />
            <Skeleton className="h-12 w-1/3 mt-4" />
            <div className="flex flex-wrap gap-6 mt-6 border-t border-b py-4">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-36" />
            </div>
          </div>
          <div className="mt-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-24 w-full mt-4" />
          </div>
        </div>
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
export function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: property, isLoading, isError } = useQuery<Property>({
    queryKey: ['property', id],
    queryFn: () => api(`/api/properties/${id}`),
    enabled: !!id,
  });
  if (isLoading) {
    return <MainLayout><PropertyDetailSkeleton /></MainLayout>;
  }
  if (isError || !property) {
    return (
      <MainLayout>
        <div className="text-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="mt-4 text-2xl font-bold">Propiedad no encontrada</h1>
          <p className="text-muted-foreground mt-2">La propiedad que buscas no existe o fue removida.</p>
          <Button asChild className="mt-6">
            <a href="/propiedades">Volver a Propiedades</a>
          </Button>
        </div>
      </MainLayout>
    );
  }
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: property.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
              <CarouselContent>
                {property.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={img} alt={`${property.title} - imagen ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            {/* Property Info */}
            <div className="mt-8">
              <Badge variant="secondary">{property.type}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mt-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground text-lg mt-2">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{property.location.address}, {property.location.neighborhood}, {property.location.city}</span>
              </div>
              <p className="text-4xl font-bold text-brand-primary mt-4">{formatter.format(property.price)}</p>
              <div className="flex flex-wrap gap-6 mt-6 border-t border-b py-4">
                <div className="flex items-center text-lg" title="Dormitorios">
                  <BedDouble className="w-6 h-6 mr-2 text-brand-accent" />
                  <span>{property.bedrooms} Dormitorios</span>
                </div>
                <div className="flex items-center text-lg" title="Baños">
                  <Bath className="w-6 h-6 mr-2 text-brand-accent" />
                  <span>{property.bathrooms} Baños</span>
                </div>
                <div className="flex items-center text-lg" title="Superficie">
                  <Ruler className="w-6 h-6 mr-2 text-brand-accent" />
                  <span>{property.area} m² Cubiertos</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-brand-primary">Descripción</h2>
              <p className="mt-4 text-muted-foreground whitespace-pre-wrap">{property.description}</p>
            </div>
            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-brand-primary">Comodidades</h2>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Agent Contact Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>Contactar al Agente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <p className="font-semibold">{property.agent.name}</p>
                      <p className="text-sm text-muted-foreground">Agente Inmobiliario</p>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="Tu teléfono" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" defaultValue={`Hola, estoy interesado/a en la propiedad "${property.title}" (ID: ${property.id}).`} />
                    </div>
                    <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Consulta
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}