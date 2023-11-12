import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/client/LandingPage/LandingPage'
import LayoutClient from '../components/Common/Layouts/Client/LayoutClient'

export const routes = createBrowserRouter([
    {
        path: "/c",
        element: <LayoutClient />,
        children: [
            {
                path: "",
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/a",
        children: [

        ]
    }
])