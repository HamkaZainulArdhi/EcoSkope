import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import {
  Mountain,
  Cloud,
  TrendingUp,
  AlertTriangle,
  Sun,
  CloudRain,
  Thermometer,
} from "lucide-react";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const slopeStatus = {
    risk: "medium",
    label: "Risiko Sedang",
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    bgColor: "bg-yellow-50",
  };

  const weatherData = [
    { day: "Sen", icon: Sun, temp: "24-32°C" },
    { day: "Sel", icon: CloudRain, temp: "22-28°C" },
    { day: "Rab", icon: Sun, temp: "25-33°C" },
    { day: "Kam", icon: Sun, temp: "26-34°C" },
    { day: "Jum", icon: CloudRain, temp: "21-27°C" },
    { day: "Sab", icon: Sun, temp: "24-31°C" },
    { day: "Min", icon: Sun, temp: "25-32°C" },
  ];

  const commodityPrices = [
    { name: "Padi", price: "Rp 6.200", trend: "up", change: "+2.5%" },
    { name: "Cabai", price: "Rp 35.000", trend: "down", change: "-5.2%" },
    { name: "Bawang Merah", price: "Rp 28.500", trend: "up", change: "+1.8%" },
  ];

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard EcoScope</h1>
        <p className="text-muted-foreground">
          Monitoring lingkungan dan pasar untuk Kabupaten Banyumas
        </p>
      </div>

      {/* Alert Banner */}
      <Alert className="mb-6 border-yellow-200 bg-yellow-50">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertDescription className="text-yellow-800">
          <strong>Peringatan:</strong> Curah hujan tinggi diprediksi besok.
          Pantau kondisi lereng di area Anda.
        </AlertDescription>
      </Alert>

      {/* Main Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Slope Risk Card */}
        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate("slope")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Status Kemiringan Lereng
            </CardTitle>
            <Mountain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3 mb-3">
              <div
                className={`w-4 h-4 rounded-full ${slopeStatus.color}`}
              ></div>
              <span className={`font-medium ${slopeStatus.textColor}`}>
                {slopeStatus.label}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Berdasarkan data drone dan satelit terbaru
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Lihat Detail Slope
            </Button>
          </CardContent>
        </Card>

        {/* Weather Card */}
        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate("weather")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Prediksi Cuaca 7 Hari
            </CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 mb-3">
              {weatherData.map((day, index) => {
                const Icon = day.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">
                      {day.day}
                    </div>
                    <Icon className="h-4 w-4 mx-auto mb-1 text-blue-500" />
                    <div className="text-xs">{day.temp}</div>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Cek Cuaca
            </Button>
          </CardContent>
        </Card>

        {/* Market Price Card */}
        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate("price")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Harga Pasar Komoditas
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-3">
              {commodityPrices.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{item.price}</span>
                    <Badge
                      variant={item.trend === "up" ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {item.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Cek Harga
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">156</div>
            <p className="text-xs text-muted-foreground">Desa Terpantau</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <p className="text-xs text-muted-foreground">Akurasi Prediksi</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2.4K</div>
            <p className="text-xs text-muted-foreground">Petani Aktif</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <p className="text-xs text-muted-foreground">Komoditas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
