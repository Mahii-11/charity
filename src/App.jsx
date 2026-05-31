import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import ImpactStoryDetailsPage from "./pages/ImpactStoryDetailsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
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
      },
      {
        path: "/impact-stories/:slug",
        element: <ImpactStoryDetailsPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }

    ]
  }


])





export default function App() {
  return <RouterProvider router={router} />
}
