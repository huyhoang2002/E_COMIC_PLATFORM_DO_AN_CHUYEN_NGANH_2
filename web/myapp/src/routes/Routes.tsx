import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/client/LandingPage/LandingPage'
import LayoutClient from '../components/Common/Layouts/Client/LayoutClient'
import ComicDetail from '../pages/client/ComicDetail/ComicDetail'
import Comment from '../components/ComicDetail/Comment'
import VolumeList from '../components/ComicDetail/VolumeList'
import ComicEpisodeDetail from '../pages/client/ComicEpisodeDetail/ComicEpisodeDetail'
import SignIn from '../pages/client/Authentication/Login/SignIn'
import Register from '../pages/client/Authentication/Register/Register'
import CreateProfile from '../pages/client/CreateProfile/CreateProfile'
import UserProfile from '../pages/client/UserProfile/UserProfile'

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
                    },
                    {
                        path: "profile",
                        element: <UserProfile />
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
    },
    {
        path: "/sign-up",
        element: <Register />
    },
    {
        path: "/create-profile",
        element: <CreateProfile />
    }
])