import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { User, Settings, Lock, LogOut } from 'lucide-react';

interface AccountPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export function AccountPage({ onLogout, onNavigate }: AccountPageProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Akun Pengguna</h1>
        <p className="text-muted-foreground">Kelola profil dan pengaturan akun Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profil Saya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <div>
                  <h3 className="font-medium">Hamka</h3>
                  <p className="text-sm text-muted-foreground">Petani - Desa Sumbang</p>
                  <p className="text-sm text-muted-foreground">hamka@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Bergabung sejak:</span>
                    <p className="font-medium">15 Januari 2025</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <p className="font-medium text-green-600">Aktif</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Card */}
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Analisis Lereng</p>
                  <p className="text-sm text-muted-foreground">Desa Sumbang - 25 Jul 2025</p>
                </div>
                <Badge variant="secondary">Risiko Sedang</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Simulasi Harga</p>
                  <p className="text-sm text-muted-foreground">Padi 2000kg - 24 Jul 2025</p>
                </div>
                <Badge variant="default">Rp 12.4M</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Cek Cuaca</p>
                  <p className="text-sm text-muted-foreground">Prediksi 7 hari - 23 Jul 2025</p>
                </div>
                <Badge variant="outline">Hujan</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Pengaturan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Notifikasi Email</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Notifikasi Push</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Mode Gelap</span>
                <input type="checkbox" className="toggle" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Management Card */}
        <Card>
          <CardHeader>
            <CardTitle>Kelola Akun</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onNavigate('edit-profile')}
              >
                <User className="h-4 w-4 mr-2" />
                Edit Profil
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onNavigate('change-password')}
              >
                <Lock className="h-4 w-4 mr-2" />
                Ubah Password
              </Button>
              <Button 
                variant="destructive" 
                className="w-full justify-start"
                onClick={onLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Keluar dari Akun
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}