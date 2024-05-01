import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'

import ForecastResultsContext from '@context/ForecastResultsContext'

import { Box } from '@mui/material'

import ForecastAccidentResult from '../ForecastAccidentResult'
import { StyledCell } from '../styles'

type RowProps = ListChildComponentProps

const Row: React.FC<RowProps> = ({ index, style, data: { forecasts } }) => (
	<Box style={style} className="cell--forecast__history--row__item">
		<span className="span--left">{index + 1}</span>
		<span className="span--right">
			<ForecastAccidentResult isAccident={forecasts[index]!.predicted_class === 1} />
		</span>
	</Box>
)

const CellForecastHistory: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	const {
		results: { forecasts },
	} = useContext(ForecastResultsContext)

	return forecasts.length ? (
		<StyledCell className="cell--forecast__history" width="330px" height="450px">
			<h2> {t('cells.forecastHistory.title')}</h2>
			<Box className="cell--forecast__history--row">
				<span className="span--left">{t('cells.forecastHistory.forecastNumber')}</span>
				<span className="span--right">{t('cells.forecastHistory.forecastResult')}</span>
			</Box>
			<List height={450} width={330} itemCount={forecasts.length} itemSize={60}>
				{({ index, style }) => <Row index={index} style={style} data={{ forecasts }} />}
			</List>
		</StyledCell>
	) : null
}

export default CellForecastHistory
