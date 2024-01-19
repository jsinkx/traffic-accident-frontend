import React from 'react'
import { useTranslation } from 'react-i18next'

import { TextField } from '@mui/material'

import { StyledCell } from './styles'

type CellForecastParametersProps = {
	temperature: number
	setTemperature: React.Dispatch<React.SetStateAction<number>>
	atmosphericPressure: number
	setAtmosphericPressure: React.Dispatch<React.SetStateAction<number>>
	humidity: number
	setHumidity: React.Dispatch<React.SetStateAction<number>>
	windSpeed: number
	setWindSpeed: React.Dispatch<React.SetStateAction<number>>
	cloudiness: number
	setCloudiness: React.Dispatch<React.SetStateAction<number>>
}

const CellForecastParameters: React.FC<CellForecastParametersProps> = ({
	temperature,
	setTemperature,
	atmosphericPressure,
	setAtmosphericPressure,
	humidity,
	setHumidity,
	windSpeed,
	setWindSpeed,
	cloudiness,
	setCloudiness,
}) => {
	const { t } = useTranslation(['homePage'])

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
				onChange={({ target }) => setTemperature(Number(target.value))}
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
				value={atmosphericPressure}
				onChange={({ target }) => setAtmosphericPressure(Number(target.value))}
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
				onChange={({ target }) => setHumidity(Number(target.value))}
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
				value={windSpeed}
				onChange={({ target }) => setWindSpeed(Number(target.value))}
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
				onChange={({ target }) => setCloudiness(Number(target.value))}
			/>
		</StyledCell>
	)
}

export default CellForecastParameters
