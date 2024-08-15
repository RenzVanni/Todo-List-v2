import axios from "axios";

export const fetchData = async (path: string) => {
  const { token } = JSON.parse(localStorage.getItem("data") || "");
  try {
    const response = await axios.get(`http://localhost:3000/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data?.data?.results;
  } catch (error) {
    console.log(error);
  }
};
