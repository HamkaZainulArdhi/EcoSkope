import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  MapPin,
  Users,
  TrendingUp,
  CloudRain,
  AlertTriangle,
  ThermometerSun,
  DollarSign,
} from "lucide-react";

// Data lokasi real Kabupaten Banyumas dengan koordinat yang lebih akurat
const banyumasLocations = [
  {
    name: "Purwokerto Selatan",
    coordinates: [-7.4244, 109.2374] as [number, number],
    data: {
      slopeRisk: "Rendah",
      weather: "Cerah, 28°C",
      commodity: "Padi: Rp 7.200/kg",
      recommendation: "Cocok untuk penanaman jagung",
    },
  },
  {
    name: "Purwokerto Utara",
    coordinates: [-7.4049, 109.2344] as [number, number],
    data: {
      slopeRisk: "Rendah",
      weather: "Berawan, 27°C",
      commodity: "Jagung: Rp 4.800/kg",
      recommendation: "Area urban, cocok untuk hidroponik",
    },
  },
  {
    name: "Sokaraja",
    coordinates: [-7.4583, 109.2914] as [number, number],
    data: {
      slopeRisk: "Sedang",
      weather: "Berawan, 26°C",
      commodity: "Jagung: Rp 4.800/kg",
      recommendation: "Monitoring curah hujan diperlukan",
    },
  },
  {
    name: "Baturaden",
    coordinates: [-7.3167, 109.2167] as [number, number],
    data: {
      slopeRisk: "Tinggi",
      weather: "Sejuk, 22°C",
      commodity: "Wortel: Rp 8.000/kg",
      recommendation: "Cocok untuk tanaman dataran tinggi",
    },
  },
  {
    name: "Kalibagor",
    coordinates: [-7.4167, 109.1167] as [number, number],
    data: {
      slopeRisk: "Sedang",
      weather: "Berawan, 27°C",
      commodity: "Tomat: Rp 12.000/kg",
      recommendation: "Monitor stabilitas lereng",
    },
  },
  {
    name: "Kemranjen",
    coordinates: [-7.4167, 109.3333] as [number, number],
    data: {
      slopeRisk: "Rendah",
      weather: "Cerah, 29°C",
      commodity: "Cabai: Rp 25.000/kg",
      recommendation: "Optimal untuk budidaya sayuran",
    },
  },
  {
    name: "Cilongok",
    coordinates: [-7.4333, 109.0667] as [number, number],
    data: {
      slopeRisk: "Sedang",
      weather: "Cerah, 28°C",
      commodity: "Bawang: Rp 15.000/kg",
      recommendation: "Area potensial pengembangan",
    },
  },
  {
    name: "Ajibarang",
    coordinates: [-7.3833, 109.1167] as [number, number],
    data: {
      slopeRisk: "Sedang",
      weather: "Berawan, 26°C",
      commodity: "Singkong: Rp 3.500/kg",
      recommendation: "Perhatikan kondisi tanah",
    },
  },
  {
    name: "Wangon",
    coordinates: [-7.5167, 109.0833] as [number, number],
    data: {
      slopeRisk: "Rendah",
      weather: "Cerah, 29°C",
      commodity: "Kelapa: Rp 3.500/butir",
      recommendation: "Stabil untuk pertanian",
    },
  },
  {
    name: "Jatilawang",
    coordinates: [-7.35, 109.05] as [number, number],
    data: {
      slopeRisk: "Tinggi",
      weather: "Hujan ringan, 24°C",
      commodity: "Kopi: Rp 25.000/kg",
      recommendation: "Cocok untuk tanaman perkebunan",
    },
  },
  {
    name: "Rawalo",
    coordinates: [-7.5333, 109.1333] as [number, number],
    data: {
      slopeRisk: "Rendah",
      weather: "Cerah, 30°C",
      commodity: "Padi: Rp 7.200/kg",
      recommendation: "Area pertanian utama",
    },
  },
  {
    name: "Gumelar",
    coordinates: [-7.5667, 108.9333] as [number, number],
    data: {
      slopeRisk: "Tinggi",
      weather: "Hujan ringan, 24°C",
      commodity: "Kedelai: Rp 9.500/kg",
      recommendation: "Perhatikan drainase area",
    },
  },
];

interface LandingPageProps {
  onLoginClick: () => void;
}

