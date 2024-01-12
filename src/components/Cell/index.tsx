import React from 'react'

import StyledCell from './styles'

type CellProps = {
	width?: string
	height?: string
	children: React.ReactNode
	className?: string
	isLoading?: boolean
}

const Cell: React.FC<CellProps> = ({
	width = '200px',
	height = '200px',
	children,
	className,
	isLoading = false,
}) => {
	return (
		<StyledCell $width={width} $height={height} className={className} $isLoading={isLoading}>
			{children}
		</StyledCell>
	)
}

export default Cell
