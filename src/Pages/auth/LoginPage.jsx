import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Lock, Mail, Building2 } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { backgroundImage, icon } from "../../assets/index.js";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "SUPER_ADMIN", // Default role for demo
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      // Mock Login Logic
      if (values.password === "Pass@123") {
        login({
          id: Date.now().toString(),
          name: "Mohd Anas",
          email: values.email,
          role: values.role, // In real app, this comes from backend
          permissions: ["all"],
        });
        navigate("/");
      } else {
        setError("Invalid credentials. Use password: Pass@123");
      }
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md bg-[var(--background)] border rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
            {/* <Building2 className="h-6 w-6" /> */}
            <img src={icon} alt="Real Estate CRM" className="h-16 w-auto" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md text-center">
            {error}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Role </label>
            <select
              {...formik.getFieldProps("role")}
              className="w-full px-3 py-2 border rounded-md bg-background"
            >
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="ORG_ADMIN">Organization Admin</option>
              <option value="PROJECT_MANAGER">Project Manager</option>
              <option value="SALES_MANAGER">Sales Manager</option>
              <option value="SALES_EXECUTIVE">Sales Executive</option>
              <option value="BROKER">Broker</option>
              <option value="CLIENT">Client</option>
              <option value="FINANCE_MANAGER">Finance Manager</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full pl-9 pr-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="name@example.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-xs text-red-600 font-medium">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Password</label>
              <a href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                {...formik.getFieldProps("password")}
                className="w-full pl-9 pr-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter Pass@123"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-xs text-red-600 font-medium">
                {formik.errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--button)] text-[var(--primary-foreground)] py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:underline font-medium"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
