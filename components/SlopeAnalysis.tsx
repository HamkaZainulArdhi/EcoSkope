import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Textarea } from "./ui/textarea";
import {
  MapPin,
  Upload,
  Camera,
  AlertTriangle,
  CheckCircle,
  XCircle,
  History,
  Shield,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

export function SlopeAnalysis() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [formData, setFormData] = useState({
    locationName: "",
    village: "",
    district: "",
  });
  const [alertData, setAlertData] = useState({
    message: "",
    severity: "medium",
    contactInfo: "",
  });
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const mapData = [
    {
      id: 1,
      name: "Desa Sumbang",
      coordinates: "-7.3297, 109.2478",
      slope: 25,
      risk: "medium",
      color: "bg-yellow-500",
      suggestions: ["Tanam tanaman penutup tanah", "Buat saluran drainase"],
      lastUpdate: "2 jam lalu",
    },
    {
      id: 2,
      name: "Desa Kedungbanteng",
      coordinates: "-7.3856, 109.3411",
      slope: 35,
      risk: "high",
      color: "bg-red-500",
      suggestions: [
        "Hindari aktivitas berat",
        "Pasang jaring pengaman",
        "Monitoring ketat",
      ],
      lastUpdate: "1 jam lalu",
    },
    {
      id: 3,
      name: "Desa Kembaran",
      coordinates: "-7.3569, 109.3275",
      slope: 15,
      risk: "low",
      color: "bg-green-500",
      suggestions: ["Kondisi aman untuk pertanian", "Tetap jaga drainase"],
      lastUpdate: "30 menit lalu",
    },
  ];

  const riskHistory = [
    {
      date: "25 Jul 2025",
      location: "Desa Sumbang",
      risk: "medium",
      slope: "25%",
      action: "Monitoring",
    },
    {
      date: "24 Jul 2025",
      location: "Desa Kedungbanteng",
      risk: "high",
      slope: "35%",
      action: "Alert Sent",
    },
    {
      date: "23 Jul 2025",
      location: "Desa Kembaran",
      risk: "low",
      slope: "15%",
      action: "Normal",
    },
  ];

  const emergencyContacts = [
    { name: "BASARNAS Purwokerto", phone: "0281-123456", type: "emergency" },
    { name: "BPBD Banyumas", phone: "0281-789012", type: "disaster" },
    {
      name: "Komunitas Siaga Bencana",
      whatsapp: "08123456789",
      type: "community",
    },
    {
      name: "Grup Instagram @BanyumasAlert",
      instagram: "@banyumasAlert",
      type: "social",
    },
  ];

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "high":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case "high":
        return "Tinggi";
      case "medium":
        return "Sedang";
      case "low":
        return "Rendah";
      default:
        return "";
    }
  };

  const handleSendToBasarnas = async () => {
    if (!selectedLocation || selectedLocation.risk !== "high") {
      toast.error(
        "Hanya lokasi dengan risiko tinggi yang dapat dikirim ke BASARNAS"
      );
      return;
    }

    const alertMessage = `ALERT POTENSI LONGSOR
Lokasi: ${selectedLocation.name}
Koordinat: ${selectedLocation.coordinates}
Tingkat Kemiringan: ${selectedLocation.slope}%
Status Risiko: TINGGI
Waktu Deteksi: ${new Date().toLocaleString("id-ID")}
Tindakan: ${selectedLocation.suggestions.join(", ")}

Dikirim melalui EcoScope Banyumas`;

    // Simulate sending to BASARNAS
    setTimeout(() => {
      toast.success("Alert berhasil dikirim ke BASARNAS Purwokerto");
      // Log the alert
      const logEntry = {
        timestamp: new Date().toLocaleString("id-ID"),
        location: selectedLocation.name,
        action: "BASARNAS Alert Sent",
        severity: "high",
      };
      console.log("BASARNAS Alert:", logEntry);
    }, 1000);
  };

  const handleSendToCommunity = async (type: "whatsapp" | "instagram") => {
    if (!selectedLocation) {
      toast.error("Pilih lokasi terlebih dahulu");
      return;
    }

    const alertMessage = `🚨 PERINGATAN POTENSI LONGSOR 🚨

📍 Lokasi: ${selectedLocation.name}
📊 Tingkat Kemiringan: ${selectedLocation.slope}%
⚠️ Status Risiko: ${getRiskLabel(selectedLocation.risk).toUpperCase()}
🕐 Waktu: ${new Date().toLocaleString("id-ID")}

${
  selectedLocation.risk === "high"
    ? "⛔ SEGERA HINDARI AREA INI!"
    : "⚠️ TETAP WASPADA!"
}

📋 Saran:
${selectedLocation.suggestions.map((s: string) => `• ${s}`).join("\n")}

#BanyumasAlert #SiagaBencana
Via EcoScope Banyumas`;

    if (type === "whatsapp") {
      const waUrl = `https://wa.me/628123456789?text=${encodeURIComponent(
        alertMessage
      )}`;
      window.open(waUrl, "_blank");
      toast.success("Membuka WhatsApp komunitas...");
    } else if (type === "instagram") {
      // For Instagram, we'll copy to clipboard since direct posting isn't available
      navigator.clipboard.writeText(alertMessage).then(() => {
        toast.success(
          "Pesan disalin ke clipboard. Buka Instagram untuk memposting."
        );
        window.open("https://instagram.com", "_blank");
      });
    }
  };

  const generateReport = () => {
    if (!selectedLocation) {
      toast.error("Pilih lokasi terlebih dahulu");
      return;
    }

    const reportContent = `LAPORAN ANALISIS LERENG - ECOSCOPE BANYUMAS

===================================================
INFORMASI LOKASI
===================================================
Nama Lokasi    : ${selectedLocation.name}
Koordinat      : ${selectedLocation.coordinates}
Kemiringan     : ${selectedLocation.slope}%
Status Risiko  : ${getRiskLabel(selectedLocation.risk)}
Waktu Analisis : ${new Date().toLocaleString("id-ID")}

===================================================
ASSESSMENT RISIKO
===================================================
${
  selectedLocation.risk === "high"
    ? "RISIKO TINGGI - Memerlukan perhatian segera"
    : selectedLocation.risk === "medium"
    ? "RISIKO SEDANG - Monitoring diperlukan"
    : "RISIKO RENDAH - Kondisi relatif aman"
}

===================================================
REKOMENDASI TINDAKAN
===================================================
${selectedLocation.suggestions
  .map((s: string, i: number) => `${i + 1}. ${s}`)
  .join("\n")}

===================================================
CATATAN
===================================================
- Data berdasarkan analisis drone dan citra satelit
- Monitoring berkelanjutan diperlukan
- Segera hubungi otoritas jika kondisi memburuk

Generated by EcoScope Banyumas
${new Date().toLocaleString("id-ID")}`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `laporan-lereng-${selectedLocation.name
      .toLowerCase()
      .replace(/ /g, "-")}-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Laporan berhasil didownload");
  };

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Analisis Lereng</h1>
        <p className="text-muted-foreground">
          Monitoring risiko longsor berbasis kemiringan tanah
        </p>
      </div>

      {/* Emergency Alert */}
      {selectedLocation?.risk === "high" && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>PERINGATAN TINGGI!</strong> Lokasi {selectedLocation.name}{" "}
            memiliki risiko longsor tinggi. Segera lakukan tindakan mitigasi dan
            pertimbangkan untuk mengirim alert ke BASARNAS.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Peta Interaktif Banyumas
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Simulated Map Interface */}
              <div className="bg-slate-100 h-96 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-00 to-blue-200">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469456.45906832715!2d108.83890425263063!3d-7.454879534767612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656746bfbcb0fd%3A0x3027a76e352ba60!2sKabupaten%20Banyumas%2C%20Jawa%20Tengah!5e1!3m2!1sid!2sid!4v1753551941904!5m2!1sid!2sid"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Peta Banyumas"
                    />
                  </div>
                  {/* Legend */}
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                    <h4 className="font-medium mb-2 text-sm">Tingkat Risiko</h4>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs">
                        <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                        <span>Rendah (0-20%)</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
                        <span>Sedang (21-30%)</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                        <span>Tinggi (&gt;30%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Points */}
                  {mapData.map((point) => (
                    <div
                      key={point.id}
                      className={`absolute w-4 h-4 ${point.color} rounded-full cursor-pointer shadow-lg transform hover:scale-110 transition-transform`}
                      style={{
                        left: `${20 + point.id * 25}%`,
                        top: `${30 + point.id * 15}%`,
                      }}
                      onClick={() => setSelectedLocation(point)}
                    />
                  ))}
                </div>
              </div>

              {/* Selected Location Info */}
              {selectedLocation && (
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium">{selectedLocation.name}</h4>
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={generateReport}>
                        Download Laporan
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-muted-foreground">Koordinat:</span>
                      <p>{selectedLocation.coordinates}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Kemiringan:</span>
                      <p>{selectedLocation.slope}%</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-muted-foreground text-sm">
                      Risiko:
                    </span>
                    <Badge
                      variant={
                        selectedLocation.risk === "high"
                          ? "destructive"
                          : selectedLocation.risk === "medium"
                          ? "secondary"
                          : "default"
                      }
                      className="ml-2"
                    >
                      {getRiskLabel(selectedLocation.risk)}
                    </Badge>
                    <span className="text-xs text-muted-foreground ml-2">
                      Update: {selectedLocation.lastUpdate}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-muted-foreground text-sm">
                      Saran Tindakan:
                    </span>
                    <ul className="list-disc list-inside mt-1 text-sm">
                      {selectedLocation.suggestions.map(
                        (suggestion: string, index: number) => (
                          <li key={index}>{suggestion}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Emergency Actions */}
                  <div className="border-t pt-3">
                    <h5 className="text-sm font-medium mb-2">
                      Tindakan Darurat:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <Button
                        variant={
                          selectedLocation.risk === "high"
                            ? "destructive"
                            : "outline"
                        }
                        size="sm"
                        onClick={handleSendToBasarnas}
                        disabled={selectedLocation.risk !== "high"}
                        className="flex items-center"
                      >
                        <Shield className="h-3 w-3 mr-1" />
                        Kirim ke BASARNAS
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendToCommunity("whatsapp")}
                        className="flex items-center"
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        WhatsApp Komunitas
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendToCommunity("instagram")}
                        className="flex items-center"
                      >
                        <Send className="h-3 w-3 mr-1" />
                        Post Instagram
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Controls Panel */}
        <div className="space-y-6">
          {/* Location Update Form */}
          <Card>
            <CardHeader>
              <CardTitle>Update Lokasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="locationName">Nama Lokasi</Label>
                <Input
                  id="locationName"
                  value={formData.locationName}
                  onChange={(e) =>
                    setFormData({ ...formData, locationName: e.target.value })
                  }
                  placeholder="Contoh: Bukit Sari"
                />
              </div>
              <div>
                <Label htmlFor="village">Desa</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) =>
                    setFormData({ ...formData, village: e.target.value })
                  }
                  placeholder="Contoh: Sumbang"
                />
              </div>
              <div>
                <Label htmlFor="district">Kecamatan</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  placeholder="Contoh: Sumbang"
                />
              </div>
              <Button className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Tambah Titik Monitoring
              </Button>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Kontak Darurat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-2 bg-slate-50 rounded text-sm">
                    <p className="font-medium">{contact.name}</p>
                    {contact.phone && (
                      <p className="text-muted-foreground">{contact.phone}</p>
                    )}
                    {contact.whatsapp && (
                      <p className="text-muted-foreground">
                        WA: {contact.whatsapp}
                      </p>
                    )}
                    {contact.instagram && (
                      <p className="text-muted-foreground">
                        IG: {contact.instagram}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                <Camera className="h-4 w-4 mr-2" />
                Upload Video Drone
              </Button>
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Citra Satelit
              </Button>
              <Button className="w-full">Ambil Data Baru</Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <History className="h-4 w-4 mr-2" />
                Riwayat Scan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {riskHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-slate-50 rounded"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.location}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                      <p className="text-xs text-blue-600">{item.action}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getRiskIcon(item.risk)}
                      <span className="text-sm">{item.slope}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
