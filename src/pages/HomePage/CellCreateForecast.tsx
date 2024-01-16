import React from 'react'

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { ForecastResponse } from '../../services/createForecast'
import { Model } from '../../services/getModels'

import { StyledCell } from './styles'

type CellCreateForecastProps = {
	forecasts: ForecastResponse[]
	models: Model[]
	currentModelId: string
	handleSelectModel: (event: SelectChangeEvent) => void
	handleCreateForecast: () => Promise<void>
	handleClearForecastsHistory: () => void
}

const CellCreateForecast: React.FC<CellCreateForecastProps> = ({
	forecasts,
	models,
	currentModelId,
	handleSelectModel,
	handleCreateForecast,
	handleClearForecastsHistory,
}) => {
	return (
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
					value={currentModelId}
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
				disabled={forecasts.length === 0}
			>
				Очистить историю
			</Button>
		</StyledCell>
	)
}

export default CellCreateForecast
