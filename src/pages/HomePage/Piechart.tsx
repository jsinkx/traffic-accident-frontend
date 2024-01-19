import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useTheme } from 'styled-components'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
		title: {
			display: true,
		},
	},
}

type PiechartProps = {
	probabilities: [number, number]
}

const Piechart: React.FC<PiechartProps> = ({ probabilities }) => {
	const theme = useTheme()

	const { t } = useTranslation(['homePage'])

	const data = {
		labels: [t('noAccident'), t('accidentWillBe')],
		datasets: [
			{
				data: probabilities.map((p) => p * 100),
				label: t('cells.probabilities.percentage'),
				backgroundColor: [theme.successColor, theme.errorColor],
				borderColor: [theme.elementBackground, theme.elementBackground],
				hoverBorderColor: [theme.elementBackground, theme.elementBackground],
				hoverOffset: 7,
			},
		],
	}

	return <Pie data={data} options={options} />
}

export default Piechart
