import React from 'react'

import StyledImg from './styles'

type IconProps = {
	size?: string
	className?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

const Icon: React.FC<IconProps> = ({ size = '40px', ...props }) => {
	return <StyledImg $size={size} {...props} />
}

export default Icon
