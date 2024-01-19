import React from 'react'
import { Helmet } from 'react-helmet-async'

type MainLayoutProps = {
	title: string
	description?: string
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, description = '', children }) => {
	return (
		<>
			<Helmet>
				<title> {title} </title>
				<meta name="description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
			</Helmet>
			{children}
		</>
	)
}

export default MainLayout
