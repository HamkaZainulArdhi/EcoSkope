import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { AdminNavigation } from "../components/AdminNavigation";
import { PageRouter } from "../components/PageRouter";
import { LoginRegisterWithRole } from "../components/LoginRegisterWithRole";
import { LandingPage } from "../components/LandingPage";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [userRole, setUserRole] = useState<"farmer" | "admin">("farmer");

  const handleLoginClick = () => {
    setShowLanding(false);
  };

  const handleLogin = (role: "farmer" | "admin" = "farmer") => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage(role === "admin" ? "admin-dashboard" : "dashboard");
    setShowLanding(false);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("farmer");
    setCurrentPage("dashboard");
    setShowLanding(true);
  };

  // Tampilkan landing page jika belum login dan showLanding true
  if (showLanding && !isLoggedIn) {
    return <LandingPage onLoginClick={handleLoginClick} />;
  }

  // Tampilkan halaman login jika tidak login dan tidak di landing
  if (!isLoggedIn) {
    return <LoginRegisterWithRole onLogin={handleLogin} />;
  }

  // Tampilkan aplikasi utama jika sudah login
  const NavigationComponent =
    userRole === "admin" ? AdminNavigation : Navigation;

  return (
    <div className="min-h-screen bg-background flex">
      <NavigationComponent
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <main className="flex-1 md:ml-0">
        <PageRouter
          currentPage={currentPage}
          userRole={userRole}
          onNavigate={handlePageChange}
          onLogout={handleLogout}
        />
      </main>
    </div>
  );
}
