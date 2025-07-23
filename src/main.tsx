import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { getUnleashConfig } from "./config.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FlagProvider } from "@unleash/proxy-client-react";

const queryClient = new QueryClient();
const config = getUnleashConfig()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <FlagProvider config={config}>
                <App />
            </FlagProvider>
        </QueryClientProvider>
    </StrictMode>,
);
