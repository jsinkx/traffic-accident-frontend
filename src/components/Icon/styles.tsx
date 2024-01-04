import styled from 'styled-components'

type StyledImgProps = {
	$size: string
}

const StyledImg = styled.img<StyledImgProps>`
	width: ${({ $size }) => $size};
	height: ${({ $size }) => $size};
	user-select: none;
	pointer-events: none;
`

export default StyledImg
