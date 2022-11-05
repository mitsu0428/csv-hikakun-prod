import { createClient } from "microcms-js-sdk"; // CommonJS
// Initialize Client SDK.
const client = createClient({
  serviceDomain: "csvhikakun", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.API_KEY || "",
});

export default client;
