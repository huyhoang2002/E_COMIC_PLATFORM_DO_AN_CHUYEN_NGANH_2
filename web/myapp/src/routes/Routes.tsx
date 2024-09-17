import { Navigate, createBrowserRouter } from 'react-router-dom'
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
import LayoutAdmin from '../components/Common/Layouts/Admin/LayoutAdmin'
import Author from '../pages/admin/author/Author'
import Category from '../pages/admin/category/Category'
import * as fromRoutes from './routeName'
import AddNewAuthor from '../pages/admin/author/AddNewAuthor'
import UpdateAuthor from '../pages/admin/author/UpdateAuthor'
import AddNewComic from '../pages/admin/comic/AddNewComic'
import Comic from '../pages/admin/comic/Comic'
import ComicDetailPage from '../pages/admin/comic/ComicDetailPage/ComicDetailPage'
import SessionProvider from '../providers/SessionProvider'
import CategoryDetail from '../pages/client/Category/CategoryDetail'
import SearchResult from '../pages/client/SearchResult/SearchResult'
import Web3Provider from '../providers/Web3Provider'
export const routes = createBrowserRouter([
    {
        path: "/",
        // element: <Navigate replace to={"c"} />,
        children: [
            {
                path: fromRoutes.CLIENT,
                element: <LayoutClient />,
                children: [
                    {
                        path: "",
                        element: <LandingPage />
                    },
                    {
                        path: fromRoutes.COMIC_DETAIL,
                        element: <ComicDetail />,
                        children: [
                            {
                                path: fromRoutes.COMIC_VOLUME_LIST,
                                element: <VolumeList />
                            },
                            {
                                path: fromRoutes.COMMENT,
                                element: <Comment />
                            }
                        ]
                    },
                    {
                        path: fromRoutes.EPISODE_DETAIL,
                        element: <ComicEpisodeDetail />
                    },
                    {
                        path: fromRoutes.PROFILE,
                        element: <UserProfile />
                    },
                    {
                        path: fromRoutes.CATEGORY_DETAIL,
                        element: <CategoryDetail />
                    },
                    {
                        path: fromRoutes.SEARCH_RESULT,
                        element: <SearchResult />
                    }
                ],
                // errorElement: <ErrorPage />
            },
            {
                path: fromRoutes.ADMIN,
                element: <Web3Provider><LayoutAdmin /></Web3Provider>,
                children: [
                    {
                        path: fromRoutes.AUTHOR,
                        element: <Author />
                    },
                    {
                        path: fromRoutes.ADD_NEW_AUTHOR,
                        element: <AddNewAuthor />
                    },
                    {
                        path: fromRoutes.UPDATE_AUTHOR,
                        element: <UpdateAuthor />
                    },
                    {
                        path: fromRoutes.CATEGORY,
                        element: <Category />
                    },
                    {
                        path: fromRoutes.COMIC,
                        element: <Comic />
                    },
                    {
                        path: fromRoutes.ADD_NEW_COMIC,
                        element: <AddNewComic />
                    },
                    {
                        path: fromRoutes.COMIC_DETAIL_ADMIN,
                        element: <ComicDetailPage />
                    }
                ]
            }
        ]
    },
    {
        path: fromRoutes.SIGN_IN,
        element: <SignIn />
    },
    {
        path: fromRoutes.SIGN_UP,
        element: <Register />
    },
    {
        path: fromRoutes.CREATE_PROFILE,
        element: <CreateProfile />
    }
])