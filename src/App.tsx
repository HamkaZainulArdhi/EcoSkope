import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { AdminNavigation } from "../components/AdminNavigation";
import { PageRouter } from "../components/PageRouter";
import { LoginRegisterWithRole } from "../components/LoginRegisterWithRole";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [userRole, setUserRole] = useState<"farmer" | "admin">("farmer");

  const handleLogin = (role: "farmer" | "admin" = "farmer") => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage(role === "admin" ? "admin-dashboard" : "dashboard");
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("farmer");
    setCurrentPage("dashboard");
  };

  if (!isLoggedIn) {
    return <LoginRegisterWithRole onLogin={handleLogin} />;
  }

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
