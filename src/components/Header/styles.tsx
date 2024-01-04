import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Colors from '../../shared/colors'

import Icon from '../Icon/Icon'

export const StyledLink = styled(Link)`
	color: ${Colors.BLACK};
	text-decoration: none;

	&:hover {
		color: ${Colors.BLACK};
	}
`
export const StyledIcon = styled(Icon)`
	margin-inline: 6px;
`

const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: 100px;
	user-select: none;

	h1 {
		margin-right: 10px;
	}

	code {
		margin-top: 22px;
		color: ${Colors.GREY};
	}
`

export default StyledHeader
