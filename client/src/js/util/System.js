/********* FOR DEVELOPMENT ONLY *********/

const local_server = true;
const local_service = "http://localhost:3300/test";
const deployed_service = "";
export const SERVICE_URL = local_server ? local_service : deployed_service;