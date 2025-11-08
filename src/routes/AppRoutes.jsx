import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./Routes";
import MainLayout from "../pages/layout/MainLayout";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProjectInfo from "../pages/ProjectInfo";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routes.Projects,
        element: <Projects />,
      },
      {
        path: Routes.Contact,
        element: <Contact />,
      }
    ],
  },
  {
    path: Routes.ProjectInfo,
    element: <ProjectInfo />,
  }
]);


export default function AppRoutes() {
  return <RouterProvider router={router} />
}
