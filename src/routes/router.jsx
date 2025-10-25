import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <h2>Home layout</h2>,
        },
        {
          path:"/auth",
          element: <h2>Authentication layout</h2>,
        },
        {
            path:"/news",
            element: <h2>News layout</h2>,
        },
        // this part is for show the error
        {
            path: "/*",
            element: <h2>Error404</h2>,
        }
    ]
);
export default router;