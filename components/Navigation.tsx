import React from "react";
import { Home, Mountain, CloudSun, TrendingUp, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "slope", label: "Analisis Lereng", icon: Mountain },
  { id: "weather", label: "Prediksi Cuaca", icon: CloudSun },
  { id: "price", label: "Prediksi Harga", icon: TrendingUp },
  { id: "account", label: "Akun", icon: User },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const NavigationContent = () => (
    <nav className="flex flex-col space-y-4">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={currentPage === item.id ? "default" : "ghost"}
            className="justify-start w-full text-xl"
            onClick={() => onPageChange(item.id)}
          >
            <Icon className="w-6 h-6 mr-3" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-84 bg-card border-r p-6 flex-col">
        <div className="mb-8">
          {/* <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🌱</span>
            <h1 className="text-2xl font-bold text-primary">EcoScope</h1>
          </div> */}
          <div className="flex items-center space-x-2 mb-2">
  <img src="src/assets/logo.svg" alt="EcoScope Logo" className="w-20 h-20" />
  <h1 className="text-2xl font-bold text-primary">EcoScope</h1>
</div>

          <p className="text-muted-foreground">
            Monitoring Lingkungan Banyumas
          </p>
        </div>
        <NavigationContent />
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-card border-b">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🌱</span>
            <h1 className="text-xl font-bold text-primary">EcoScope</h1>
          </div>
          <p className="text-sm text-muted-foreground">Banyumas</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <Menu className="w-4 h-4" />
              <span className="sr-only">Open navigation menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetTitle>EcoScope Navigation</SheetTitle>
            <SheetDescription>
              Navigate through the EcoScope Banyumas application
            </SheetDescription>
            <div className="mb-8 mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">🌱</span>
                <h1 className="text-2xl font-bold text-primary">EcoScope</h1>
              </div>
              <p className="text-muted-foreground">
                Monitoring Lingkungan Banyumas
              </p>
            </div>
            <NavigationContent />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
