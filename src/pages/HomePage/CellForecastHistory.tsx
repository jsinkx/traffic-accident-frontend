import React from 'react'
import { useTranslation } from 'react-i18next'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { ForecastResponse } from '../../services/createForecast'

import ForecastAccidentResult from './ForecastAccidentResult'
import { StyledCell } from './styles'

type Props = {
	forecasts: ForecastResponse[]
}

const CellForecastHistory: React.FC<Props> = ({ forecasts }) => {
	const { t } = useTranslation(['homePage'])

	return (
		<StyledCell className="cell--forecast__history" width="330px" height="450px">
			<h2> {t('cells.forecastHistory.title')}</h2>
			<TableContainer>
				<Table>
					<TableHead sx={{ userSelect: 'none' }}>
						<TableRow>
							<TableCell> {t('cells.forecastHistory.forecastNumber')} </TableCell>
							<TableCell> {t('cells.forecastHistory.forecastResult')} </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{forecasts.map((forecastResult, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell sx={{ userSelect: 'none' }} component="th" scope="row">
									{index + 1}
								</TableCell>
								<TableCell component="th" scope="row">
									<ForecastAccidentResult isAccident={forecastResult.predicted_class === 1} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledCell>
	)
}

export default CellForecastHistory
