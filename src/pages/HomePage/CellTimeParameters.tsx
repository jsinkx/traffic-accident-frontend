import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/AdapterMoment'

import moment from 'moment'

import { StyledCell } from './styles'

type CellTimeParametersProps = {
	seasons: string[]
	season: string
	setSeason: React.Dispatch<React.SetStateAction<string>>
	time: moment.Moment
	setTime: React.Dispatch<React.SetStateAction<moment.Moment>>
}

const CellTimeParameters: React.FC<CellTimeParametersProps> = ({
	seasons,
	season,
	time,
	setTime,
	setSeason,
}) => {
	const handleChangeSeason = (_: React.MouseEvent<HTMLElement>, newSeason: string) => {
		newSeason && setSeason(newSeason)
	}

	return (
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
	)
}

export default CellTimeParameters
