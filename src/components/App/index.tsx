import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import '../../i18n'
import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'
import Themes from '../Themes'

const App: React.FC = () => {
	return (
		<div className="app">
			<HelmetProvider>
				<Themes>
					<GlobalStyles />
					<Routes />
				</Themes>
			</HelmetProvider>
		</div>
	)
}

export default App
