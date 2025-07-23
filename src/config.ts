export function getUnleashConfig() {
    // Ensure required properties are set and types match IConfig
    const unleashUrl = import.meta.env.VITE_UNLEASH_URL;
    let unleashClientKey: string;

    switch (window.origin) {
        case "http://localhost:5173":
        case "https://dev.booruledie.com":
            unleashClientKey = import.meta.env.VITE_UNLEASH_CLIENT_KEY_DEV;
            break;
        case "https://booruledie.com":
            unleashClientKey = import.meta.env.VITE_UNLEASH_CLIENT_KEY_PROD;
            break;
        default:
            unleashClientKey = import.meta.env.VITE_UNLEASH_CLIENT_KEY_DEV;
    }

    const unleashAppName = import.meta.env.VITE_UNLEASH_APP_NAME;

    if (!unleashUrl || !unleashClientKey || !unleashAppName) {
        throw new Error(
            "UNLEASH environment variables are missing or misconfigured.",
        );
    }

    return { 
        url: unleashUrl, 
        clientKey: unleashClientKey, 
        appName: unleashAppName,
    };
}
