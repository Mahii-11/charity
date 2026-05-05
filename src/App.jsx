import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import { createBrowserRouter, RouterProvider } from "react-router";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: <Home />
      },


      {
        path: "/blogs",
        element: <BlogPage />
      }

    ]
  }


])





export default function App() {
  return <RouterProvider router={router} />
}
