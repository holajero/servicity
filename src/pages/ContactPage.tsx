import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
export function ContactPage() {
  return (
    <MainLayout>
      <div className="bg-brand-primary text-brand-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
          <p className="mt-4 text-lg text-brand-primary-foreground/80 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-primary">Envíanos un Mensaje</h2>
                <p className="mt-2 text-muted-foreground">Completa el formulario y nuestro equipo se pondrá en contacto contigo.</p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Ej: Consulta sobre propiedad ID 123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
                </div>
                <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-primary">Información de Contacto</h2>
                <p className="mt-2 text-muted-foreground">También puedes encontrarnos en nuestra oficina o contactarnos directamente.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nuestra Oficina</h3>
                    <p className="text-muted-foreground">Av. Libertador 1234, CABA, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contacto@urbehogar.com.ar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">(011) 4567-8901</p>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {/* Placeholder for map */}
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop" alt="Mapa de la oficina" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}