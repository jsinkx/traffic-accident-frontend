import styled from 'styled-components'

import Cell from '../../components/Cell'

export const StyledCell = styled(Cell)`
	margin-top: 25px;
	margin-right: 35px;
`

const StyledHomePage = styled.div`
	h2 {
		user-select: none;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-left: 100px;
		margin-top: 30px;

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
				.cell--time_parameters {
					display: flex;
					flex-direction: column;
					justify-content: center;

					h2 {
						margin-block: 0 15px;
					}
				}
			}
		}
	}
`

export default StyledHomePage
