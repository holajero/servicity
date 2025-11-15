import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Building, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Propiedades", path: "/propiedades" },
    { name: "Nosotros", path: "/nosotros" },
  ];
  const NavLinkItem = ({ path, name }: { path: string; name: string }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          "text-sm font-medium transition-colors hover:text-brand-accent",
          isActive ? "text-brand-accent" : "text-brand-primary-foreground"
        )
      }
      onClick={() => setSheetOpen(false)}
    >
      {name}
    </NavLink>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-brand-primary/95 backdrop-blur supports-[backdrop-filter]:bg-brand-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building className="h-7 w-7 text-brand-accent" />
            <span className="text-xl font-bold text-brand-primary-foreground">ServiCity</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLinkItem key={link.name} {...link} />
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline" className="bg-transparent border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-accent-foreground">
              <Link to="/contacto">
                <Phone className="mr-2 h-4 w-4" />
                Contacto
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-brand-primary-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-brand-primary text-brand-primary-foreground">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-brand-primary-foreground/20">
                     <Link to="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <Building className="h-7 w-7 text-brand-accent" />
                        <span className="text-xl font-bold text-brand-primary-foreground">ServiCity</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6 text-brand-primary-foreground" />
                        </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-6 p-4 mt-4">
                    {navLinks.map((link) => (
                      <NavLinkItem key={link.name} {...link} />
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button asChild className="w-full bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90">
                      <Link to="/contacto" onClick={() => setSheetOpen(false)}>
                        <Phone className="mr-2 h-4 w-4" />
                        Contacto
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}