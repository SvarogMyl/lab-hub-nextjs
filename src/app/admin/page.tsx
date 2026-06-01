"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HoloCard from "@/components/ui/HoloCard";
import HoloButton from "@/components/ui/HoloButton";

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "https://auth.165.1.125.187.nip.io";

type AuthState = "loading" | "unauthenticated" | "not-admin" | "admin";

interface UserWithRoles {
  id: number;
  username: string;
  email: string;
  enabled: boolean;
  roles: string[];
}

export default function AdminPage() {
  const [authState, setAuthState] = useState<AuthState>("loading");
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [users, setUsers] = useState<UserWithRoles[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth_token");
    if (!stored) {
      setAuthState("unauthenticated");
      return;
    }
    validateToken(stored);
  }, []);

  async function validateToken(tokenStr: string) {
    try {
      const res = await fetch(`${AUTH_URL}/auth/validate`, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      });
      if (!res.ok) {
        setAuthState("unauthenticated");
        return;
      }
      const data = await res.json();
      if (!Array.isArray(data.roles) || !data.roles.includes("admin")) {
        setAuthState("not-admin");
        return;
      }
      setToken(tokenStr);
      setAuthState("admin");
      fetchUsers(tokenStr);
    } catch {
      setAuthState("unauthenticated");
    }
  }

  async function fetchUsers(tokenStr: string) {
    setLoadingUsers(true);
    try {
      const res = await fetch(`${AUTH_URL}/auth/users`, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch {
      setUsers([]);
    } finally {
      setLoadingUsers(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await fetch(`${AUTH_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setLoginError("Credenciales inválidas");
        return;
      }
      const data = await res.json();
      localStorage.setItem("auth_token", data.token);
      validateToken(data.token);
    } catch {
      setLoginError("Error de conexión con el servidor");
    } finally {
      setLoginLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("auth_token");
    setToken(null);
    setUsers([]);
    setAuthState("unauthenticated");
  }

  return (
    <div style={{ width: "100%", minHeight: "100%", position: "relative" }}>
      <Navigation />

      <section
        className="section-pad"
        style={{ position: "relative", zIndex: 3, paddingTop: 100, paddingBottom: 100, minHeight: "80vh" }}
      >
        {/* Loading */}
        {authState === "loading" && (
          <div style={{ textAlign: "center", padding: 80, fontFamily: "var(--font-mono)", color: "var(--dim)" }}>
            // authenticating...
          </div>
        )}

        {/* Login form */}
        {authState === "unauthenticated" && (
          <div style={{ maxWidth: 460, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>
              // admin_access
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: -2, margin: "0 0 32px" }}>
              Admin Panel
            </h1>
            <HoloCard padding={32}>
              <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%", boxSizing: "border-box", padding: "12px 14px",
                      background: "rgba(8, 9, 15, 0.6)", border: "1px solid var(--surface-border)",
                      borderRadius: 10, color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 13,
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      width: "100%", boxSizing: "border-box", padding: "12px 14px",
                      background: "rgba(8, 9, 15, 0.6)", border: "1px solid var(--surface-border)",
                      borderRadius: 10, color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 13,
                      outline: "none",
                    }}
                  />
                </div>
                {loginError && (
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#f87171", padding: "10px 14px", background: "rgba(248,113,113,0.08)", borderRadius: 8, border: "1px solid rgba(248,113,113,0.2)" }}>
                    ✗ {loginError}
                  </div>
                )}
                <HoloButton variant="primary" style={{ width: "100%", marginTop: 4 }}>
                  {loginLoading ? "Autenticando..." : "Acceder →"}
                </HoloButton>
              </form>
            </HoloCard>
          </div>
        )}

        {/* Access denied */}
        {authState === "not-admin" && (
          <div style={{ maxWidth: 460, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#f87171", letterSpacing: 2, marginBottom: 14 }}>
              // access_denied
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: -2, margin: "0 0 24px" }}>
              Forbidden
            </h1>
            <p style={{ color: "var(--dim)", marginBottom: 32 }}>Tu cuenta no tiene el rol <code>admin</code>.</p>
            <HoloButton variant="ghost" onClick={handleLogout}>Cerrar sesión</HoloButton>
          </div>
        )}

        {/* Admin dashboard */}
        {authState === "admin" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>
                  // admin_dashboard
                </div>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: -2, margin: 0 }}>
                  Usuarios
                </h1>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)" }}>
                  {users.length} usuarios
                </span>
                <HoloButton variant="ghost" onClick={handleLogout} style={{ padding: "8px 16px", fontSize: 12 }}>
                  Salir
                </HoloButton>
              </div>
            </div>

            {loadingUsers ? (
              <div style={{ padding: 40, textAlign: "center", color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
                // loading_users...
              </div>
            ) : (
              <HoloCard padding={0}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        {["ID", "USERNAME", "EMAIL", "STATUS", "ROLES"].map((h) => (
                          <th key={h} style={{
                            padding: "14px 20px", textAlign: "left",
                            fontSize: 10, letterSpacing: 1.5, color: "var(--dim)",
                            fontWeight: 600, textTransform: "uppercase",
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ padding: "40px 20px", textAlign: "center", color: "var(--dim)" }}>
                            No hay usuarios registrados.
                          </td>
                        </tr>
                      ) : (
                        users.map((u, i) => (
                          <tr key={u.id} style={{ borderTop: i === 0 ? "none" : "1px solid var(--surface-border)" }}>
                            <td style={{ padding: "14px 20px", color: "var(--dim)" }}>#{u.id}</td>
                            <td style={{ padding: "14px 20px", color: "var(--text)", fontWeight: 600 }}>{u.username}</td>
                            <td style={{ padding: "14px 20px", color: "var(--dim)" }}>{u.email}</td>
                            <td style={{ padding: "14px 20px" }}>
                              <span style={{
                                padding: "3px 10px", borderRadius: 99, fontSize: 10, fontWeight: 700,
                                background: u.enabled ? "rgba(34, 197, 94, 0.1)" : "rgba(248, 113, 113, 0.1)",
                                color: u.enabled ? "#4ade80" : "#f87171",
                                border: `1px solid ${u.enabled ? "rgba(34, 197, 94, 0.2)" : "rgba(248, 113, 113, 0.2)"}`,
                                letterSpacing: 1,
                              }}>
                                {u.enabled ? "ACTIVE" : "DISABLED"}
                              </span>
                            </td>
                            <td style={{ padding: "14px 20px" }}>
                              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                {u.roles.length === 0 ? (
                                  <span style={{ color: "var(--dim)", fontSize: 11 }}>—</span>
                                ) : (
                                  u.roles.map((r) => (
                                    <span key={r} style={{
                                      padding: "3px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700,
                                      background: r === "admin" ? "rgba(165, 180, 252, 0.15)" : "rgba(34, 211, 238, 0.1)",
                                      color: r === "admin" ? "var(--lav)" : "var(--cya)",
                                      border: `1px solid ${r === "admin" ? "rgba(165, 180, 252, 0.25)" : "rgba(34, 211, 238, 0.2)"}`,
                                      letterSpacing: 0.5,
                                    }}>{r}</span>
                                  ))
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </HoloCard>
            )}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
