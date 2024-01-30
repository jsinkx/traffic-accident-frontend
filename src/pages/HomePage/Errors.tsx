import React from 'react'

import { Alert } from '@mui/material'

import ForecastResultsContext from '../../context/ForecastResultsContext'

const Errors: React.FC = () => {
	const {
		results: { error: errorCreateForecast },
	} = React.useContext(ForecastResultsContext)

	return errorCreateForecast?.isDisplay ? (
		<Alert variant="outlined" severity="error" sx={{ marginTop: '15px', width: '70%' }}>
			{errorCreateForecast.message}
		</Alert>
	) : null
}

export default Errors
