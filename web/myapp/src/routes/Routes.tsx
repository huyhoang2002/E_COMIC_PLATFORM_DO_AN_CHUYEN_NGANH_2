import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/client/LandingPage/LandingPage'
import LayoutClient from '../components/Common/Layouts/Client/LayoutClient'
import ComicDetail from '../pages/client/ComicDetail/ComicDetail'

export const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/c",
                element: <LayoutClient />,
                children: [
                    {
                        path: "",
                        element: <LandingPage />
                    },
                    {
                        path: "detail/:id",
                        element: <ComicDetail />
                    }
                ]
            },
            {
                path: "/a",
                children: [
                    
                ]
            }
        ]
    }
])