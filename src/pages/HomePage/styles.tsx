import styled from 'styled-components'

import Cell from '@components/Cell'
import Icon from '@components/Icon/Icon'

type StyledCellProps = {
	$isAccident?: number
}

export const StyledCell = styled(Cell)<StyledCellProps>`
	margin-top: 18px;
	margin-right: 20px;

	${({ $isAccident, theme }) =>
		$isAccident !== undefined &&
		`
	border: 1px solid ${$isAccident >= 0 ? ($isAccident === 0 ? theme.successColor : theme.errorColor) : 'none'};

	::selection {
		background-color: ${$isAccident === 0 ? theme.successColor : theme.errorColor};
	}
	`}
`

export const StyledIcon = styled(Icon)`
	margin-right: 6px;
`

const StyledHomePage = styled.div`
	background-color: ${({ theme }) => theme.background};

	h2,
	b {
		user-select: none;
		font-weight: 500;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-left: 100px;
		margin-top: 30px;
		padding-bottom: 25px;

		.forecast__result--text {
			display: flex;
			align-items: center;
		}

		.cage {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			flex-wrap: wrap;
			width: 90%;
			transition: 0.5s all ease;

			.cage__row {
				display: flex;
				flex-wrap: wrap;

				.cell--place {
					font-size: 1.5em;

					ul {
						list-style: none;
						margin: 0;
						padding: 0;
						text-align: left;

						li {
							margin-top: 5px;

							b {
								user-select: none;
							}
						}
					}
				}

				.cell--forecast_parameters,
				.cell--time_parameters,
				.cell--place,
				.cell--create_forecast,
				.cell--forecast__result,
				.cell--forecast__history,
				.cell--probabilities {
					display: flex;
					flex-direction: column;
					justify-content: center;

					h2 {
						margin-block: 0 15px;
					}
				}

				.cell--forecast__result,
				.cell--forecast__history,
				.cell--probabilities {
					justify-content: start;
					align-content: start;
					text-align: center;

					h2 {
						margin-top: 20px;
					}
				}

				.cell--forecast__history {
					.cell--forecast__history--row,
					.cell--forecast__history--row__item {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
						padding-block: 15px;
						user-select: none;

						.span--left {
							margin-left: 20px;
						}

						.span--right {
							margin-right: 20px;
						}
					}

					.cell--forecast__history--row__item {
						padding-block: 10px;
						border-top: 1px solid ${({ theme }) => theme.elementBorder};
						box-sizing: border-box;

						.span--right {
							user-select: text;
						}
					}
				}

				.cell--forecast__result {
					.forecast_result {
						margin-top: 30px;
						font-size: 1.3em;
					}

					.forecast_probabilities {
						margin-top: 30px;
						font-size: 1.05em;
						color: ${({ theme }) => theme.inactiveFont};
					}
				}
			}
		}
	}
`

export default StyledHomePage
