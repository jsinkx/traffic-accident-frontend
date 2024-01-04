import React from 'react'

import StyledCell from './styles'

type CellProps = {
	width?: string
	height?: string
	children: React.ReactNode
	className?: string
}

const Cell: React.FC<CellProps> = ({ width = '200px', height = '200px', children, className }) => {
	return (
		<StyledCell $width={width} $height={height} className={className}>
			{children}
		</StyledCell>
	)
}

export default Cell
