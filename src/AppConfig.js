let backendHost;
const hostname = window && window.location && window.location.hostname;
if (hostname === "localhost") {
    
}
backendHost = "http://ykh8746.iptime.org:8080";
export const API_BASE_URL = `${backendHost}`;