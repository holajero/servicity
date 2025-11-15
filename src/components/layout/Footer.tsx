import { Building, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
export function Footer() {
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Propiedades", path: "/propiedades" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];
  return (
    <footer className="bg-brand-primary text-brand-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-brand-accent" />
              <span className="text-2xl font-bold">Urbe Hogar</span>
            </Link>
            <p className="text-sm text-brand-primary-foreground/80">
              Tu socio de confianza en bienes raíces.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-accent">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-brand-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-accent">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Av. Libertador 1234, CABA</li>
              <li>(011) 4567-8901</li>
              <li>contacto@urbehogar.com.ar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-accent">Síguenos</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-brand-primary-foreground/80 hover:text-brand-accent transition-colors">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-primary-foreground/20 text-center text-sm text-brand-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Urbe Hogar. Todos los derechos reservados.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}