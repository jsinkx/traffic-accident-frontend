import React from 'react'
import { BarLoader } from 'react-spinners'

import Colors from '../../shared/colors'

import AppleRedCarEmoji from '../../assets/images/apple-red-car.png'
import AppleSleepFaceEmoji from '../../assets/images/apple-sleep-face.png'

import StyledLoadingPage, { StyledIcon } from './styles'

const LoadingPage: React.FC = () => {
	return (
		<StyledLoadingPage>
			<header>
				<h1> Прогнозирование ДТП </h1>
				<StyledIcon src={AppleRedCarEmoji} alt="🚘" />
				<StyledIcon src={AppleSleepFaceEmoji} alt="😪" />
			</header>
			<main>
				<BarLoader color={Colors.BLUE} height={5} speedMultiplier={1} width={200} />
			</main>
		</StyledLoadingPage>
	)
}

export default LoadingPage
