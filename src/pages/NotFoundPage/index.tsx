import React from 'react'

import Paths from '../../shared/paths'

import Header from '../../components/Header'
import Icon from '../../components/Icon/Icon'

import AppleGhostEmoji from '../../assets/images/apple-ghost.png'
import AppleNoEntryEmoji from '../../assets/images/apple-no-entry.png'
import AppleNoPedestriansEmoji from '../../assets/images/apple-no-pedestrians.png'

import StyledNotFoundPage, { StyledLink } from './styles'

const emojis = [
	{
		name: '👻',
		emoji: AppleGhostEmoji,
	},
	{
		name: '⛔️',
		emoji: AppleNoEntryEmoji,
	},
	{
		name: '🚷',
		emoji: AppleNoPedestriansEmoji,
	},
]

const NotFoundPage: React.FC = () => {
	const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]!

	return (
		<StyledNotFoundPage>
			<Header />
			<main>
				<h2>
					Страница не найдена, <StyledLink to={Paths.home}> на главную </StyledLink>
					<Icon size="40px" src={randomEmoji.emoji} alt={randomEmoji.name} />
				</h2>
			</main>
		</StyledNotFoundPage>
	)
}

export default NotFoundPage
