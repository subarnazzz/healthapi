export const BrandConfig = {
    name: "HealthAPI",
    domain: "healthapi.online",
    establishedYear: 2025,
    font: "Noto Sans",
    colors: {
        primary: "#ED5D90", // Vibrant Pink 
        secondary: "#FDF2F8", // Light Pink bg
        accent: "#E9D5FF", // Light Purple
        success: "#DCFCE7", // Light Green
        background: "#FFFFFF",
        foreground: "#18181B", // Zinc 900
        textMuted: "#71717A", // Zinc 500
    },
    logo: {
        text: "Health",
        suffix: "API",
        iconPath: "/logo.jpg",
        faviconPath: "/logo2.jpg",
    },
    navbar: {
        links: [
            { label: "Features", href: "#features" },
            { label: "Products", href: "#products" },
            { label: "Support", href: "#support" },
            { label: "Pricing", href: "#pricing" },
        ],
        cta: "Request Access"
    },
    hero: {
        title: "Connect. Automate. Revolutionize.",
        subtitle: "HealthAPI enable the integration of intelligent infrastructure and advanced automations into modern applications.",
        cta: "Request Access",
        image: "/pic5.jpg",
    },
    features: {
        tagline: "REDEFINING PROCESSES WITH INTELLIGENT INFRASTRUCTURE",
        grid: [
            {
                title: "Revolutionize Revenue Cycle",
                description: "Create an automation masterpiece once, and watch it thrive for years to come. Our API-first approach gives you the power to automate insurance billing experiences with remarkable scale, precision, and efficiency."
            },
            {
                title: "Innovate at Startup Speed",
                description: "Blend startup agility with enterprise strength. Build, launch, and rapidly improve solutions with the creativity of a startup's day-one mentality - while benefiting from enterprise-grade support."
            },
            {
                title: "Unify Healthcare Billing Data",
                description: "Eligible remains one of the few nationwide direct-connection-first options for essential healthcare transactions. Providing you with the ability to break down archaic silos of information and streamline processes."
            },
            {
                title: "One Vision, One Goal",
                description: "One team. One vision. One goal. Seamlessly connect healthcare billing data across every provider system, from frontend patient clearance to backend revenue cycle management, and achieve unparalleled results."
            }
        ],
        sections: [
            {
                tag: "ADVANCED AUTOMATIONS",
                title: "Advanced Automations.",
                description: "Seamlessly integrate key financial workflows like managing insurance submissions, payment status, eligibility, and line-item patient out-of-pocket cost transparency.",
                image: "/pic2.jpg",
                reversed: true
            },
            {
                tag: "THINK DIFFERENT",
                title: "In-App Insurance Billing Experiences",
                description: "Process and verify insurance to confirm policy status, healthcare eligibility, and more. File in and out of network health insurance claims for healthcare providers or on behalf of patients.",
                image: "/pic3.jpg",
                items: [
                    { title: "Insurance Verifications", desc: "Process and verify insurance to confirm policy status, healthcare eligibility, and more." },
                    { title: "Insurance Claims", desc: "File in and out of network health insurance claims for healthcare providers or on behalf of patients." },
                    { title: "Events", desc: "Easily track the status of insurance billing submissions via apis and webhooks." }
                ],
                reversed: false
            },
            {
                tag: "COMPREHENSIVE SUPPORT",
                title: "HealthAPI support",
                description: "Whether you are new to HealthAPI, or continuing to increase your adoption of services as you develop applications and build business solutions.",
                image: "/pic4.jpg",
                reversed: true
            }
        ]
    },
    footer: {
        sections: [
            {
                title: "Features",
                links: ["Insurance Claims", "Insurance Verifications", "Eligibility & Benefits", "Insurance Enrollments", "ML Powered Estimations", "Reporting"]
            },
            {
                title: "Product Lines",
                links: ["Insurance Billing", "Patient Clearance"]
            },
            {
                title: "Support Plans",
                links: ["Basic Support", "Enterprise Support", "System Status"]
            },
            {
                title: "Developers",
                links: ["Webhooks", "API Monitoring", "Documentation"]
            }
        ],
        contact: {
            email: "support@healthapi.online",
            phone: "1-888-909-3055"
        }
    },
    contact: {
        successMessage: "Thank you for your interest! Our team will get back to you shortly.",
    }
};
