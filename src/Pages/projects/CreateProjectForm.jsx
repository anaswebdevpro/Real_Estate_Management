import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Save } from "lucide-react";

export default function CreateProjectForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            location: "",
            units: "",
            startDate: "",
            endDate: "",
            budget: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Project Name is required"),
            location: Yup.string().required("Location is required"),
            units: Yup.number().required("Number of Units is required").positive().integer(),
            startDate: Yup.date().required("Start Date is required"),
            endDate: Yup.date().required("End Date is required").min(
                Yup.ref('startDate'),
                "End date must be later than start date"
            ),
            budget: Yup.number().required("Budget is required").positive(),
        }),
        onSubmit: (values) => {
            // In a real app, you would send this to the API
            console.log("Form data:", values);
            alert("Project created successfully (Mock)");
            navigate("/projects");
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
                    <h2 className="text-2xl font-bold tracking-tight">New Project</h2>
                    <p className="text-muted-foreground">Create a new real estate project.</p>
                </div>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm">
                <form onSubmit={formik.handleSubmit} className="space-y-4">

                    <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">Project Name</label>
                        <input
                            id="name"
                            type="text"
                            {...formik.getFieldProps("name")}
                            className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="e.g. Sunset Heights"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-xs text-red-500">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="location" className="text-sm font-medium">Location</label>
                        <input
                            id="location"
                            type="text"
                            {...formik.getFieldProps("location")}
                            className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="City, State"
                        />
                        {formik.touched.location && formik.errors.location ? (
                            <div className="text-xs text-red-500">{formik.errors.location}</div>
                        ) : null}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="units" className="text-sm font-medium">Total Units</label>
                            <input
                                id="units"
                                type="number"
                                {...formik.getFieldProps("units")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="0"
                            />
                            {formik.touched.units && formik.errors.units ? (
                                <div className="text-xs text-red-500">{formik.errors.units}</div>
                            ) : null}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="budget" className="text-sm font-medium">Budget ($)</label>
                            <input
                                id="budget"
                                type="number"
                                {...formik.getFieldProps("budget")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="1000000"
                            />
                            {formik.touched.budget && formik.errors.budget ? (
                                <div className="text-xs text-red-500">{formik.errors.budget}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="startDate" className="text-sm font-medium">Start Date</label>
                            <input
                                id="startDate"
                                type="date"
                                {...formik.getFieldProps("startDate")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.startDate && formik.errors.startDate ? (
                                <div className="text-xs text-red-500">{formik.errors.startDate}</div>
                            ) : null}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="endDate" className="text-sm font-medium">End Date</label>
                            <input
                                id="endDate"
                                type="date"
                                {...formik.getFieldProps("endDate")}
                                className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {formik.touched.endDate && formik.errors.endDate ? (
                                <div className="text-xs text-red-500">{formik.errors.endDate}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <textarea
                            id="description"
                            rows="3"
                            {...formik.getFieldProps("description")}
                            className="px-3 py-2 rounded-md border text-sm bg-background w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        >
                            <Save className="h-4 w-4" />
                            Create Project
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
