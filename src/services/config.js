const DEV_BASEURL = 'http://123.207.32.32:9001';
const PROD_BASEURL = 'http://123.207.32.32:9001';

const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASEURL : PROD_BASEURL;
const TIME_OUT = 5000;
export { BASE_URL, TIME_OUT }