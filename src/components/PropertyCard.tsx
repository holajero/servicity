import { Link } from "react-router-dom";
import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@shared/types";
interface PropertyCardProps {
  property: Property;
}
export function PropertyCard({ property }: PropertyCardProps) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: property.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Link to={`/propiedades/${property.id}`} className="group block">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0 relative">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover w-full h-full"
            />
          </div>
          {property.featured && (
            <Badge className="absolute top-3 right-3 bg-brand-accent text-brand-accent-foreground">
              Destacado
            </Badge>
          )}
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-2xl font-bold text-brand-primary">
            {formatter.format(property.price)}
          </p>
          <h3 className="text-lg font-semibold mt-2 truncate group-hover:text-brand-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
            <span>{property.location.neighborhood}, {property.location.city}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-muted/50 border-t">
          <div className="flex justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center" title="Dormitorios">
              <BedDouble className="w-4 h-4 mr-1.5 text-brand-primary/70" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center" title="Baños">
              <Bath className="w-4 h-4 mr-1.5 text-brand-primary/70" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center" title="Superficie">
              <Ruler className="w-4 h-4 mr-1.5 text-brand-primary/70" />
              <span>{property.area} m²</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}