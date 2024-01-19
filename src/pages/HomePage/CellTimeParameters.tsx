import React from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/AdapterMoment'

import moment from 'moment'

import 'moment/locale/ru'

import { StyledCell } from './styles'

type Season = {
	name: string
	value: string
}

type CellTimeParametersProps = {
	seasons: Season[]
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
	const { t, i18n } = useTranslation(['homePage'])

	const handleChangeSeason = (_: React.MouseEvent<HTMLElement>, newSeason: string) => {
		newSeason && setSeason(newSeason)
	}

	return (
		<StyledCell className="cell--time_parameters" width="330px">
			<h2> {t('cells.timeParameters.title')} </h2>
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
				{seasons.map(({ value, name }) => (
					<ToggleButton key={value} value={value} size={i18n.language === 'ru' ? 'medium' : 'small'}>
						{name}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
			<LocalizationProvider adapterLocale={i18n.language === 'ru' ? 'ru' : 'en'} dateAdapter={AdapterMoment}>
				<TimePicker
					sx={{
						width: '275px',
						margin: '15px auto',
					}}
					views={['hours']}
					label={
						<>
							{t('cells.timeParameters.hour.text')} (<code>{t('cells.timeParameters.hour.label')}</code>)
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
