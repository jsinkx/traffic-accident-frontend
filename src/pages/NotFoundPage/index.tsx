import React from 'react'
import { useTranslation } from 'react-i18next'

import Paths from '@shared/paths'

import MainLayout from '@layouts/MainLayout'

import Header from '@components/Header'
import Icon from '@components/Icon/Icon'

import AppleGhostEmoji from '@assets/images/apple-ghost.webp'
import AppleNoEntryEmoji from '@assets/images/apple-no-entry.webp'
import AppleNoPedestriansEmoji from '@assets/images/apple-no-pedestrians.webp'

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
	const { t } = useTranslation(['notFoundPage'])

	const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]!

	return (
		<MainLayout title={t('title')}>
			<StyledNotFoundPage>
				<Header />
				<main>
					<h2>
						{t('title')},<StyledLink to={Paths.home}>{t('backToHomePage')}</StyledLink>
						<Icon size="40px" src={randomEmoji.emoji} alt={randomEmoji.name} />
					</h2>
				</main>
			</StyledNotFoundPage>
		</MainLayout>
	)
}

export default NotFoundPage
