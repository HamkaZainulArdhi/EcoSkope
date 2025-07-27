import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Zap,
  Thermometer,
  Droplets,
  Sprout,
  Calendar,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function WeatherPrediction() {
  const [selectedLocation, setSelectedLocation] = useState("sumbang");

  const weeklyWeather = [
    {
      day: "Sen",
      date: "27 Jul",
      icon: Sun,
      weather: "Cerah",
      temp: "24-32°C",
      rain: 0,
      humidity: 65,
      plantAdvice: "good",
    },
    {
      day: "Sel",
      date: "28 Jul",
      icon: CloudRain,
      weather: "Hujan Ringan",
      temp: "22-28°C",
      rain: 15,
      humidity: 85,
      plantAdvice: "caution",
    },
    {
      day: "Rab",
      date: "29 Jul",
      icon: Zap,
      weather: "Hujan Lebat",
      temp: "21-26°C",
      rain: 45,
      humidity: 90,
      plantAdvice: "avoid",
    },
    {
      day: "Kam",
      date: "30 Jul",
      icon: CloudRain,
      weather: "Hujan Ringan",
      temp: "23-29°C",
      rain: 20,
      humidity: 80,
      plantAdvice: "caution",
    },
    {
      day: "Jum",
      date: "31 Jul",
      icon: Cloud,
      weather: "Berawan",
      temp: "24-30°C",
      rain: 5,
      humidity: 70,
      plantAdvice: "good",
    },
    {
      day: "Sab",
      date: "1 Agu",
      icon: Sun,
      weather: "Cerah",
      temp: "25-33°C",
      rain: 0,
      humidity: 60,
      plantAdvice: "excellent",
    },
    {
      day: "Min",
      date: "2 Agu",
      icon: Sun,
      weather: "Cerah",
      temp: "26-34°C",
      rain: 0,
      humidity: 55,
      plantAdvice: "excellent",
    },
  ];

  const rainfallData = [
    { day: "Sen", rainfall: 0, temp: 28 },
    { day: "Sel", rainfall: 15, temp: 25 },
    { day: "Rab", rainfall: 45, temp: 23 },
    { day: "Kam", rainfall: 20, temp: 26 },
    { day: "Jum", rainfall: 5, temp: 27 },
    { day: "Sab", rainfall: 0, temp: 29 },
    { day: "Min", rainfall: 0, temp: 30 },
  ];

  const historicalData = [
    { month: "Feb", rainfall: 180, temp: 27 },
    { month: "Mar", rainfall: 220, temp: 28 },
    { month: "Apr", rainfall: 160, temp: 29 },
    { month: "Mei", rainfall: 140, temp: 28 },
    { month: "Jun", rainfall: 90, temp: 26 },
    { month: "Jul", rainfall: 120, temp: 25 },
  ];

  // New: Monthly planting recommendations
  const monthlyPlantingPredictions = [
    {
      month: "Agustus 2025",
      season: "Kemarau",
      rainfall: 80,
      temp: 26,
      recommendations: [
        {
          plant: "Jagung",
          suitability: "excellent",
          reason: "Cuaca kering ideal untuk jagung",
        },
        {
          plant: "Kacang Tanah",
          suitability: "good",
          reason: "Toleran terhadap kekeringan",
        },
        {
          plant: "Ubi Jalar",
          suitability: "good",
          reason: "Tahan kekeringan, hasil optimal",
        },
      ],
    },
    {
      month: "September 2025",
      season: "Peralihan",
      rainfall: 120,
      temp: 27,
      recommendations: [
        {
          plant: "Cabai",
          suitability: "excellent",
          reason: "Cuaca mulai lembab, ideal untuk cabai",
        },
        {
          plant: "Tomat",
          suitability: "good",
          reason: "Kelembaban cukup untuk pertumbuhan",
        },
        {
          plant: "Bayam",
          suitability: "excellent",
          reason: "Sayuran hijau tumbuh optimal",
        },
      ],
    },
    {
      month: "Oktober 2025",
      season: "Peralihan ke Hujan",
      rainfall: 180,
      temp: 26,
      recommendations: [
        {
          plant: "Padi",
          suitability: "excellent",
          reason: "Awal musim hujan, perfect untuk padi",
        },
        {
          plant: "Kangkung",
          suitability: "excellent",
          reason: "Sayuran air, butuh kelembaban tinggi",
        },
        {
          plant: "Kacang Panjang",
          suitability: "good",
          reason: "Curah hujan cukup untuk pertumbuhan",
        },
      ],
    },
    {
      month: "November 2025",
      season: "Musim Hujan",
      rainfall: 250,
      temp: 25,
      recommendations: [
        {
          plant: "Padi",
          suitability: "excellent",
          reason: "Peak musim hujan, optimal untuk padi",
        },
        {
          plant: "Kelapa Sawit",
          suitability: "good",
          reason: "Tanaman tahunan butuh air banyak",
        },
        {
          plant: "Pisang",
          suitability: "good",
          reason: "Kelembaban tinggi mendukung pertumbuhan",
        },
      ],
    },
    {
      month: "Desember 2025",
      season: "Musim Hujan",
      rainfall: 280,
      temp: 24,
      recommendations: [
        {
          plant: "Padi (Varietas Tahan Banjir)",
          suitability: "good",
          reason: "Gunakan varietas tahan genangan",
        },
        {
          plant: "Kangkung",
          suitability: "excellent",
          reason: "Optimal di kondisi basah",
        },
        {
          plant: "Eceng Gondok (Biomassa)",
          suitability: "good",
          reason: "Untuk kompos dan pakan ternak",
        },
      ],
    },
    {
      month: "Januari 2026",
      season: "Peak Musim Hujan",
      rainfall: 320,
      temp: 23,
      recommendations: [
        {
          plant: "Avoid Heavy Planting",
          suitability: "caution",
          reason: "Curah hujan sangat tinggi, risiko banjir",
        },
        {
          plant: "Perawatan Tanaman Existing",
          suitability: "caution",
          reason: "Focus pada drainase dan maintenance",
        },
        {
          plant: "Persiapan Bibit untuk Februari",
          suitability: "good",
          reason: "Siapkan bibit untuk setelah hujan reda",
        },
      ],
    },
  ];

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "caution":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSuitabilityText = (suitability: string) => {
    switch (suitability) {
      case "excellent":
        return "Sangat Cocok";
      case "good":
        return "Cocok";
      case "caution":
        return "Hati-hati";
      default:
        return "";
    }
  };

  const downloadPlantingGuide = () => {
    const content = monthlyPlantingPredictions
      .map(
        (month) =>
          `${month.month} (${month.season})\n` +
          `Curah Hujan: ${month.rainfall}mm | Suhu: ${month.temp}°C\n` +
          `Rekomendasi Tanaman:\n` +
          month.recommendations
            .map(
              (rec) =>
                `- ${rec.plant}: ${getSuitabilityText(rec.suitability)} (${
                  rec.reason
                })`
            )
            .join("\n") +
          "\n\n"
      )
      .join("");

    const blob = new Blob([`Panduan Tanam EcoScope Banyumas\n\n${content}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `panduan-tanam-${selectedLocation}-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getPlantAdviceColor = (advice: string) => {
    switch (advice) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "caution":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "avoid":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPlantAdviceText = (advice: string) => {
    switch (advice) {
      case "excellent":
        return "Sangat Baik";
      case "good":
        return "Baik";
      case "caution":
        return "Hati-hati";
      case "avoid":
        return "Hindari";
      default:
        return "";
    }
  };

  const getPlantAdviceIcon = (advice: string) => {
    switch (advice) {
      case "excellent":
        return <Sprout className="h-3 w-3 text-green-600" />;
      case "good":
        return <Sprout className="h-3 w-3 text-blue-600" />;
      case "caution":
        return <Sprout className="h-3 w-3 text-yellow-600" />;
      case "avoid":
        return <Sprout className="h-3 w-3 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Prediksi Cuaca</h1>
        <p className="text-muted-foreground">
          Prakiraan cuaca dan saran waktu tanam
        </p>
      </div>

      {/* Location Selector */}
      <div className="mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Pilih Lokasi:</span>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sumbang">Kec. Sumbang</SelectItem>
                  <SelectItem value="kedungbanteng">
                    Kec. Kedungbanteng
                  </SelectItem>
                  <SelectItem value="kembaran">Kec. Kembaran</SelectItem>
                  <SelectItem value="banyumas">Kec. Banyumas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weekly" className="space-y-6">
        <TabsList>
          <TabsTrigger value="weekly">Mingguan</TabsTrigger>
          <TabsTrigger value="monthly">Prediksi Bulanan</TabsTrigger>
          <TabsTrigger value="charts">Grafik Detail</TabsTrigger>
          <TabsTrigger value="history">Riwayat</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          {/* Weekly Calendar View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-6">
            {weeklyWeather.map((day, index) => {
              const Icon = day.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium">{day.day}</h3>
                        <p className="text-xs text-muted-foreground">
                          {day.date}
                        </p>
                      </div>

                      <Icon className="h-8 w-8 mx-auto text-blue-500" />

                      <div>
                        <p className="text-sm font-medium">{day.weather}</p>
                        <p className="text-xs text-muted-foreground">
                          {day.temp}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-1">
                          <Droplets className="h-3 w-3 text-blue-500" />
                          <span className="text-xs">{day.rain}mm</span>
                        </div>

                        <div
                          className={`px-2 py-1 rounded text-xs border flex items-center justify-center space-x-1 ${getPlantAdviceColor(
                            day.plantAdvice
                          )}`}
                        >
                          {getPlantAdviceIcon(day.plantAdvice)}
                          <span>{getPlantAdviceText(day.plantAdvice)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Today's Detail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="h-5 w-5 mr-2" />
                Detail Cuaca Hari Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Thermometer className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm text-muted-foreground">Suhu</p>
                  <p className="font-medium">24-32°C</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                  <p className="text-sm text-muted-foreground">Kelembaban</p>
                  <p className="font-medium">65%</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <CloudRain className="h-6 w-6 mx-auto mb-2 text-indigo-500" />
                  <p className="text-sm text-muted-foreground">Curah Hujan</p>
                  <p className="font-medium">0 mm</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Sprout className="h-6 w-6 mx-auto mb-2 text-green-500" />
                  <p className="text-sm text-muted-foreground">Saran Tanam</p>
                  <Badge className="bg-green-100 text-green-800">Baik</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <div className="space-y-6">
            {/* Header with download button */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Prediksi Tanaman 6 Bulan Ke Depan
                </h2>
                <p className="text-muted-foreground">
                  Rekomendasi tanaman berdasarkan prediksi iklim
                </p>
              </div>
              <Button
                onClick={downloadPlantingGuide}
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Panduan</span>
              </Button>
            </div>

            {/* Monthly predictions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {monthlyPlantingPredictions.map((month, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        {month.month}
                      </div>
                      <Badge variant="outline">{month.season}</Badge>
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Droplets className="h-4 w-4 mr-1" />
                        {month.rainfall}mm
                      </div>
                      <div className="flex items-center">
                        <Thermometer className="h-4 w-4 mr-1" />
                        {month.temp}°C
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {month.recommendations.map((rec, recIndex) => (
                        <div key={recIndex} className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{rec.plant}</h4>
                            <Badge
                              className={getSuitabilityColor(rec.suitability)}
                            >
                              {getSuitabilityText(rec.suitability)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {rec.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="charts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Rainfall Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Curah Hujan Mingguan</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={rainfallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`${value} mm`, "Curah Hujan"]}
                    />
                    <Bar dataKey="rainfall" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Temperature Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Tren Suhu Mingguan</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={rainfallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}°C`, "Suhu"]} />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#f59e0b"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Cuaca 6 Bulan Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar
                    yAxisId="left"
                    dataKey="rainfall"
                    fill="#3b82f6"
                    name="Curah Hujan (mm)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="temp"
                    stroke="#f59e0b"
                    name="Suhu (°C)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
