import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ListFilter, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Property } from "@shared/types";
import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton";
import { useDebounce } from "@/hooks/use-debounce";
export function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || 'all');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || 'any');
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get('minPrice')) || 50000,
    Number(searchParams.get('maxPrice')) || 1500000
  ]);
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'relevance');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const queryParams = useMemo(() => {
    const params = new URLSearchParams();
    if (debouncedSearchTerm) params.set('search', debouncedSearchTerm);
    if (propertyType !== 'all') params.set('type', propertyType);
    if (bedrooms !== 'any') params.set('bedrooms', bedrooms);
    params.set('minPrice', String(priceRange[0]));
    params.set('maxPrice', String(priceRange[1]));
    if (sortBy !== 'relevance') params.set('sortBy', sortBy);
    return params;
  }, [debouncedSearchTerm, propertyType, bedrooms, priceRange, sortBy]);
  const { data: propertiesData, isLoading } = useQuery<{ items: Property[] }>({
    queryKey: ['properties', queryParams.toString()],
    queryFn: () => api(`/api/properties?${queryParams.toString()}`),
    placeholderData: (previousData) => previousData,
  });
  const handleApplyFilters = () => {
    setSearchParams(queryParams);
  };
  const properties = propertiesData?.items || [];
  return (
    <MainLayout>
      <div className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary">Nuestras Propiedades</h1>
          <p className="mt-2 text-muted-foreground">Encuentra la propiedad que se ajusta a tus necesidades.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 mb-6">
                <ListFilter className="h-5 w-5 text-brand-primary" />
                <h3 className="text-xl font-semibold text-brand-primary">Filtros</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="search">Búsqueda</Label>
                  <div className="relative mt-2">
                    <Input id="search" placeholder="Barrio, dirección..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label>Tipo de Propiedad</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="Casa">Casa</SelectItem>
                      <SelectItem value="Departamento">Departamento</SelectItem>
                      <SelectItem value="PH">PH</SelectItem>
                      <SelectItem value="Local">Local</SelectItem>
                      <SelectItem value="Terreno">Terreno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Dormitorios</Label>
                   <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Cualquiera</SelectItem>
                      <SelectItem value="1">1 o más</SelectItem>
                      <SelectItem value="2">2 o más</SelectItem>
                      <SelectItem value="3">3 o más</SelectItem>
                      <SelectItem value="4">4 o más</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Rango de Precio (USD)</Label>
                  <div className="mt-4">
                    <Slider value={priceRange} onValueChange={(value) => setPriceRange(value as [number, number])} max={2000000} step={10000} />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>${(priceRange[0] / 1000)}k</span>
                      <span>${(priceRange[1] / 1000)}k</span>
                    </div>
                  </div>
                </div>
                <Button onClick={handleApplyFilters} className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground">Aplicar Filtros</Button>
              </div>
            </div>
          </aside>
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{isLoading ? 'Buscando...' : `${properties.length} propiedades encontradas`}</p>
              <div className="flex items-center gap-2">
                <Label className="text-sm">Ordenar por:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevancia</SelectItem>
                    <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="date-desc">Más Recientes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isLoading && properties.length === 0 ? (
                Array.from({ length: 8 }).map((_, i) => <PropertyCardSkeleton key={i} />)
              ) : properties.length > 0 ? (
                properties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="md:col-span-2 text-center py-12">
                  <p className="text-lg font-semibold">No se encontraron propiedades</p>
                  <p className="text-muted-foreground mt-2">Intenta ajustar tus filtros de búsqueda.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}