export type ForecastBody = {
	model_id: number
	options: {
		temperature: number
		atmospheric_pressure: number
		humidity: number
		wind_speed: number
		cloudiness: number
		hour: number
		season_autumn: number
		season_spring: number
		season_summer: number
		season_winter: number
	}
}

export type ForecastError = {
	message: string
	success: false
}

export type ForecastResponse = {
	model_name: string
	model_ru_name: string
	predicted_class: number
	predicted_probabilities: [number, number]
	success: true
}
