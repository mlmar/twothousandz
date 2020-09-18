/********* FOR DEVELOPMENT ONLY *********/

const local_server = false;
const local_service = "http://localhost:3300/test";
const deployed_service = "https://twothousand-auth.vercel.app/test";
export const SERVICE_URL = local_server ? local_service : deployed_service;