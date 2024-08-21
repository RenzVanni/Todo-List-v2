import axios from "axios";

export const fetchData = async (path: string) => {
  const { token } = JSON.parse(localStorage.getItem("data") || "");
  try {
    const response = await axios.get(`http://localhost:3000/Home/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data?.data?.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSpecificData = async (params: string) => {
  const { token } = JSON.parse(localStorage.getItem("data") || "");
  try {
    const response = await axios.get(
      `http://localhost:3000/Home/Create/${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response?.data?.data);
    const title = response?.data?.data?.properties?.Name?.title[0]?.plain_text;
    const context =
      response?.data?.data.properties?.Context?.rich_text[0].plain_text;
    return { title, context };
  } catch (error) {
    console.log(error);
  }
};
