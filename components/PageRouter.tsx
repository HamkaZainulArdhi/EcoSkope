import React from "react";
import { Dashboard } from "./Dashboard";
import { AdminDashboard } from "./AdminDashboard";
import { SlopeAnalysis } from "./SlopeAnalysis";
import { WeatherPrediction } from "./WeatherPrediction";
import { PricePrediction } from "./PricePrediction";
import { AccountPage } from "./AccountPage";
import { EditProfile } from "./EditProfile";
import { ChangePassword } from "./ChangePassword";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Shield,
  Users,
  Database,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

interface PageRouterProps {
  currentPage: string;
  userRole: "farmer" | "admin";
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function PageRouter({
  currentPage,
  userRole,
  onNavigate,
  onLogout,
}: PageRouterProps) {
  const renderPage = () => {
    switch (currentPage) {
      // User Pages
      case "dashboard":
        return <Dashboard onNavigate={onNavigate} />;
      case "slope":
        return <SlopeAnalysis />;
      case "weather":
        return <WeatherPrediction />;
      case "price":
        return <PricePrediction />;
      case "account":
        return <AccountPage onLogout={onLogout} onNavigate={onNavigate} />;
      case "edit-profile":
        return <EditProfile onBack={() => onNavigate("account")} />;
      case "change-password":
        return <ChangePassword onBack={() => onNavigate("account")} />;

      // Admin Pages
      case "admin-dashboard":
        return <AdminDashboard onNavigate={onNavigate} />;
      case "user-management":
        return <AdminUserManagement onNavigate={onNavigate} />;
      case "data-management":
        return <AdminDataManagement onNavigate={onNavigate} />;
      case "analytics":
        return <AdminAnalytics onNavigate={onNavigate} />;
      case "admin-settings":
        return <AdminSettings onLogout={onLogout} onNavigate={onNavigate} />;

      default:
        return userRole === "admin" ? (
          <AdminDashboard onNavigate={onNavigate} />
        ) : (
          <Dashboard onNavigate={onNavigate} />
        );
    }
  };

  return <>{renderPage()}</>;
}

// Admin page components
function AdminUserManagement({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Manajemen Pengguna</h1>
        <p className="text-muted-foreground">
          Kelola akun pengguna sistem EcoScope
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Total Pengguna
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">2,456</div>
            <p className="text-sm text-muted-foreground">Pengguna aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">5</div>
            <p className="text-sm text-muted-foreground">Administrator</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">🌾 Petani</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">2,451</div>
            <p className="text-sm text-muted-foreground">Petani aktif</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Manajemen Pengguna</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Fitur manajemen pengguna lengkap sedang dalam pengembangan. Saat
              ini Anda dapat melihat statistik pengguna di dashboard utama.
            </p>
            <Button onClick={() => onNavigate("admin-dashboard")}>
              Kembali ke Dashboard Admin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminDataManagement({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Manajemen Data Pertanian</h1>
        <p className="text-muted-foreground">
          Kelola data komoditas, harga, dan informasi pertanian
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Data Komoditas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">15</div>
            <p className="text-sm text-muted-foreground">Jenis komoditas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">💰 Data Harga</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">1,234</div>
            <p className="text-sm text-muted-foreground">Record harga</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              📊 Data Prediksi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">89%</div>
            <p className="text-sm text-muted-foreground">Akurasi prediksi</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Manajemen Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Sistem manajemen data pertanian yang terintegrasi dengan AI untuk
              prediksi harga dan cuaca. Fitur CRUD lengkap sedang dalam
              pengembangan.
            </p>
            <Button onClick={() => onNavigate("admin-dashboard")}>
              Kembali ke Dashboard Admin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminAnalytics({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Analytics & Reporting</h1>
        <p className="text-muted-foreground">
          Analisis data dan laporan sistem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Penggunaan Harian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">1,847</div>
            <p className="text-sm text-muted-foreground">Aktifitas hari ini</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">📈 Tren Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">+12%</div>
            <p className="text-sm text-muted-foreground">
              Pertumbuhan pengguna
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">⚠️ Alert System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">7</div>
            <p className="text-sm text-muted-foreground">Alert aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">🎯 Akurasi AI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">89.5%</div>
            <p className="text-sm text-muted-foreground">Prediksi akurat</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Dashboard analytics lengkap dengan grafik interaktif dan laporan
              detail sedang dalam pengembangan untuk memberikan insight yang
              lebih mendalam.
            </p>
            <Button onClick={() => onNavigate("admin-dashboard")}>
              Kembali ke Dashboard Admin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminSettings({
  onLogout,
  onNavigate,
}: {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Pengaturan Admin</h1>
        <p className="text-muted-foreground">
          Konfigurasi sistem dan pengaturan administrator
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Sistem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Maintenance Mode</span>
                <input type="checkbox" className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Auto Backup</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Keamanan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>2FA Required</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Session Timeout</span>
                <select className="px-3 py-1 border rounded">
                  <option>30 menit</option>
                  <option>1 jam</option>
                  <option>2 jam</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span>Login Attempts</span>
                <select className="px-3 py-1 border rounded">
                  <option>3 kali</option>
                  <option>5 kali</option>
                  <option>10 kali</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informasi Sistem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Versi:</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Database:</span>
                <span>PostgreSQL 15.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Server:</span>
                <span>Ubuntu 22.04</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uptime:</span>
                <span>7 hari 14 jam</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aksi Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Backup Database
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Reset Cache
              </Button>
              <Button
                variant="destructive"
                className="w-full justify-start"
                onClick={onLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout Admin
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
