import React, { useContext } from 'react'

import ForecastResultsContext from '@context/ForecastResultsContext'

import { Alert } from '@mui/material'

const Errors: React.FC = () => {
	const {
		results: { error: errorCreateForecast },
	} = useContext(ForecastResultsContext)

	return errorCreateForecast?.isDisplay ? (
		<Alert variant="outlined" severity="error" sx={{ marginTop: '15px', width: '70%' }}>
			{errorCreateForecast.message}
		</Alert>
	) : null
}

export default Errors
