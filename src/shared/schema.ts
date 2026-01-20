// Shared schema types for API requests

export interface InsertEarlyAccess {
    email: string;
    name?: string;
}

export interface InsertDemoRequest {
    name: string;
    email: string;
    company?: string;
    message?: string;
}

export interface InsertInvestorRequest {
    name: string;
    email: string;
    company?: string;
    message?: string;
}
