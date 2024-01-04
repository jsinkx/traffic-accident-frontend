import styled from 'styled-components'

import Icon from '../../components/Icon/Icon'

export const StyledIcon = styled(Icon)`
	margin-inline: 6px;
`

const StyledLoadingPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin-top: 30vh;

	header {
		display: flex;
		align-items: center;
		flex-direction: row;
		user-select: none;

		h1 {
			margin-right: 6px;
		}
	}
`

export default StyledLoadingPage
