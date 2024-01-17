import React from 'react'

import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'
import Themes from '../Themes'

const App: React.FC = () => {
	return (
		<div className="app">
			<Themes>
				<GlobalStyles />
				<Routes />
			</Themes>
		</div>
	)
}

export default App
