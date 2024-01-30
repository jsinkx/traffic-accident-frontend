/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { ForecastResponse } from '../../../services/forecast/types'

import ForecastParamsContext from '../../../context/ForecastParamsContext'
import ForecastResultsContext from '../../../context/ForecastResultsContext'

import useCreateForecast from '../../../hooks/useCreateForecast'
import useGetModels from '../../../hooks/useGetModels'
import useLocalStorage from '../../../hooks/useLocalStorage'

import ForecastParamsActions from '../../../reducers/forecast/forecast-params/actions'
import ForecastResultsActions from '../../../reducers/forecast/forecast-results/actions'
import { StyledCell } from '../styles'

const CellCreateForecast: React.FC = () => {
	const { t, i18n } = useTranslation(['homePage'])

	const { params, setParams } = React.useContext(ForecastParamsContext)
	const {
		results: { forecasts },
		setResults,
	} = React.useContext(ForecastResultsContext)

	const { models } = useGetModels()

	const model_id = params.model_id

	const {
		createForecast,
		newForecast,
		isLoading: isLoadingCreateForecast,
		error: errorCreateForecast,
	} = useCreateForecast()
	const { setItem: setForecasts } = useLocalStorage<ForecastResponse[]>('forecasts', []) // Массив результатов всех прогнозов

	const handleSelectModel = (event: SelectChangeEvent) => {
		setParams({
			type: ForecastParamsActions.SET_MODEL_ID,
			payload: Number(event.target.value),
		})
	}

	const handleCreateForecast = async () => {
		await createForecast(params)
	}

	const handleClearForecastsHistory = () => {
		setForecasts([])
		setResults({ type: ForecastResultsActions.SET_CLEAR_FORECASTS_HISTORY })
	}

	React.useEffect(() => {
		if (newForecast) {
			setResults({
				type: ForecastResultsActions.SET_FORECASTS,
				payload: newForecast,
			}) // Обновить стейт

			setForecasts((p) => [...p, newForecast]) // Обновить ls
		}
		if (errorCreateForecast.isDisplay)
			setResults({ type: ForecastResultsActions.SET_FORECASTS_RESULT_ERROR, payload: errorCreateForecast })
	}, [errorCreateForecast, newForecast, setForecasts, setResults])

	return (
		<StyledCell className="cell--create_forecast" width="290px">
			<FormControl
				sx={{
					width: '250px',
					marginTop: '10px',
				}}
			>
				<InputLabel id="model-select-small-label">{t('cells.createForecast.model.label')}</InputLabel>
				<Select
					labelId="model-select-small-label"
					id="model-select-small"
					value={String(model_id)}
					label={t('cells.createForecast.model.label')}
					onChange={handleSelectModel}
				>
					{models.length === 0 && (
						<MenuItem value={0} disabled>
							{t('cells.createForecast.noAvailableModels')}
						</MenuItem>
					)}
					{models.map((model) => (
						<MenuItem key={model.id} value={model.id}>
							{i18n.language === 'ru' ? model.ru_name : model.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button
				variant="outlined"
				color="success"
				onClick={handleCreateForecast}
				disabled={isLoadingCreateForecast}
				aria-label={t('cells.createForecast.createForecast')}
				sx={{
					width: '250px',
					marginTop: '10px',
				}}
			>
				{t('cells.createForecast.createForecast')}
			</Button>
			<Button
				sx={{
					width: '250px',
					marginTop: '10px',
				}}
				variant="outlined"
				color="error"
				onClick={handleClearForecastsHistory}
				disabled={forecasts.length === 0}
				aria-label={t('cells.createForecast.clearHistory')}
			>
				{t('cells.createForecast.clearHistory')}
			</Button>
		</StyledCell>
	)
}

export default CellCreateForecast
