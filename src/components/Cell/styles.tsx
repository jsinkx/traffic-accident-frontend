import styled from 'styled-components'

import Colors from '../../shared/colors'

type StyledCellProps = {
	$width: string
	$height: string
	$isLoading: boolean
}

const StyledCell = styled.div<StyledCellProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	text-align: center;
	height: ${({ $height }) => $height};
	width: ${({ $width }) => $width};
	padding: 5px;
	border-radius: 10px;
	background-color: ${({ $isLoading }) => ($isLoading ? '#F2F3F4' : Colors.WHITE_ELEMENT)};
`

export default StyledCell
