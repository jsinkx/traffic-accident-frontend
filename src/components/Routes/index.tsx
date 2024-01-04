import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Paths from '../../shared/paths'

import LoadingPage from '../../pages/LoadingPage'

const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ '../../pages/HomePage'))
const NotFoundPage = React.lazy(
	() => import(/* webpackChunkName: "NotFoundPage" */ '../../pages/NotFoundPage'),
)

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.any,
		element: <NotFoundPage />,
		errorElement: <NotFoundPage />,
	},
])

const Routes: React.FC = () => (
	<React.Suspense fallback={<LoadingPage />}>
		<RouterProvider router={router} />
	</React.Suspense>
)

export default Routes
