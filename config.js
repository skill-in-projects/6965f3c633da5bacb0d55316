// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi6965f3c633da5bacb0d55316-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
