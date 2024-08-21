import { AxiosRequestConfig } from "axios";
import useAxios from "./axios-interceptors";
const api = useAxios();

type ApiResponseProp = {
  params: string;
  request: AxiosRequestConfig;
};

const apiRequest = async ({ params, request }: ApiResponseProp) => {
  try {
    const response = await api.request({ url: params, ...request });

    return response?.data?.data?.results;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }
};

export default apiRequest;
