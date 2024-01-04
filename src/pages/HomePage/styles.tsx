import styled from 'styled-components'

import Colors from '../../shared/colors'

import Cell from '../../components/Cell'
import Icon from '../../components/Icon/Icon'

export const StyledCell = styled(Cell)`
	margin-top: 25px;
	margin-right: 35px;
`

export const StyledIcon = styled(Icon)`
	margin-right: 6px;
`

type StyledHomePageProps = {
	$isAccident: number
}

const StyledHomePage = styled.div<StyledHomePageProps>`
	h2 {
		user-select: none;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-left: 100px;
		margin-top: 30px;

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
				.cell--forecast__result,
				.cell--forecast__history {
					display: flex;
					flex-direction: column;
					justify-content: center;
					overflow: hidden;

					h2 {
						margin-block: 0 15px;
					}
				}

				.cell--forecast__result,
				.cell--forecast__history {
					justify-content: start;
					align-content: start;
					text-align: center;

					h2 {
						margin-top: 20px;
					}
				}

				.cell--forecast__result {
					border: 1px solid ${({ $isAccident }) => ($isAccident === 0 ? Colors.GREEN : Colors.RED)};
					box-sizing: border-box;

					.forecast_result {
						margin-top: 30px;
						user-select: none;
					}
				}
			}
		}
	}
`

export default StyledHomePage
