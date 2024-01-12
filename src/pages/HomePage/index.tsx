/* eslint-disable no-alert */

/* eslint-disable react/no-array-index-key */
import React from 'react'
import { MoonLoader } from 'react-spinners'

import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker/TimePicker'

import { AxiosError } from 'axios'
import moment from 'moment'

import Colors from '../../shared/colors'

import Header from '../../components/Header'

import AppleBoomEmoji from '../../assets/images/apple-boom.png'
import AppleLikeEmoji from '../../assets/images/apple-like.png'
import createForecast, { ForecastBody, ForecastError, ForecastResponse } from '../../services/createForecast'
import getModels, { Model } from '../../services/getModels'

import Piechart from './Piechart'
import StyledHomePage, { StyledCell, StyledIcon } from './styles'

const seasons = ['Зима', 'Весна', 'Лето', 'Осень']

const forecastAccidentResult: { [key: number]: React.ReactNode } = {
	0: (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleLikeEmoji} alt="👍" /> ДТП не будет
		</span>
	),
	1: (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleBoomEmoji} alt="💥" /> ДТП будет
		</span>
	),
}

const HomePage: React.FC = () => {
	const isMounted = React.useRef(false)

	const [models, setModels] = React.useState<Model[]>([])
	const [currentModelId, setCurrentModelId] = React.useState<number>(0)

	const [temperature, setTemperature] = React.useState(1.9)
	const [atmosphericPressure, setAtmosphericPressure] = React.useState(752.4)
	const [humidity, setHumidity] = React.useState(96)
	const [windSpeed, setWindSpeed] = React.useState(2)
	const [cloudiness, setCloudiness] = React.useState(1.0)

	const [season, setSeason] = React.useState(seasons[0]!)
	const [time, setTime] = React.useState(moment())

	const [data, setData] = React.useState<ForecastResponse[]>([]) // Массив результатов всех прогнозов
	const [isLoading, setIsLoading] = React.useState(true) // Флаг загрузки последнего запроса

	const lastForecast = data[data.length - 1]

	// Флаг загрузки из кеша (localStorage). Нужен, чтобы не отображать некоторые ячейки, при получении данных из кеша
	const [isLoadedFromCache, setIsLoadedFromCache] = React.useState(true)

	const handleChangeSeason = (_: React.MouseEvent<HTMLElement>, newSeason: string) => {
		newSeason && setSeason(newSeason)
	}

	const handleGetModels = async () => {
		try {
			const fetchedModels = await getModels()

			setModels(fetchedModels)
		} catch (err) {
			alert('Произошла неизвестная ошибка!')
		}
	}

	const handleSelectModel = (event: SelectChangeEvent) => {
		setCurrentModelId(Number(event.target.value))
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

		setIsLoading(true)

		try {
			const newData = await createForecast(params)
			setData((p) => [...p, newData])
		} catch (error) {
			const errorMessage = (error as unknown as AxiosError<ForecastError>)?.response?.data.message!
			alert(`Произошла ошибка при создании прогноза: ${errorMessage}`)
		}

		setIsLoadedFromCache(false)
		setIsLoading(false)
	}

	const handleClearForecastsHistory = () => {
		setData([])
	}

	// Выгрузка прогнозов из localStorage
	React.useEffect(() => {
		isMounted.current = true

		try {
			const forecastsHistory = JSON.parse(
				window.localStorage.getItem('forecasts') || '',
			) as unknown as ForecastResponse[]

			setData(forecastsHistory)
		} catch {
			setData([])
		}

		handleGetModels()
	}, [])

	// Загрузка прогнозов в localStorage
	React.useEffect(() => {
		isMounted.current && window.localStorage.setItem('forecasts', JSON.stringify(data))
	}, [data])

	return (
		<StyledHomePage $isAccident={data.length > 0 ? lastForecast?.predicted_class! : -1}>
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
									views={['hours']}
									label={
										<>
											Время (<code>час</code>)
										</>
									}
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
						<StyledCell className="cell--create_forecast" width="290px">
							<FormControl
								sx={{
									width: '250px',
									marginTop: '10px',
								}}
							>
								<InputLabel id="model-select-small-label">Модель</InputLabel>
								<Select
									labelId="model-select-small-label"
									id="model-select-small"
									value={String(currentModelId)}
									label="Модель"
									onChange={handleSelectModel}
								>
									{models.length === 0 && (
										<MenuItem value={0} disabled>
											Нет доступных моделей
										</MenuItem>
									)}
									{models.map((model) => (
										<MenuItem key={model.id} value={model.id}>
											{model.ru_name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<Button
								variant="outlined"
								color="success"
								onClick={handleCreateForecast}
								sx={{
									width: '250px',
									marginTop: '10px',
								}}
							>
								Составить прогноз
							</Button>
							<Button
								sx={{
									width: '250px',
									marginTop: '10px',
								}}
								variant="outlined"
								color="error"
								onClick={handleClearForecastsHistory}
								disabled={data.length === 0}
							>
								Очистить историю
							</Button>
						</StyledCell>
						{data.length > 0 && !isLoadedFromCache && (
							<StyledCell className="cell--forecast__result" width="330px" isLoading={isLoading}>
								{isLoading ? (
									<MoonLoader
										color={Colors.BLUE}
										speedMultiplier={0.9}
										size={100}
										cssOverride={{
											marginTop: '30px',
										}}
									/>
								) : (
									<>
										<h2> Результат прогноза </h2>
										<span className="forecast_result">{forecastAccidentResult[lastForecast!.predicted_class]}</span>
										<span className="forecast_probabilities">
											<code>
												{(lastForecast!.predicted_probabilities[lastForecast!.predicted_class]! * 100).toFixed(3)}%
											</code>
										</span>
									</>
								)}
							</StyledCell>
						)}
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
						{data.length > 0 && (
							<StyledCell className="cell--forecast__history" width="330px" height="450px">
								<h2>История прогнозов</h2>
								<TableContainer>
									<Table>
										<TableHead sx={{ userSelect: 'none' }}>
											<TableRow>
												<TableCell> Номер прогноза </TableCell>
												<TableCell> Результат </TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{data.map((forecastResult, index) => (
												<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
													<TableCell sx={{ userSelect: 'none' }} component="th" scope="row">
														{index + 1}
													</TableCell>
													<TableCell component="th" scope="row">
														{forecastAccidentResult[forecastResult.predicted_class]}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</StyledCell>
						)}
						{data.length > 0 && !isLoadedFromCache && (
							<StyledCell className="cell--probabilities" width="330px" height="450px" isLoading={isLoading}>
								<h2> Вероятности случая</h2>
								<Piechart probabilities={lastForecast?.predicted_probabilities!} />
							</StyledCell>
						)}
					</div>
				</div>
			</main>
		</StyledHomePage>
	)
}

export default HomePage