export function LandingPage({ onLoginClick }: LandingPageProps) {
  const [selectedLocation, setSelectedLocation] = React.useState<
    (typeof banyumasLocations)[0] | null
  >(null);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Tinggi":
        return "bg-red-500";
      case "Sedang":
        return "bg-yellow-500";
      default:
        return "bg-green-500";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Tinggi":
        return <AlertTriangle className="w-4 h-4" />;
      case "Sedang":
        return <ThermometerSun className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                EcoScope Banyumas
              </h1>
              <p className="text-sm text-gray-600">
                Sistem Monitoring Pertanian Terpadu
              </p>
            </div>
          </div>
          <Button
            onClick={onLoginClick}
            className="bg-green-600 hover:bg-green-700"
          >
            Masuk / Daftar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Monitoring Pertanian Real-Time Kabupaten Banyumas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pantau risiko lereng, prediksi cuaca, dan harga komoditas pertanian
            secara interaktif. Klik pada titik lokasi di peta untuk melihat data
            terkini dari setiap kecamatan.
          </p>
        </div>

        {/* Statistik Ringkas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900">1,247 Petani</h3>
              <p className="text-sm text-gray-600">Terdaftar aktif</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold text-gray-900">15 Komoditas</h3>
              <p className="text-sm text-gray-600">Dipantau harganya</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CloudRain className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold text-gray-900">12 Kecamatan</h3>
              <p className="text-sm text-gray-600">Monitoring cuaca</p>
            </CardContent>
          </Card>
        </div>

        {/* Layout Bersampingan: Peta dan Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Peta Visual Interaktif - Kiri */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">
              Peta Interaktif Kabupaten Banyumas
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6 min-h-[600px]">
                  {/* Background peta */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253190.14433731398!2d109.00376069163019!3d-7.454630597985841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656746bfbcb0fd%3A0x3027a76e352ba60!2sBanyumas%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1754582380711!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }} // Non-interaktif!
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Plotkan lokasi dengan posisi relatif berdasarkan koordinat real */}
                  {banyumasLocations.map((location, index) => {
                    // Normalisasi koordinat berdasarkan boundary Kabupaten Banyumas
                    // Lat: -7.85 to -7.30, Lng: 108.9 to 109.4
                    const latRange = [-7.85, -7.3];
                    const lngRange = [108.9, 109.4];

                    const normalizedLat =
                      ((location.coordinates[0] - latRange[1]) /
                        (latRange[0] - latRange[1])) *
                      100;
                    const normalizedLng =
                      ((location.coordinates[1] - lngRange[0]) /
                        (lngRange[1] - lngRange[0])) *
                      100;

                    return (
                      <div
                        key={index}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 ${
                          selectedLocation?.name === location.name
                            ? "scale-150 z-20"
                            : "hover:z-10"
                        }`}
                        style={{
                          left: `${Math.max(8, Math.min(92, normalizedLng))}%`,
                          top: `${Math.max(8, Math.min(92, normalizedLat))}%`,
                        }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div
                          className={`w-6 h-6 rounded-full ${getRiskColor(
                            location.data.slopeRisk
                          )} border-2 border-white shadow-lg flex items-center justify-center pulse-animation`}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {/* Label nama kecamatan */}
                        <div
                          className={`absolute top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap bg-white px-2 py-1 rounded-full shadow-md border transition-all duration-200 ${
                            selectedLocation?.name === location.name
                              ? "visible opacity-100"
                              : "invisible opacity-0"
                          }`}
                        >
                          {location.name}
                        </div>
                      </div>
                    );
                  })}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
                    <h5 className="text-sm font-medium text-gray-900 mb-3">
                      Tingkat Risiko Lereng
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 border border-white"></div>
                        <span className="text-sm text-gray-600">Rendah</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-500 border border-white"></div>
                        <span className="text-sm text-gray-600">Sedang</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-red-500 border border-white"></div>
                        <span className="text-sm text-gray-600">Tinggi</span>
                      </div>
                    </div>
                  </div>

                  {/* Instruksi */}
                  <div className="absolute top-4 right-4 bg-blue-50 p-3 rounded-lg shadow-md max-w-xs">
                    <p className="text-sm text-blue-800">
                      💡 Klik titik untuk data detail
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Area Detail Data - Kanan */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">
              Data Monitoring Terkini
            </h3>
            {selectedLocation ? (
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedLocation.name}
                    </h4>
                    <p className="text-gray-600">
                      Koordinat: {selectedLocation.coordinates[0].toFixed(4)},{" "}
                      {selectedLocation.coordinates[1].toFixed(4)}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Risiko Lereng */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-full ${getRiskColor(
                            selectedLocation.data.slopeRisk
                          )} flex items-center justify-center text-white`}
                        >
                          {getRiskIcon(selectedLocation.data.slopeRisk)}
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Risiko Lereng
                          </h5>
                          <p
                            className={`font-semibold ${
                              selectedLocation.data.slopeRisk === "Tinggi"
                                ? "text-red-600"
                                : selectedLocation.data.slopeRisk === "Sedang"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {selectedLocation.data.slopeRisk}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cuaca */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <CloudRain className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Cuaca Terkini
                          </h5>
                          <p className="text-gray-900 font-medium">
                            {selectedLocation.data.weather}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Harga Komoditas */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Harga Komoditas
                          </h5>
                          <p className="text-gray-900 font-medium">
                            {selectedLocation.data.commodity}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rekomendasi */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Rekomendasi
                          </h5>
                          <p className="text-blue-800">
                            {selectedLocation.data.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Reset */}
                  <div className="text-center mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedLocation(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Tutup Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-dashed border-gray-300 h-[600px] flex items-center justify-center">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Pilih Lokasi pada Peta
                  </h4>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Klik pada salah satu titik lokasi di peta sebelah kiri untuk
                    melihat data monitoring lengkap dari kecamatan tersebut
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Siap untuk Memulai Monitoring?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan platform EcoScope Banyumas untuk mendapatkan
            akses lengkap ke sistem monitoring pertanian yang canggih dan
            akurat.
          </p>
          <Button
            onClick={onLoginClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 px-8 py-3"
          >
            Mulai Sekarang
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">EcoScope Banyumas</span>
          </div>
          <p className="text-gray-400">
            Platform monitoring pertanian terpadu untuk Kabupaten Banyumas, Jawa
            Tengah
          </p>
        </div>
      </footer>

      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </div>
  );
}
