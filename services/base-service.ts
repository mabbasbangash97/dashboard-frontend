import axios from "axios";

const BaseService = axios.create({
  baseURL:`${process.env.BACKEND_URL}/api`,
});

export default BaseService;