import React from 'react'

import { Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker/TimePicker'

import moment from 'moment'

import Header from '../../components/Header'

import StyledHomePage, { StyledCell } from './styles'

const seasons = ['Зима', 'Весна', 'Лето', 'Осень']

const HomePage: React.FC = () => {
	const [temperature, setTemperature] = React.useState(1.9)
	const [atmosphericPressure, setAtmosphericPressure] = React.useState(752.4)
	const [humidity, setHumidity] = React.useState(96)
	const [windSpeed, setWindSpeed] = React.useState(2)
	const [cloudiness, setCloudiness] = React.useState(1.0)

	const [season, setSeason] = React.useState(seasons[0]!)
	const [time, setTime] = React.useState(moment())

	const handleChangeSeason = (_: React.MouseEvent<HTMLElement>, newSeason: string) => {
		newSeason && setSeason(newSeason)
	}

	const handleCreateForecast = () => {
		console.log('create forecast')
	}

	return (
		<StyledHomePage>
			<Header />
			<main>
				<div className="cage">
					<div className="cage__row">
						<StyledCell className="cell--time_parameters" width="330px">
							<h2> Параметры времени </h2>
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
								{seasons.map((seasonItem) => (
									<ToggleButton key={seasonItem} value={seasonItem}>
										{seasonItem}
									</ToggleButton>
								))}
							</ToggleButtonGroup>
							<LocalizationProvider adapterLocale="ru" dateAdapter={AdapterMoment}>
								<TimePicker
									sx={{
										width: '275px',
										margin: '15px auto',
									}}
									label="Время"
									value={time}
									ampm={false}
									onChange={(v) => v && setTime(v)}
								/>
							</LocalizationProvider>
						</StyledCell>
						<StyledCell className="cell--place">
							<ul>
								<li>
									<b> Город: </b>
									Москва
								</li>
								<li>
									<b> Регион: </b>
									Север
								</li>
							</ul>
						</StyledCell>
						<StyledCell className="cell--create_forecast">
							<Button variant="outlined" color="success" onClick={handleCreateForecast}>
								Составить прогноз
							</Button>
						</StyledCell>
					</div>
					<div className="cage__row">
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
								label="Влажность"
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
								label="Туманность"
								type="number"
								value={cloudiness}
								onChange={({ target }) => setCloudiness(Number(target.value))}
							/>
						</StyledCell>
						<StyledCell className="cell--forecast__result" width="330px" height="450px">
							<h2> Результат прогноза </h2>
						</StyledCell>
					</div>
				</div>
			</main>
		</StyledHomePage>
	)
}

export default HomePage
