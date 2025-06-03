import { Helmet } from "react-helmet";


const Blogs = () => {
  return (
    <div className="lg:w-[1200px] mx-auto">
      <Helmet><title>Blogs</title></Helmet>
      <p className="text-2xl font-bold" >Access Token and Refresh Token:</p> 
      An access token is a credential used by a client to access protected
      resources on behalf of a user. Its typically short-lived and grants
      limited access to specific resources. Once it expires, the client needs to
      request a new one. A refresh token, on the other hand, is a long-lived
      credential used to obtain a new access token when the current one expires.
      Its usually kept securely on the client side and exchanged for a new
      access token without requiring the user to reauthenticate. <br />
      Access tokens and refresh tokens work together in an OAuth 2.0
      authentication flow. When a user logs in, they receive both an access
      token and a refresh token. The access token is used to access resources,
      while the refresh token is used to obtain a new access token when the
      current one expires. Refresh tokens are typically stored securely, such as
      in an HTTP-only cookie or local storage, on the client side. <br />
      <p className="mt-2 text-2xl font-bold">Express.js:</p> 
      Express.js is a minimalist web application framework for Node.js, designed
      to build web applications and APIs quickly and easily. It provides a
      robust set of features for building web servers and handling HTTP requests
      and responses. With Express.js, developers can create routes, handle
      middleware, and interact with databases and other external services
      efficiently. <br />
      <p className="mt-2 text-2xl font-bold">  NestJS: </p>
      NestJS is a progressive Node.js framework for building efficient,
      reliable, and scalable server-side applications. Its built with
      TypeScript and heavily inspired by Angular, providing a modular and
      structured approach to building applications. NestJS leverages modern
      JavaScript features and design patterns to simplify the development
      process and improve code maintainability. It offers features like
      dependency injection, middleware, and decorators to streamline application
      development and make it more intuitive and enjoyable for developers.{" "}
      <br />
      <p className="mt-5 text-2xl font-bold">Explaining My Code:</p> 
      To provide an explanation of your code, I would need to see the specific
      code your referring to. Once you share your code snippet or project, I
      can analyze it and provide a detailed explanation of how it works, its
      purpose, and any improvements or optimizations that could be made. Feel
      free to share your code, and I will be happy to assist you further!

      <div>
        <p className="mt-5 text-xl font-bold">Home Page Banner section: </p>
        <ul>
  <li>
    <ol>
      <li><span className="font-bold">1.</span>  Imports: The component imports various modules and components needed for the functionality and styling. Notably, it imports components from libraries like react-router-dom, framer-motion, and swiper.</li>
      <li>
      <span className="font-bold">2.</span>  State: The component uses the useLoaderData hook from react-router-dom to load data for rendering.
      </li>
      <li>
      <span className="font-bold">3.</span>  Rendering: Inside the return statement, the component renders JSX code to create the home page interface. Heres a breakdown of the JSX structure:
      </li>
      <li>
      <span className="font-bold">4.</span>  The JSX code contains a Swiper component, which is used to create a slider/carousel effect for displaying images and text. It imports various modules from swiper library like Navigation, Pagination, etc., to enable features like navigation arrows, pagination dots, etc.
      </li>
      <li>
      <span className="font-bold">5.</span>  Within the Swiper component, multiple SwiperSlide components are used to represent individual slides. Each slide contains a hero section with background images and overlaid content, including a Typewriter effect for dynamic text.


      </li>
     
      <li>
      <span className="font-bold">6.</span>  After the Swiper component, there a TabCategories component, which presumably displays some categories related to the jobs fetched from the data
      </li>
      <p className="mt-4 text-2xl font-bold"> Tab Category:</p>
      <li><span className="font-bold">1.</span> useContext: This is a React hook used to consume the context provided by the AuthContext.</li>
      <li>
      <span className="font-bold">2.</span> useEffect and useState: These are React hooks used for handling side effects and managing component state, respectively.
      </li>
      <li><span className="font-bold">3.</span> AppliedJobCard: This is a custom component that renders a card for each applied job.</li>
      <li><span className="font-bold">4.</span> useLoaderData: This is a hook provided by react-router-dom for accessing data loaded during routing.</li>
      <p className="mt-5 text-2xl font-bold">Add Job:</p>
      <li> <span className="font-bold">1.</span> useContext: React hook used to access the authentication context provided by AuthProvider.</li>
      <li> <span className="font-bold">2.</span> useState: React hook used to manage component state.</li>
      <li> <span className="font-bold">3.</span> AuthContext: The context used for authentication.</li>
      <li> <span className="font-bold">4.</span> DatePicker: A component from the react-datepicker library used to select dates.</li>
      <li> <span className="font-bold">5.</span> Swal: SweetAlert2 library for displaying stylish pop-up alerts.</li>
    </ol>
    <p className="mt-4 text-xl font-bold">This is a React component called AppliedJob, presumably part of a web application for managing job applications. Let's break down what it does:
    
</p>
<li><span className="font-bold">1.</span> useState: The component uses the useState hook from React to manage state variables. It initializes two state variables: selectedCategory to keep track of the currently selected job category for filtering, and appliedJobs to store the list of jobs that the user has applied for.</li>
  </li>
  <li> <span className="font-bold">2.</span>useEffect: The component uses the useEffect hook to perform side effects in function components. In this case, it makes an HTTP request to fetch the list of applied jobs from the backend API when the component mounts ([] as the dependency array means it only runs once). It sends a request to the specified API endpoint (/applied) with the user's email as a query parameter. Once the data is fetched, it updates the appliedJobs state with the received data.</li>
  <li> <span className="font-bold">3.</span>AuthContext: The component consumes the AuthContext using the useContext hook. This context likely provides authentication-related information, such as the currently logged-in user.</li>
</ul>


      </div>
    </div>
  );
};

export default Blogs;
