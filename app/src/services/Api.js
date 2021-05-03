import axios from "axios";
import env from "../config";

const connection = axios.create({
  baseURL: env.baseUrl,
});

export default connection;
