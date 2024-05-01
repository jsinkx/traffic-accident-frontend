import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Colors from '@shared/colors'

export const StyledLink = styled(Link)`
	margin-inline: 7px;
	color: ${Colors.BLUE};
	transition: 0.5s all ease;

	&:hover,
	&:active,
	&:focus {
		color: ${Colors.HOVER_BLUE};
	}
`

const StyledNotFoundPage = styled.div`
	main {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		margin-top: 15vh;
		user-select: none;

		h2 {
			display: flex;
			text-align: center;
			align-items: center;
			font-size: 3em;
			border-bottom: 1px solid ${Colors.BLUE};
		}
	}
`

export default StyledNotFoundPage
