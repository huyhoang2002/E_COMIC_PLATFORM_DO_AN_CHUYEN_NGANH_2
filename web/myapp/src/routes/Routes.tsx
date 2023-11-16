import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/client/LandingPage/LandingPage'
import LayoutClient from '../components/Common/Layouts/Client/LayoutClient'
import ComicDetail from '../pages/client/ComicDetail/ComicDetail'
import Comment from '../components/ComicDetail/Comment'
import VolumeList from '../components/ComicDetail/VolumeList'
import ComicEpisodeDetail from '../pages/client/ComicEpisodeDetail/ComicEpisodeDetail'
import SignIn from '../pages/client/Authentication/Login/SignIn'

export const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "c",
                element: <LayoutClient />,
                children: [
                    {
                        path: "",
                        element: <LandingPage />
                    },
                    {
                        path: "detail/:id",
                        element: <ComicDetail />,
                        children: [
                            {
                                path: "vol",
                                element: <VolumeList />
                            },
                            {
                                path: "comment",
                                element: <Comment />
                            }
                        ]
                    },
                    {
                        path: "detail/:id/episode",
                        element: <ComicEpisodeDetail />
                    }
                ],
                // errorElement: <ErrorPage />
            },
            {
                path: "/a",
                children: [
                    
                ]
            }
        ]
    },
    {
        path: "/sign-in",
        element: <SignIn />
    }
])