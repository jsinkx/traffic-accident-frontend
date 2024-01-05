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
	margin-left: 10px;
`

const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 100px;
	user-select: none;
	background-color: ${Colors.WHITE};
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);

	h1 {
		margin-right: 10px;
	}

	code {
		margin-top: 22px;
		margin-left: 6px;
		color: ${Colors.GREY};
	}
`

export default StyledHeader
