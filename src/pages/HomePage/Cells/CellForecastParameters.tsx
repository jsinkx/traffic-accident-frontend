import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import ForecastParamsContext from '@context/ForecastParamsContext'

import { TextField } from '@mui/material'

import ForecastParamsActions from '@reducers/forecast/forecast-params/actions'

import { StyledCell } from '../styles'

const CellForecastParameters: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	const { params, setParams } = useContext(ForecastParamsContext)

	const { temperature, atmospheric_pressure, humidity, wind_speed, cloudiness } = params.options

	return (
		<StyledCell className="cell--forecast_parameters" width="330px" height="450px">
			<h2> {t('cells.forecastParameters.title')} </h2>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						{t('cells.forecastParameters.temperature.text')} (
						<code>{t('cells.forecastParameters.temperature.label')}</code>)
					</>
				}
				type="number"
				value={temperature}
				onChange={({ target }) =>
					setParams({
						type: ForecastParamsActions.SET_TEMPERATURE,
						payload: Number(target.value),
					})
				}
			/>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						{t('cells.forecastParameters.atmosphericPressure.text')} (
						<code>{t('cells.forecastParameters.atmosphericPressure.label')}</code>)
					</>
				}
				type="number"
				value={atmospheric_pressure}
				onChange={({ target }) =>
					setParams({
						type: ForecastParamsActions.SET_ATMOSPHERIC_PRESSURE,
						payload: Number(target.value),
					})
				}
			/>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						{t('cells.forecastParameters.humidity.text')} (
						<code>{t('cells.forecastParameters.humidity.label')}</code>)
					</>
				}
				type="number"
				value={humidity}
				onChange={({ target }) =>
					setParams({
						type: ForecastParamsActions.SET_HUMIDITY,
						payload: Number(target.value),
					})
				}
			/>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						{t('cells.forecastParameters.windSpeed.text')} (
						<code>{t('cells.forecastParameters.windSpeed.label')}</code>)
					</>
				}
				type="number"
				value={wind_speed}
				onChange={({ target }) =>
					setParams({
						type: ForecastParamsActions.SET_WIND_SPEED,
						payload: Number(target.value),
					})
				}
			/>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						{t('cells.forecastParameters.cloudiness.text')} (
						<code>{t('cells.forecastParameters.cloudiness.label')}</code>)
					</>
				}
				type="number"
				value={cloudiness}
				onChange={({ target }) =>
					setParams({
						type: ForecastParamsActions.SET_CLOUDINESS,
						payload: Number(target.value),
					})
				}
			/>
		</StyledCell>
	)
}

export default CellForecastParameters
