import React from 'react'

import StyledCell from './styles'

type CellProps = {
	width?: string
	height?: string
	isLoading?: boolean
} & React.ComponentPropsWithoutRef<'div'>

const Cell: React.FC<CellProps> = ({
	width = '200px',
	height = '200px',
	children,
	isLoading = false,
	...props
}) => {
	return (
		<StyledCell $width={width} $height={height} $isLoading={isLoading} {...props}>
			{children}
		</StyledCell>
	)
}

export default Cell
