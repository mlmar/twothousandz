/********* FOR DEVELOPMENT ONLY *********/

const local_server = false; // set this to true if using local api
const local_service = "http://localhost:3300/test";
const deployed_service = "https://twothousandz-auth.vercel.app/test";
export const SERVICE_URL = local_server ? local_service : deployed_service;