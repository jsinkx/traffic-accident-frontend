import React from 'react'
import { useTranslation } from 'react-i18next'

import MainLayout from '../../layouts/MainLayout'

import Header from '../../components/Header'

import CellCreateForecast from './Cells/CellCreateForecast'
import CellForecastHistory from './Cells/CellForecastHistory'
import CellForecastParameters from './Cells/CellForecastParameters'
import CellForecastResult from './Cells/CellForecastResult'
import CellPlace from './Cells/CellPlace'
import CellProbabilities from './Cells/CellProbabilities'
import CellTimeParameters from './Cells/CellTimeParameters'

import Errors from './Errors'
import Providers from './Providers'
import StyledHomePage from './styles'

const HomePage: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	return (
		<MainLayout title={t('title')} description={t('description')}>
			<StyledHomePage>
				<Header />
				<main>
					<Providers>
						<Errors />
						<div className="cage">
							<div className="cage__row">
								<CellTimeParameters />
								<CellPlace />
								<CellCreateForecast />
								<CellForecastResult />
							</div>
							<div className="cage__row">
								<CellForecastParameters />
								<CellForecastHistory />
								<CellProbabilities />
							</div>
						</div>
					</Providers>
				</main>
			</StyledHomePage>
		</MainLayout>
	)
}

export default HomePage
