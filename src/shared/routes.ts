// API route definitions

export const api = {
    earlyAccess: {
        create: {
            path: "/api/early-access",
            method: "POST" as const,
        },
    },
    demoRequest: {
        create: {
            path: "/api/demo-request",
            method: "POST" as const,
        },
    },
    investorRequest: {
        create: {
            path: "/api/investor-request",
            method: "POST" as const,
        },
    },
} as const;
