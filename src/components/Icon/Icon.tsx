import React from 'react'

import StyledImg from './styles'

type IconProps = {
	size?: string
} & React.ComponentPropsWithoutRef<'img'>

const Icon: React.FC<IconProps> = ({ size = '40px', ...props }) => <StyledImg $size={size} {...props} />

export default React.memo(Icon)
