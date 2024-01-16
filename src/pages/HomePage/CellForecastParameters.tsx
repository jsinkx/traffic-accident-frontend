import React from 'react'

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
	return (
		<StyledCell className="cell--forecast_parameters" width="330px" height="450px">
			<h2> Параметры погоды </h2>
			<TextField
				sx={{
					width: '80%',
					marginBlock: '8px',
				}}
				label={
					<>
						Температура (<code>°C</code>)
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
						Атмосферное давление (<code>мм рт.ст.</code>)
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
						Влажность (<code>%</code>)
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
						Скорость ветра (<code>м/с</code>)
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
						Облачность (<code>октан</code>)
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
