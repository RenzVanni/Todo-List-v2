import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateProp } from "../constants/types";
import useAxios from "../helpers/axios-interceptors";
import { useNavigate } from "react-router-dom";
import { CREATE, DASHBOARD, HOME } from "../constants/url";

const Create = () => {
  const api = useAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiResponse, setApiResponse] = useState<CreateProp | any>({
    id: "",
    title: "",
    context: "",
  });
  const { title, context } = apiResponse;
  useEffect(() => {
    if (id) {
      const response = async () => {
        try {
          await api
            .get(`${CREATE}/${id}`)
            .then((res) => {
              console.log(res?.data?.data?.id);
              const id = res?.data?.data?.id;
              const title =
                res?.data?.data?.properties?.Name?.title[0]?.plain_text;
              const context =
                res?.data?.data.properties?.Context?.rich_text[0].plain_text;
              setApiResponse({ title, context, id });
            })
            .catch((err) => {
              console.error("error", err.message);
            });
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
        }
      };

      response();
    } else {
      setApiResponse({ id: "", title: "", context: "" });
    }
  }, [id]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      await api
        .post(HOME, {
          title,
          context,
          id: apiResponse?.id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    } else {
      await api
        .post(CREATE, {
          title,
          context,
        })
        .then((res) => {
          console.log(res.data);
          navigate(DASHBOARD);
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    }
  };

  return (
    <div className="w-4/5 h-4/5 overflow-y-scroll">
      <form action="" className="flex flex-col h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Untitled"
          className="bg-transparent w-full outline-none placeholder:text-text text-5xl text-text"
          value={title ? title : ""}
          onChange={(e) =>
            setApiResponse((prev: CreateProp) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        <textarea
          name=""
          id=""
          className="bg-transparent resize-none text-text outline-none flex-1 h-full"
          value={context ? context : ""}
          onChange={(e) =>
            setApiResponse((prev: CreateProp) => ({
              ...prev,
              context: e.target.value,
            }))
          }
        ></textarea>
        <button
          type="submit"
          className="text-text py-2 rounded-md hover:bg-background hover:scale-100"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Create;
