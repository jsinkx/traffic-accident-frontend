import React from 'react'
import { useTranslation } from 'react-i18next'
import { BarLoader } from 'react-spinners'

import Colors from '../../shared/colors'

import MainLayout from '../../layouts/MainLayout'

import AppleRedCarEmoji from '../../assets/images/apple-red-car.png'
import AppleSleepFaceEmoji from '../../assets/images/apple-sleep-face.png'

import StyledLoadingPage, { StyledIcon } from './styles'

const LoadingPage: React.FC = () => {
	const { t } = useTranslation(['header'])

	return (
		<MainLayout title={t('title')}>
			<StyledLoadingPage>
				<header>
					<h1> {t('title')} </h1>
					<StyledIcon src={AppleRedCarEmoji} alt="🚘" />
					<StyledIcon src={AppleSleepFaceEmoji} alt="😪" />
				</header>
				<main>
					<BarLoader color={Colors.BLUE} height={5} speedMultiplier={1} width={200} />
				</main>
			</StyledLoadingPage>
		</MainLayout>
	)
}

export default LoadingPage
