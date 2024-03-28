import { AppRoute } from "./config/utils"
import { Main } from "../pages/Main"
import { Post } from "../pages/Post"
import { createBrowserRouter } from "react-router-dom"


  export const appRouter = () => createBrowserRouter([
        {
            path: AppRoute.Main,
            element: <Main />
        },
        {
            path: AppRoute.Post,
            element: <Post />,
        },
        {
            path: '*',
            element: (<h2>Ресурс не найден</h2>),
        },
    ])