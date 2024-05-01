import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Icon from '@components/Icon/Icon'

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.font};
	text-decoration: none;

	&:hover {
		color: ${({ theme }) => theme.font};
	}
`
export const StyledIcon = styled(Icon)`
	margin-left: 10px;

	@media (max-width: 925px) {
		width: 20px;
		height: 20px;
	}
`

const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 100px;
	user-select: none;
	background-color: ${({ theme }) => theme.elementBackground};
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);

	h1 {
		display: inline-block;
		margin-right: 10px;
	}

	code {
		margin-top: 22px;
		margin-left: 6px;
		color: ${({ theme }) => theme.inactiveFont};
	}

	.header__left {
		display: flex;
		align-items: center;
		width: 100%;

		h1 {
			@media (max-width: 925px) {
				font-size: 1em;
			}

			@media (max-width: 583px) {
				font-size: 0.75em;
			}

			@media (max-width: 495px) {
				font-size: 0.8em;
			}
		}

		.header__emojis {
			display: flex;

			@media (max-width: 400px) {
				display: none;
			}
		}
	}

	.header__right {
		display: flex;
		justify-content: right;
		width: 30%;
		margin-right: 60px;
		box-sizing: border-box;
	}

	@media (max-width: 925px) {
		h1 {
			font-size: 0.9em;
		}

		code {
			margin-top: 10px;
			font-size: 0.8em;
		}
	}

	@media (max-width: 490px) {
		code {
			display: none;
		}
	}
`

export default StyledHeader
