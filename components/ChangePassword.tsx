import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import {
  Lock,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

interface ChangePasswordProps {
  onBack: () => void;
}

export function ChangePassword({ onBack }: ChangePasswordProps) {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setPasswordData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "newPassword") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      numbers: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    strength = Object.values(checks).filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    if (passwordStrength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Lemah";
    if (passwordStrength <= 3) return "Sedang";
    if (passwordStrength <= 4) return "Kuat";
    return "Sangat Kuat";
  };

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (!currentPassword) {
      toast.error("Password saat ini harus diisi");
      return false;
    }

    if (!newPassword) {
      toast.error("Password baru harus diisi");
      return false;
    }

    if (newPassword.length < 8) {
      toast.error("Password baru minimal 8 karakter");
      return false;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Konfirmasi password tidak cocok");
      return false;
    }

    if (currentPassword === newPassword) {
      toast.error("Password baru harus berbeda dari password saat ini");
      return false;
    }

    return true;
  };

  const handleChangePassword = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password berhasil diubah");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }, 2000);
  };

  const passwordRequirements = [
    { text: "Minimal 8 karakter", met: passwordData.newPassword.length >= 8 },
    {
      text: "Mengandung huruf besar",
      met: /[A-Z]/.test(passwordData.newPassword),
    },
    {
      text: "Mengandung huruf kecil",
      met: /[a-z]/.test(passwordData.newPassword),
    },
    { text: "Mengandung angka", met: /\d/.test(passwordData.newPassword) },
    {
      text: "Mengandung simbol (!@#$%^&*)",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(passwordData.newPassword),
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>
        <h1 className="text-3xl font-bold mb-2">Ubah Password</h1>
        <p className="text-muted-foreground">
          Pastikan password baru Anda aman dan mudah diingat
        </p>
      </div>

      <div className="space-y-6">
        {/* Security Notice */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Untuk keamanan akun Anda, gunakan password yang kuat dengan
            kombinasi huruf besar, huruf kecil, angka, dan simbol.
          </AlertDescription>
        </Alert>

        {/* Password Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Ubah Password
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Password */}
            <div>
              <Label htmlFor="currentPassword">Password Saat Ini</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords.current ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    handleInputChange("currentPassword", e.target.value)
                  }
                  placeholder="Masukkan password saat ini"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("current")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.current ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <Label htmlFor="newPassword">Password Baru</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    handleInputChange("newPassword", e.target.value)
                  }
                  placeholder="Masukkan password baru"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {passwordData.newPassword && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">
                      Kekuatan Password:
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        passwordStrength <= 2
                          ? "text-red-600"
                          : passwordStrength <= 3
                          ? "text-yellow-600"
                          : passwordStrength <= 4
                          ? "text-blue-600"
                          : "text-green-600"
                      }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  placeholder="Konfirmasi password baru"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Password Match Indicator */}
              {passwordData.confirmPassword && (
                <div className="mt-1 flex items-center">
                  {passwordData.newPassword === passwordData.confirmPassword ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Password cocok</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <span className="text-sm">Password tidak cocok</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Password Requirements */}
        {passwordData.newPassword && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Persyaratan Password</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle
                      className={`h-4 w-4 mr-2 ${
                        req.met ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        req.met ? "text-green-600" : "text-muted-foreground"
                      }`}
                    >
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Security Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tips Keamanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Jangan gunakan password yang sama dengan akun lain</p>
              <p>• Hindari menggunakan informasi pribadi dalam password</p>
              <p>• Ganti password secara berkala (3-6 bulan sekali)</p>
              <p>• Jangan berbagi password dengan orang lain</p>
              <p>• Aktifkan autentikasi dua faktor jika tersedia</p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onBack}>
            Batal
          </Button>
          <Button
            onClick={handleChangePassword}
            disabled={isLoading || passwordStrength < 3}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Mengubah Password...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Ubah Password
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
