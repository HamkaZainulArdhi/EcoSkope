import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

interface EditProfileProps {
  onBack: () => void;
}

export function EditProfile({ onBack }: EditProfileProps) {
  const [profileData, setProfileData] = useState({
    name: "Hamka",
    email: "hamka@gmail.com",
    phone: "081234567890",
    address: "Jl. Raya Sumbang No. 123",
    village: "Sumbang",
    district: "Sumbang",
    farmSize: "2.5",
    farmType: "padi",
    experience: "15",
    bio: "Petani padi dengan pengalaman 15 tahun di Desa Sumbang. Aktif dalam kelompok tani dan menggunakan teknologi modern untuk meningkatkan hasil panen.",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Profil berhasil diperbarui");
    }, 1500);
  };

  const handleUploadPhoto = () => {
    // Simulate photo upload
    toast.info("Fitur upload foto akan segera tersedia");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>
        <h1 className="text-3xl font-bold mb-2">Edit Profil</h1>
        <p className="text-muted-foreground">
          Perbarui informasi profil dan data pertanian Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Photo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Foto Profil</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-4xl">👨‍🌾</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              onClick={handleUploadPhoto}
              className="w-full"
            >
              <Camera className="h-4 w-4 mr-2" />
              Upload Foto
            </Button>
            <p className="text-xs text-muted-foreground">
              Maksimal 5MB. Format: JPG, PNG
            </p>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Informasi Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Masukkan email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Nomor HP</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Masukkan nomor HP"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Pengalaman Bertani (tahun)</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={profileData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    placeholder="Contoh: 10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio/Deskripsi</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Ceritakan sedikit tentang diri Anda dan pengalaman bertani"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Informasi Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Input
                  id="address"
                  value={profileData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Masukkan alamat lengkap"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="village">Desa</Label>
                  <Select
                    value={profileData.village}
                    onValueChange={(value) =>
                      handleInputChange("village", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Desa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sumbang">Sumbang</SelectItem>
                      <SelectItem value="kedungbanteng">
                        Kedungbanteng
                      </SelectItem>
                      <SelectItem value="kembaran">Kembaran</SelectItem>
                      <SelectItem value="banyumas">Banyumas</SelectItem>
                      <SelectItem value="cilongok">Cilongok</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="district">Kecamatan</Label>
                  <Select
                    value={profileData.district}
                    onValueChange={(value) =>
                      handleInputChange("district", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kecamatan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sumbang">Sumbang</SelectItem>
                      <SelectItem value="kedungbanteng">
                        Kedungbanteng
                      </SelectItem>
                      <SelectItem value="kembaran">Kembaran</SelectItem>
                      <SelectItem value="banyumas">Banyumas</SelectItem>
                      <SelectItem value="cilongok">Cilongok</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farm Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🌾 Informasi Pertanian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="farmSize">Luas Lahan (hektar)</Label>
                  <Input
                    id="farmSize"
                    type="number"
                    step="0.1"
                    value={profileData.farmSize}
                    onChange={(e) =>
                      handleInputChange("farmSize", e.target.value)
                    }
                    placeholder="Contoh: 2.5"
                  />
                </div>
                <div>
                  <Label htmlFor="farmType">Jenis Komoditas Utama</Label>
                  <Select
                    value={profileData.farmType}
                    onValueChange={(value) =>
                      handleInputChange("farmType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Komoditas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="padi">Padi</SelectItem>
                      <SelectItem value="jagung">Jagung</SelectItem>
                      <SelectItem value="cabai">Cabai</SelectItem>
                      <SelectItem value="bawang">Bawang Merah</SelectItem>
                      <SelectItem value="kacang">Kacang Tanah</SelectItem>
                      <SelectItem value="sayuran">Sayuran</SelectItem>
                      <SelectItem value="buah">Buah-buahan</SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Farm Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Status
                  </Badge>
                  <p className="text-sm font-medium text-green-600">
                    Aktif Bertani
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Kelompok Tani
                  </Badge>
                  <p className="text-sm font-medium">Tani Makmur</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Sertifikasi
                  </Badge>
                  <p className="text-sm font-medium">Organik</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onBack}>
              Batal
            </Button>
            <Button onClick={handleSaveProfile} disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Simpan Perubahan
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
