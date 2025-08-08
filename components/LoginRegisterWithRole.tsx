import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Eye,
  EyeOff,
  Smartphone,
  Mail,
  User,
  Lock,
  Shield,
} from "lucide-react";

interface LoginRegisterWithRoleProps {
  onLogin: (role: "farmer" | "admin") => void;
}

export function LoginRegisterWithRole({ onLogin }: LoginRegisterWithRoleProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"farmer" | "admin">(
    "farmer"
  );
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin("farmer"); // New registrations default to farmer role
  };

  const handleAdminLogin = () => {
    onLogin("admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <span className="text-2xl">🌱</span>
          </div> */}
          <div className="inline-flex items-center justify-center w-40 h-50 rounded-full">
          <img src="src/assets/logo.svg" alt="EcoScope" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
        </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            EcoScope Banyumas
          </h1>
          <p className="text-gray-600">
            Platform monitoring lingkungan dan pasar pertanian
          </p>
        </div>

        <Card className="shadow-xl">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader className="space-y-1 pb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Masuk</TabsTrigger>
                <TabsTrigger value="register">Daftar</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              {/* Login Form */}
              <TabsContent value="login" className="space-y-4">
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label>Masuk sebagai:</Label>
                  <div className="flex space-x-2">
                    <Button
                      variant={
                        selectedRole === "farmer" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedRole("farmer")}
                      className="flex-1"
                    >
                      <User className="h-3 w-3 mr-1" />
                      Petani
                    </Button>
                    <Button
                      variant={selectedRole === "admin" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRole("admin")}
                      className="flex-1"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      Admin
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email atau Nomor HP</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="text"
                        placeholder="Masukkan email atau nomor HP"
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Ingat saya
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Lupa password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full">
                    Masuk ke Dashboard
                    {selectedRole === "admin" && (
                      <Badge variant="destructive" className="ml-2">
                        Admin
                      </Badge>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <Separator className="my-4" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                    atau
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
                {/* Quick Admin Login */}
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nama Lengkap</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={registerData.name}
                        onChange={(e) =>
                          setRegisterData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Masukkan email"
                        value={registerData.email}
                        onChange={(e) =>
                          setRegisterData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Nomor HP</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-phone"
                        type="tel"
                        placeholder="Masukkan nomor HP"
                        value={registerData.phone}
                        onChange={(e) =>
                          setRegisterData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Buat password"
                        value={registerData.password}
                        onChange={(e) =>
                          setRegisterData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">
                      Konfirmasi Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-confirm-password"
                        type="password"
                        placeholder="Konfirmasi password"
                        value={registerData.confirmPassword}
                        onChange={(e) =>
                          setRegisterData((prev) => ({
                            ...prev,
                            confirmPassword: e.target.value,
                          }))
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-gray-600">
                      Saya setuju dengan{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Syarat & Ketentuan
                      </a>{" "}
                      dan{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Kebijakan Privasi
                      </a>
                    </span>
                  </div>

                  <Button type="submit" className="w-full">
                    Daftar Sekarang
                  </Button>
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 EcoScope Banyumas. Semua hak dilindungi.</p>
          <p className="mt-1">
            Versi 1.0.0 | Kontak: info@ecoscope-banyumas.id
          </p>
        </div>
      </div>
    </div>
  );
}
