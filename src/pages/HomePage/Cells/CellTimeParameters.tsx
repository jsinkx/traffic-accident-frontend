import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/AdapterMoment'

import moment from 'moment'

import ForecastParamsContext from '../../../context/ForecastParamsContext'

import ForecastParamsActions from '../../../reducers/forecast/forecast-params/actions'
import { StyledCell } from '../styles'
import 'moment/locale/ru'

const CellTimeParameters: React.FC = () => {
	const { t, i18n } = useTranslation(['homePage'])

	const {
		params: { options },
		setParams,
	} = useContext(ForecastParamsContext)

	const seasons = [
		{
			name: t('cells.timeParameters.seasons.winter'),
			value: 'winter',
		},
		{
			name: t('cells.timeParameters.seasons.spring'),
			value: 'spring',
		},
		{
			name: t('cells.timeParameters.seasons.summer'),
			value: 'summer',
		},
		{
			name: t('cells.timeParameters.seasons.autumn'),
			value: 'autumn',
		},
	]

	// В состоянии редьюсера сезоны хранятся по каждому с флагом, а не конкретно его название, поэтому создаем локальный стейт
	const [season, setSeason] = useState(seasons[0]!.value)

	const handleChangeSeason: (event: React.MouseEvent<HTMLElement>, newSeason: string) => void = (
		_: React.MouseEvent<HTMLElement>,
		newSeason: string,
	) => {
		if (newSeason) {
			setSeason(newSeason)
			setParams({ type: ForecastParamsActions.SET_SEASON, payload: newSeason })
		}
	}

	return (
		<StyledCell className="cell--time_parameters" width="330px">
			<h2> {t('cells.timeParameters.title')} </h2>
			<ToggleButtonGroup
				color="primary"
				value={season}
				exclusive
				onChange={handleChangeSeason}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '270px',
					margin: '0 auto',
				}}
			>
				{seasons.map(({ value, name }) => (
					<ToggleButton key={value} value={value} size={i18n.language === 'ru' ? 'medium' : 'small'}>
						{name}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
			<LocalizationProvider adapterLocale={i18n.language === 'ru' ? 'ru' : 'en'} dateAdapter={AdapterMoment}>
				<TimePicker
					sx={{
						width: '275px',
						margin: '15px auto',
					}}
					views={['hours']}
					label={
						<>
							{t('cells.timeParameters.hour.text')} (<code>{t('cells.timeParameters.hour.label')}</code>)
						</>
					}
					value={moment().set({ hour: options.hour })}
					ampm={false}
					onChange={(v) => v && setParams({ type: ForecastParamsActions.SET_HOUR, payload: v.hour() })}
				/>
			</LocalizationProvider>
		</StyledCell>
	)
}

export default CellTimeParameters
