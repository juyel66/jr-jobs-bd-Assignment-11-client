import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import Roots from "./Components/Roots/Roots.jsx";
import Register from "./Register/Register.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Login from "./Components/Login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Properties from "./Components/Properties/Properties.jsx";
import PrivetRout from "./Components/PrivetRout/PrivetRout.jsx";
import AllJob from "./Components/AllJob/AllJob.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import AddAJob from "./Components/AddAJob/AddAJob.jsx";
import AppliedJob from "./Components/AppliedJob/AppliedJob.jsx";
import MyJob from "./Components/MyJob/MyJob.jsx";
import UpdateMyJob from "./Components/MyJob/UpdateMyJob.jsx";
import ViewDetails from "./Components/MyJob/ViewDetails.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import SummaryDetails from "./Components/AppliedJob/SummaryDetails.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: '/properties',
      //   element: <PrivetRout><Properties></Properties></PrivetRout>
      // },
      {
        path: "/allJob",
        element: <PrivetRout><AllJob></AllJob></PrivetRout>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/job/:id",
        element: (
          <PrivetRout>
            <JobDetails></JobDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/addAJob",
        element: (
          <PrivetRout>
            <AddAJob></AddAJob>
          </PrivetRout>
        ),
      },
      {
        path: "/appliedJob",
        element: (
          <PrivetRout>
            <AppliedJob></AppliedJob>
          </PrivetRout>
        ),
        // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/applied`)
      },
      {
        path: "/myJobs",
        element: (
          <PrivetRout>
            <MyJob></MyJob>
          </PrivetRout>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/updateMyJob/:id",
        element: (
          <PrivetRout>
            <UpdateMyJob></UpdateMyJob>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivetRout>
            <ViewDetails></ViewDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/summary/:id",
        element: (
          <PrivetRout>
            <SummaryDetails></SummaryDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/applied/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/ContactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
