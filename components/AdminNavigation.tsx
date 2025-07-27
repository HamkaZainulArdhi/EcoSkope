import React from 'react';
import { Home, Users, Database, BarChart3, Settings, Menu, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Badge } from './ui/badge';

interface AdminNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: 'admin-dashboard', label: 'Dashboard Admin', icon: Home },
  { id: 'user-management', label: 'Kelola Pengguna', icon: Users },
  { id: 'data-management', label: 'Data Pertanian', icon: Database },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'admin-settings', label: 'Pengaturan', icon: Settings },
];

export function AdminNavigation({ currentPage, onPageChange }: AdminNavigationProps) {
  const NavigationContent = () => (
    <nav className="flex flex-col space-y-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={currentPage === item.id ? "default" : "ghost"}
            className="justify-start w-full"
            onClick={() => onPageChange(item.id)}
          >
            <Icon className="w-4 h-4 mr-3" />
            {item.label}
            {item.id === 'user-management' && (
              <Badge variant="secondary" className="ml-auto">42</Badge>
            )}
          </Button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-card border-r p-6 flex-col">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-primary">EcoScope</h1>
          </div>
          <p className="text-muted-foreground">Admin Panel</p>
          <Badge variant="destructive" className="mt-2">Administrator</Badge>
        </div>
        <NavigationContent />
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-card border-b">
        <div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold text-primary">EcoScope</h1>
          </div>
          <p className="text-sm text-muted-foreground">Admin Panel</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <Menu className="w-4 h-4" />
              <span className="sr-only">Open admin navigation menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetTitle>Admin Navigation</SheetTitle>
            <SheetDescription>Navigate through the EcoScope Banyumas admin panel</SheetDescription>
            <div className="mb-8 mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold text-primary">EcoScope</h1>
              </div>
              <p className="text-muted-foreground">Admin Panel</p>
              <Badge variant="destructive" className="mt-2">Administrator</Badge>
            </div>
            <NavigationContent />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}