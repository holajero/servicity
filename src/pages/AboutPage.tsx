import { MainLayout } from "@/components/layout/MainLayout";
import { Building, Target, Users, Handshake } from "lucide-react";
export function AboutPage() {
  const teamMembers = [
    { name: "Juan P��rez", role: "CEO & Fundador", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" },
    { name: "María García", role: "Directora de Ventas", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
    { name: "Carlos Rodriguez", role: "Especialista en Alquileres", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
  ];
  return (
    <MainLayout>
      <div className="bg-brand-primary text-brand-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Sobre Urbe Hogar</h1>
          <p className="mt-4 text-lg text-brand-primary-foreground/80 max-w-3xl mx-auto">
            Conectando personas con sus hogares soñados, con profesionalismo, pasión y un profundo conocimiento del mercado inmobiliario.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Nuestra Historia</h2>
              <p className="mt-4 text-muted-foreground">
                Fundada en 2010, Urbe Hogar nació de la visión de crear una inmobiliaria diferente, centrada en la confianza y la transparencia. Con más de una década de experiencia, nos hemos consolidado como líderes en el mercado, ayudando a miles de familias a encontrar su lugar en el mundo.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nuestro equipo de expertos combina la última tecnología con un trato personalizado para ofrecer un servicio de excelencia. Creemos que cada propiedad tiene una historia y cada cliente un sueño, y nuestra misión es unir ambos.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop" alt="Oficina de Urbe Hogar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Target className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Nuestra Misión</h3>
              <p className="mt-2 text-muted-foreground">Ofrecer un asesoramiento inmobiliario integral y personalizado, superando las expectativas de nuestros clientes a través de la ética y el compromiso.</p>
            </div>
            <div className="p-6">
              <Building className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Nuestra Visión</h3>
              <p className="mt-2 text-muted-foreground">Ser la inmobiliaria de referencia en el mercado, reconocida por nuestra innovación, confiabilidad y la calidad de nuestras relaciones humanas.</p>
            </div>
            <div className="p-6">
              <Handshake className="h-12 w-12 mx-auto text-brand-accent" />
              <h3 className="mt-4 text-xl font-semibold">Nuestros Valores</h3>
              <p className="mt-2 text-muted-foreground">Integridad, Pasión, Profesionalismo, Empatía y Orientación al Cliente son los pilares que guían cada una de nuestras acciones.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto text-brand-accent" />
            <h2 className="mt-4 text-3xl font-bold text-brand-primary">Conoce a Nuestro Equipo</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados y dedicados, listos para ayudarte en cada paso del camino.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img className="w-32 h-32 rounded-full mx-auto object-cover" src={member.image} alt={member.name} />
                <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
                <p className="text-brand-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}