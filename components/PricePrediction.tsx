import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Calculator,
  DollarSign,
  Calendar,
  Wheat,
  Download,
  FileText,
  Share2,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";

export function PricePrediction() {
  const [selectedCommodity, setSelectedCommodity] = useState("padi");
  const [simulationData, setSimulationData] = useState({
    harvestAmount: "",
    harvestDate: "",
    estimatedPrice: 0,
    totalRevenue: 0,
    bestSellDate: "",
  });

  const commodities = {
    padi: {
      name: "Padi",
      currentPrice: 6200,
      unit: "kg",
      trend: "up",
      change: "+2.5%",
      icon: Wheat,
    },
    cabai: {
      name: "Cabai Merah",
      currentPrice: 35000,
      unit: "kg",
      trend: "down",
      change: "-5.2%",
      icon: TrendingDown,
    },
    bawang: {
      name: "Bawang Merah",
      currentPrice: 28500,
      unit: "kg",
      trend: "up",
      change: "+1.8%",
      icon: TrendingUp,
    },
  };

  const historicalData = {
    padi: [
      { date: "1 Jul", price: 5800, prediction: 5900 },
      { date: "5 Jul", price: 5900, prediction: 6000 },
      { date: "10 Jul", price: 6000, prediction: 6100 },
      { date: "15 Jul", price: 6100, prediction: 6200 },
      { date: "20 Jul", price: 6150, prediction: 6300 },
      { date: "25 Jul", price: 6200, prediction: 6400 },
      { date: "30 Jul", price: null, prediction: 6500 },
      { date: "5 Agu", price: null, prediction: 6600 },
      { date: "10 Agu", price: null, prediction: 6550 },
      { date: "15 Agu", price: null, prediction: 6400 },
    ],
    cabai: [
      { date: "1 Jul", price: 38000, prediction: 37000 },
      { date: "5 Jul", price: 37500, prediction: 36500 },
      { date: "10 Jul", price: 36800, prediction: 36000 },
      { date: "15 Jul", price: 36200, prediction: 35500 },
      { date: "20 Jul", price: 35800, prediction: 35000 },
      { date: "25 Jul", price: 35000, prediction: 34500 },
      { date: "30 Jul", price: null, prediction: 34000 },
      { date: "5 Agu", price: null, prediction: 33500 },
      { date: "10 Agu", price: null, prediction: 34000 },
      { date: "15 Agu", price: null, prediction: 34500 },
    ],
    bawang: [
      { date: "1 Jul", price: 27000, prediction: 27500 },
      { date: "5 Jul", price: 27200, prediction: 27800 },
      { date: "10 Jul", price: 27800, prediction: 28200 },
      { date: "15 Jul", price: 28000, prediction: 28400 },
      { date: "20 Jul", price: 28200, prediction: 28600 },
      { date: "25 Jul", price: 28500, prediction: 28800 },
      { date: "30 Jul", price: null, prediction: 29000 },
      { date: "5 Agu", price: null, prediction: 29200 },
      { date: "10 Agu", price: null, prediction: 29000 },
      { date: "15 Agu", price: null, prediction: 28800 },
    ],
  };

  const marketInfo = [
    {
      market: "Pasar Wage Purwokerto",
      commodity: "Padi",
      price: "Rp 6.200",
      updated: "1 jam lalu",
    },
    {
      market: "Pasar Pon Sokaraja",
      commodity: "Cabai Merah",
      price: "Rp 35.000",
      updated: "2 jam lalu",
    },
    {
      market: "Pasar Kliwon Banyumas",
      commodity: "Bawang Merah",
      price: "Rp 28.500",
      updated: "3 jam lalu",
    },
  ];

  const simulationHistory = [
    {
      date: "20 Jul 2025",
      commodity: "Padi",
      amount: "2000 kg",
      estimatedRevenue: "Rp 12.400.000",
    },
    {
      date: "18 Jul 2025",
      commodity: "Cabai",
      amount: "500 kg",
      estimatedRevenue: "Rp 17.500.000",
    },
    {
      date: "15 Jul 2025",
      commodity: "Bawang",
      amount: "800 kg",
      estimatedRevenue: "Rp 22.800.000",
    },
  ];

  const calculateSimulation = () => {
    if (!simulationData.harvestAmount) return;

    const amount = parseFloat(simulationData.harvestAmount);
    const currentCommodity =
      commodities[selectedCommodity as keyof typeof commodities];
    const estimatedPrice = currentCommodity.currentPrice * 1.05; // Assume 5% price increase
    const totalRevenue = amount * estimatedPrice;

    setSimulationData((prev) => ({
      ...prev,
      estimatedPrice: estimatedPrice,
      totalRevenue: totalRevenue,
      bestSellDate: "5-10 Agustus 2025",
    }));
  };

  const downloadPredictionReport = () => {
    const currentCommodity =
      commodities[selectedCommodity as keyof typeof commodities];
    const currentData =
      historicalData[selectedCommodity as keyof typeof historicalData];

    const reportContent = `LAPORAN PREDIKSI HARGA KOMODITAS - ECOSCOPE BANYUMAS

===================================================
INFORMASI KOMODITAS
===================================================
Komoditas      : ${currentCommodity.name}
Harga Saat Ini : Rp ${currentCommodity.currentPrice.toLocaleString()}
Tren           : ${currentCommodity.trend === "up" ? "Naik" : "Turun"} ${
      currentCommodity.change
    }
Waktu Analisis : ${new Date().toLocaleString("id-ID")}

===================================================
PREDIKSI HARGA (2 MINGGU KE DEPAN)
===================================================
${currentData
  .filter((d) => d.prediction && !d.price)
  .map((d) => `${d.date} : Rp ${d.prediction?.toLocaleString()}`)
  .join("\n")}

===================================================
SIMULASI PENDAPATAN
===================================================
${
  simulationData.totalRevenue > 0
    ? `
Jumlah Panen   : ${simulationData.harvestAmount} kg
Estimasi Harga : Rp ${simulationData.estimatedPrice.toLocaleString()}
Total Pendapatan: Rp ${simulationData.totalRevenue.toLocaleString()}
Waktu Jual Terbaik: ${simulationData.bestSellDate}
`
    : "Belum ada simulasi yang dihitung"
}

===================================================
REKOMENDASI
===================================================
• Waktu Jual Terbaik: 5-10 Agustus 2025
• Prediksi Tren: Harga ${
      currentCommodity.trend === "up" ? "naik" : "turun"
    } 3-5% dalam 2 minggu
• Sumber Referensi: Badan Pangan Nasional (Bapanas)

===================================================
CATATAN
===================================================
- Prediksi berdasarkan analisis AI dan data historis
- Harga dapat berubah sesuai kondisi pasar
- Gunakan sebagai panduan, bukan jaminan harga

Generated by EcoScope Banyumas
${new Date().toLocaleString("id-ID")}`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prediksi-harga-${selectedCommodity}-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Laporan prediksi berhasil didownload");
  };

  const downloadSimulationReport = () => {
    if (simulationData.totalRevenue === 0) {
      toast.error("Tidak ada simulasi untuk didownload");
      return;
    }

    const currentCommodity =
      commodities[selectedCommodity as keyof typeof commodities];

    const simulationReport = `LAPORAN SIMULASI PENDAPATAN - ECOSCOPE BANYUMAS

===================================================
DETAIL SIMULASI
===================================================
Komoditas       : ${currentCommodity.name}
Jumlah Panen    : ${simulationData.harvestAmount} kg
Tanggal Panen   : ${simulationData.harvestDate || "Tidak ditentukan"}
Harga Saat Ini  : Rp ${currentCommodity.currentPrice.toLocaleString()}
Estimasi Harga  : Rp ${simulationData.estimatedPrice.toLocaleString()}

===================================================
PROYEKSI PENDAPATAN
===================================================
Total Pendapatan Estimasi: Rp ${simulationData.totalRevenue.toLocaleString()}
Waktu Jual Terbaik      : ${simulationData.bestSellDate}
Margin Keuntungan       : ${(
      ((simulationData.estimatedPrice - currentCommodity.currentPrice) /
        currentCommodity.currentPrice) *
      100
    ).toFixed(1)}%

===================================================
ANALISIS
===================================================
• Berdasarkan tren pasar saat ini: ${
      currentCommodity.trend === "up" ? "Positif" : "Negatif"
    }
• Perubahan harga: ${currentCommodity.change}
• Rekomendasi: ${
      simulationData.estimatedPrice > currentCommodity.currentPrice
        ? "Tunda penjualan untuk mendapat harga lebih baik"
        : "Pertimbangkan untuk menjual sekarang"
    }

===================================================
DISCLAIMER
===================================================
* Estimasi berdasarkan analisis AI dan data historis
* Hasil aktual dapat berbeda dari prediksi
* Belum termasuk biaya operasional dan transport

Generated by EcoScope Banyumas
${new Date().toLocaleString("id-ID")}`;

    const blob = new Blob([simulationReport], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `simulasi-pendapatan-${selectedCommodity}-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Laporan simulasi berhasil didownload");
  };

  const shareSimulation = () => {
    if (simulationData.totalRevenue === 0) {
      toast.error("Tidak ada simulasi untuk dibagikan");
      return;
    }

    const currentCommodity =
      commodities[selectedCommodity as keyof typeof commodities];
    const shareText = `📊 Simulasi Pendapatan ${currentCommodity.name}

🌾 Jumlah: ${simulationData.harvestAmount} kg
💰 Estimasi: Rp ${simulationData.totalRevenue.toLocaleString()}
📅 Jual Terbaik: ${simulationData.bestSellDate}

Via EcoScope Banyumas 🌱`;

    navigator.clipboard.writeText(shareText).then(() => {
      toast.success("Hasil simulasi disalin ke clipboard");
    });
  };

  const currentCommodity =
    commodities[selectedCommodity as keyof typeof commodities];
  const currentData =
    historicalData[selectedCommodity as keyof typeof historicalData];

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Prediksi Harga Komoditas</h1>
        <p className="text-muted-foreground">
          Analisis pasar dan simulasi pendapatan untuk petani
        </p>
      </div>

      {/* Commodity Selector */}
      <div className="mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Pilih Komoditas:</span>
                <Select
                  value={selectedCommodity}
                  onValueChange={setSelectedCommodity}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="padi">Padi</SelectItem>
                    <SelectItem value="cabai">Cabai Merah</SelectItem>
                    <SelectItem value="bawang">Bawang Merah</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">
                    Rp {currentCommodity.currentPrice.toLocaleString()}
                  </span>
                  <Badge
                    variant={
                      currentCommodity.trend === "up"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {currentCommodity.change}
                  </Badge>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={downloadPredictionReport}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Laporan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="charts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="charts">Grafik Harga</TabsTrigger>
          <TabsTrigger value="simulation">Simulasi</TabsTrigger>
          <TabsTrigger value="markets">Info Pasar</TabsTrigger>
        </TabsList>

        <TabsContent value="charts">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Price Chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Tren Harga {currentCommodity.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={currentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name) => [
                          `Rp ${value?.toLocaleString()}`,
                          name === "price" ? "Harga Aktual" : "Prediksi",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.3}
                        name="price"
                      />
                      <Line
                        type="monotone"
                        dataKey="prediction"
                        stroke="#f59e0b"
                        strokeDasharray="5 5"
                        name="prediction"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                      <span>Harga Aktual</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 border-2 border-orange-500 border-dashed rounded mr-2"></div>
                      <span>Prediksi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ringkasan Harga</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Harga Saat Ini
                    </p>
                    <p className="text-2xl font-bold">
                      Rp {currentCommodity.currentPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Prediksi 2 Minggu
                    </p>
                    <p className="text-lg font-medium">
                      Rp{" "}
                      {(currentCommodity.currentPrice * 1.05).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Prediksi 1 Bulan
                    </p>
                    <p className="text-lg font-medium">
                      Rp{" "}
                      {(currentCommodity.currentPrice * 1.03).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rekomendasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium text-green-600">
                      💡 Waktu Jual Terbaik:
                    </p>
                    <p>5-10 Agustus 2025</p>
                    <p className="font-medium text-blue-600 mt-3">
                      📈 Analisis:
                    </p>
                    <p>
                      Harga diprediksi naik 3-5% dalam 2 minggu ke depan karena
                      musim kemarau.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="simulation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Simulation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Simulasi Pendapatan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="harvestAmount">
                    Estimasi Hasil Panen (kg)
                  </Label>
                  <Input
                    id="harvestAmount"
                    type="number"
                    value={simulationData.harvestAmount}
                    onChange={(e) =>
                      setSimulationData((prev) => ({
                        ...prev,
                        harvestAmount: e.target.value,
                      }))
                    }
                    placeholder="Contoh: 1000"
                  />
                </div>
                <div>
                  <Label htmlFor="harvestDate">Tanggal Panen</Label>
                  <Input
                    id="harvestDate"
                    type="date"
                    value={simulationData.harvestDate}
                    onChange={(e) =>
                      setSimulationData((prev) => ({
                        ...prev,
                        harvestDate: e.target.value,
                      }))
                    }
                  />
                </div>
                <Button onClick={calculateSimulation} className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Hitung Simulasi
                </Button>
              </CardContent>
            </Card>

            {/* Simulation Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Hasil Simulasi
                  </div>
                  {simulationData.totalRevenue > 0 && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={shareSimulation}
                      >
                        <Share2 className="h-3 w-3 mr-1" />
                        Share
                      </Button>
                      <Button size="sm" onClick={downloadSimulationReport}>
                        <FileText className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {simulationData.totalRevenue > 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Estimasi Harga
                        </p>
                        <p className="font-medium">
                          Rp {simulationData.estimatedPrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Total Pendapatan
                        </p>
                        <p className="font-bold text-green-600">
                          Rp {simulationData.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Waktu Jual Terbaik
                      </p>
                      <p className="font-medium">
                        {simulationData.bestSellDate}
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Proyeksi Keuntungan
                      </p>
                      <p className="font-medium text-purple-700">
                        +
                        {(
                          ((simulationData.estimatedPrice -
                            currentCommodity.currentPrice) /
                            currentCommodity.currentPrice) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>* Perhitungan berdasarkan prediksi harga pasar</p>
                      <p>* Belum termasuk biaya operasional</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Masukkan data untuk melihat simulasi</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Simulation History */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Riwayat Simulasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {simulationHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">
                        {item.commodity} - {item.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">
                        {item.estimatedRevenue}
                      </p>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="markets">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Market Prices */}
            <Card>
              <CardHeader>
                <CardTitle>Harga Pasar Real-time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketInfo.map((market, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{market.market}</p>
                        <p className="text-sm text-muted-foreground">
                          {market.commodity}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {market.updated}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{market.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Reference */}
            <Card>
              <CardHeader>
                <CardTitle>Referensi Harga Resmi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Sumber: Badan Pangan Nasional (Bapanas)
                    </p>
                    <p className="font-medium">Harga Eceran Tertinggi (HET)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Beras Premium</span>
                      <span className="font-medium">Rp 15.800/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cabai Merah Keriting</span>
                      <span className="font-medium">Rp 50.000/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bawang Merah</span>
                      <span className="font-medium">Rp 36.000/kg</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Data diperbarui setiap hari oleh Bapanas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
