import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import App from "./App";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Corporate from "./Components/Pages/Corporate";
import Packages from "./Components/Pages/Packages";

 const router = createBrowserRouter([
    {
        path:"/",
         element: <App />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/blog",
                element: <Blog />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/corporate",
                element: <Corporate />
            },
            {
                path:"/packages",
                element: <Packages />
            }
        ]
    }
])

export { router };