import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Building2 } from "lucide-react";

export default function SignupPage() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required("Confirm password is required"),
        }),
        onSubmit: (values) => {
            alert("Signup functionality coming soon. Please use Login.");
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
            <div className="w-full max-w-md bg-card border rounded-2xl shadow-lg p-8 space-y-6">
                <div className="text-center space-y-2">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
                    <p className="text-muted-foreground">Join the platform today</p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            {...formik.getFieldProps("name")}
                            className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John Doe"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-xs text-destructive">{formik.errors.name}</div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            {...formik.getFieldProps("email")}
                            className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="name@example.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-xs text-destructive">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            {...formik.getFieldProps("password")}
                            className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-xs text-destructive">{formik.errors.password}</div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            {...formik.getFieldProps("confirmPassword")}
                            className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <div className="text-xs text-destructive">{formik.errors.confirmPassword}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
                    >
                        Create Account
                    </button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
