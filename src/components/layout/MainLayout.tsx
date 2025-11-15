import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
type MainLayoutProps = {
  children: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    document.title = "ServiCity.com.ar | Inmobiliaria";
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-brand-background">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}