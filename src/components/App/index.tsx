import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import '../../i18n'
import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'
import ThemeProviders from '../ThemeProviders'

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
