import React from 'react'

import { Alert, SelectChangeEvent } from '@mui/material'

import moment from 'moment'

import useCreateForecast from '../../hooks/useCreateForecast'
import useGetModels from '../../hooks/useGetModels'
import useLocalStorage from '../../hooks/useLocalStorage'

import Header from '../../components/Header'

import { ForecastBody, ForecastResponse } from '../../services/createForecast'

import CellCreateForecast from './CellCreateForecast'
import CellForecastHistory from './CellForecastHistory'
import CellForecastParameters from './CellForecastParameters'
import CellForecastResult from './CellForecastResult'
import CellPlace from './CellPlace'
import CellProbabilities from './CellProbabilities'
import CellTimeParameters from './CellTimeParameters'
import StyledHomePage from './styles'

const seasons = ['Зима', 'Весна', 'Лето', 'Осень']

const HomePage: React.FC = () => {
	const { models, error: errorModels } = useGetModels()
	const [currentModelId, setCurrentModelId] = React.useState<number>(0)

	const {
		createForecast,
		newForecast,
		isLoading: isLoadingCreateForecast,
		error: errorCreateForecast,
	} = useCreateForecast()

	const [temperature, setTemperature] = React.useState(1.9)
	const [atmosphericPressure, setAtmosphericPressure] = React.useState(752.4)
	const [humidity, setHumidity] = React.useState(96)
	const [windSpeed, setWindSpeed] = React.useState(2)
	const [cloudiness, setCloudiness] = React.useState(1.0)

	const [season, setSeason] = React.useState(seasons[0]!)
	const [time, setTime] = React.useState(moment())

	const { item: forecasts, setItem: setForecasts } = useLocalStorage<ForecastResponse[]>('forecasts', []) // Массив результатов всех прогнозов

	const lastForecast = forecasts[forecasts.length - 1]

	// Флаг загрузки из кеша (localStorage). Нужен, чтобы не отображать некоторые ячейки, при получении данных из кеша
	const [isLoadedFromCache, setIsLoadedFromCache] = React.useState(true)

	const handleSelectModel = (event: SelectChangeEvent) => {
		setCurrentModelId(Number(event.target.value))
	}

	const handleClearForecastsHistory = () => {
		setForecasts([])
	}

	const handleCreateForecast = async () => {
		const params: ForecastBody = {
			model_id: currentModelId,
			options: [
				{
					temperature,
					atmospheric_pressure: atmosphericPressure,
					humidity,
					wind_speed: windSpeed,
					cloudiness,
					hour: time.hour(),
					season_autumn: Number(season === 'Осень'),
					season_spring: Number(season === 'Весна'),
					season_summer: Number(season === 'Лето'),
					season_winter: Number(season === 'Зима'),
				},
			],
		}

		await createForecast(params)

		// Ошибки нет, первое отображение прогноза не из кеша будет
		if (!errorCreateForecast.isDisplay) setIsLoadedFromCache(false)
	}

	React.useEffect(() => {
		newForecast && setForecasts((p) => [...p, newForecast])
	}, [newForecast, setForecasts])

	return (
		<StyledHomePage $isAccident={forecasts.length > 0 ? lastForecast?.predicted_class! : -1}>
			<Header />
			<main>
				{/* Ошибки */}
				{errorModels.isDisplay && (
					<Alert variant="outlined" severity="error" sx={{ width: '70%' }}>
						{errorModels.message}
					</Alert>
				)}
				{errorCreateForecast.isDisplay && (
					<Alert variant="outlined" severity="error" sx={{ marginTop: '15px', width: '70%' }}>
						{errorCreateForecast.message}
					</Alert>
				)}
				{/* Основная страница */}
				<div className="cage">
					<div className="cage__row">
						<CellTimeParameters
							seasons={seasons}
							season={season}
							time={time}
							setTime={setTime}
							setSeason={setSeason}
						/>
						<CellPlace />
						<CellCreateForecast
							forecasts={forecasts}
							models={models}
							currentModelId={String(currentModelId)}
							handleSelectModel={handleSelectModel}
							handleCreateForecast={handleCreateForecast}
							handleClearForecastsHistory={handleClearForecastsHistory}
						/>
						{forecasts.length > 0 && !isLoadedFromCache && (
							<CellForecastResult isLoading={isLoadingCreateForecast} lastForecast={lastForecast!} />
						)}
					</div>
					<div className="cage__row">
						<CellForecastParameters
							temperature={temperature}
							setTemperature={setTemperature}
							atmosphericPressure={atmosphericPressure}
							setAtmosphericPressure={setAtmosphericPressure}
							humidity={humidity}
							setHumidity={setHumidity}
							windSpeed={windSpeed}
							setWindSpeed={setWindSpeed}
							cloudiness={cloudiness}
							setCloudiness={setCloudiness}
						/>
						{forecasts.length > 0 && <CellForecastHistory forecasts={forecasts} />}
						{forecasts.length > 0 && !isLoadedFromCache && (
							<CellProbabilities
								isLoading={isLoadingCreateForecast}
								probabilities={lastForecast!.predicted_probabilities}
							/>
						)}
					</div>
				</div>
			</main>
		</StyledHomePage>
	)
}

export default HomePage
