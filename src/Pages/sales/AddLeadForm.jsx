import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Save } from "lucide-react";

export default function AddLeadForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            source: "website",
            budget: "",
            notes: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string().email("Invalid email"),
            phone: Yup.string().required("Phone is required"),
            budget: Yup.number().required("Budget is required").positive(),
        }),
        onSubmit: (values) => {
            console.log("Lead data:", values);
            alert("Lead added successfully (Mock)");
            navigate("/leads");
        },
    });

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-md hover:bg-secondary text-muted-foreground"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Add New Lead</h2>
                    <p className="text-muted-foreground">Capture potential client details.</p>
                </div>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm">
                <form onSubmit={formik.handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                {...formik.getFieldProps("firstName")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="text-xs text-red-500">{formik.errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                {...formik.getFieldProps("lastName")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="text-xs text-red-500">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...formik.getFieldProps("email")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-xs text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                            <input
                                id="phone"
                                type="tel"
                                {...formik.getFieldProps("phone")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-xs text-red-500">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="budget" className="text-sm font-medium">Budget ($)</label>
                            <input
                                id="budget"
                                type="number"
                                {...formik.getFieldProps("budget")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.budget && formik.errors.budget ? (
                                <div className="text-xs text-red-500">{formik.errors.budget}</div>
                            ) : null}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="source" className="text-sm font-medium">Source</label>
                            <select
                                id="source"
                                {...formik.getFieldProps("source")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <option value="website">Website</option>
                                <option value="referral">Referral</option>
                                <option value="broker">Broker</option>
                                <option value="social">Social Media</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="notes" className="text-sm font-medium">Notes</label>
                        <textarea
                            id="notes"
                            rows="3"
                            {...formik.getFieldProps("notes")}
                            className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        >
                            <Save className="h-4 w-4" />
                            Save Lead
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
