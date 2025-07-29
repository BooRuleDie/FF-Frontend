export interface User {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

// Determine base URL based on window.origin
const getBaseUrl = (): string => {
    if (typeof window === "undefined") return "http://localhost:3001";
    const origin = window.origin;
    if (origin.includes("dev.booruledie.com")) {
        return "https://dev.booruledie.com";
    }
    if (origin.includes("booruledie.com")) {
        return "https://booruledie.com";
    }
    return "http://localhost:3001";
};

export const fetchUsers = async (): Promise<User[]> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/users`);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};

export const fetchDevelopers = async (): Promise<User[]> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/developers`);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};

export const fetchAdmins = async (): Promise<User[]> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/admins`);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};

export const fetchModerators = async (): Promise<User[]> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/moderators`);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
};
