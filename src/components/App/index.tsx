import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import '@i18n/index'

import GlobalStyles from '@components/GlobalStyles'
import Routes from '@components/Routes'
import ThemeProviders from '@components/ThemeProviders'

const App: React.FC = () => {
	return (
		<div className="app">
			<HelmetProvider>
				<ThemeProviders>
					<GlobalStyles />
					<Routes />
				</ThemeProviders>
			</HelmetProvider>
		</div>
	)
}

export default App
