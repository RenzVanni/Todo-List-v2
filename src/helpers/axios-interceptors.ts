import axios from "axios";

const useAxios = () => {
  const storedData = localStorage.getItem("data");
  const parsedData = storedData ? JSON.parse(storedData) : {};

  const { token, refreshToken } = parsedData;

  const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error?.config;

      if (error?.response?.status === 401 && !originalRequest?._retry) {
        try {
          const refreshResponse = await api.post("/refresh-token", {
            token: refreshToken,
          });

          if (refreshResponse?.data?.token) {
            const storedData = JSON.parse(localStorage.getItem("data") || "{}");
            storedData.token = refreshResponse?.data?.token;
            localStorage.setItem("data", JSON.stringify(storedData));

            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${refreshResponse?.data?.token}`;
            originalRequest._retry = true;

            const newResponse = await api(originalRequest);

            return newResponse;
          } else {
            console.error("No new token received");
          }
        } catch (error: any) {
          console.error("Failed to refresh token", error.message);
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default useAxios;
