import { LifeBuoy, Mail, Phone, MessageCircle, ChevronRight } from "lucide-react";

export default function SupportPage() {
    const faqs = [
        { q: "How do I download my payment receipts?", a: "Go to the 'Payments' tab in your dashboard and click the download icon next to the transaction." },
        { q: "When will the next construction update be posted?", a: "Construction updates are posted bi-weekly on Mondays. Check the 'My Property' or 'Progress' tab." },
        { q: "Can I schedule a site visit online?", a: "Yes, use the 'Site Visits' section to request a slot. Your Sales Executive will confirm it shortly." },
    ];

    return (
        <div className="space-y-6">
            <div className="text-center py-8">
                <h2 className="text-3xl font-bold tracking-tight">How can we help you?</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mt-2">Browse our FAQs or get in touch with our support team directly.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition-shadow">
                    <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-4">
                        <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
                    <p className="font-bold mt-2">+1 (555) 123-4567</p>
                </div>
                <div className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition-shadow">
                    <div className="mx-auto h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-4">
                        <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Chat Support</h3>
                    <p className="text-sm text-muted-foreground mt-1">24/7 Virtual Assistant</p>
                    <button className="text-primary font-medium text-sm mt-3 hover:underline">Start Chat</button>
                </div>
                <div className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition-shadow">
                    <div className="mx-auto h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 mb-4">
                        <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    <p className="font-bold mt-2">support@recrm.com</p>
                </div>
            </div>

            <div className="rounded-xl border bg-card p-6 mt-6">
                <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
                <div className="divide-y">
                    {faqs.map((item, i) => (
                        <div key={i} className="py-4 hover:bg-secondary/20 transition-colors px-2 rounded-md cursor-pointer group">
                            <div className="flex justify-between items-center">
                                <h4 className="font-medium text-sm">{item.q}</h4>
                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
