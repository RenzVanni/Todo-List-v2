import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalProvider from "./lib/global-context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.tsx";
import Register from "./components/Register.tsx";
import Create from "./components/Create.tsx";
import Dashboard from "./components/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Home",
    element: <Home />,
    children: [
      { path: "/Home/Dashboard", element: <Dashboard /> },
      { path: "/Home/Create", element: <Create /> },
      { path: "/Home/Create/:id", element: <Create /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);
