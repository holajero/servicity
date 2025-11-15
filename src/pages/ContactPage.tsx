import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { api } from "@/lib/api-client";
import type { ContactFormPayload } from "@shared/types";
import { DynamicMap } from "@/components/DynamicMap";
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Por favor, ingresa un email válido." }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
});
export function ContactPage() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  const { isSubmitting } = form.formState;
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await api<ContactFormPayload>('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values)
      });
      toast.success("¡Mensaje enviado!", {
        description: "Gracias por contactarnos. Te responderemos a la brevedad."
      });
      form.reset();
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, intenta nuevamente más tarde."
      });
    }
  }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) =>
                      <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      } />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) =>
                      <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      } />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) =>
                    <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Consulta sobre propiedad ID 123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    } />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) =>
                    <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Escribe tu mensaje aquí..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    } />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </Form>
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
                    <p className="text-muted-foreground">contacto@servicity.com.ar</p>
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
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <DynamicMap coordinates={{ lat: -34.58, lng: -58.4 }} popupText="ServiCity.com.ar Oficinas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}