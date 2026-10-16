
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import "./AdminLogin.css";

export default function AdminLogin({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    // TEMPORARY FRONTEND DEMO ONLY.
    // Replace this check with a backend authentication API.
    const validEmail = "admin@kaised.com";
    const validPassword = "Admin@123";

    if (email.trim().toLowerCase() === validEmail &&
        password === validPassword) {
      sessionStorage.setItem("portfolioAdminDemo", "true");
      onLogin();
      navigate("/admin/dashboard", { replace: true });
    } else {
      setError("Invalid email or password. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-glow admin-login-glow-one" />
      <div className="admin-login-glow admin-login-glow-two" />

      <section className="admin-login-card">
        <a href="/" className="admin-login-brand">
          KaiSed<span>.</span>
        </a>

        <div className="admin-login-icon">
          <LockKeyhole size={29} />
        </div>

        <p className="admin-login-eyebrow">
          PRIVATE WORKSPACE
        </p>

        <h1>Welcome back</h1>

        <p className="admin-login-description">
          Sign in to manage your portfolio messages
          and administrative workspace.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-email">Email address</label>

          <div className="admin-login-input-wrap">
            <Mail size={19} />
            <input
              id="admin-email"
              type="email"
              placeholder="Enter your admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <label htmlFor="admin-password">Password</label>

          <div className="admin-login-input-wrap">
            <LockKeyhole size={19} />
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              className="admin-password-toggle"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {error && (
            <p className="admin-login-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="admin-login-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in to dashboard"}
            {!loading && <ArrowRight size={19} />}
          </button>
        </form>

        <div className="admin-login-security">
          <ShieldCheck size={18} />
          <span>Admin access only</span>
        </div>

        <a href="/" className="admin-login-back">
          ← Back to portfolio
        </a>
      </section>

      <p className="admin-login-footer">
        © {new Date().getFullYear()} KaiSed Portfolio
      </p>
    </main>
  );
}
