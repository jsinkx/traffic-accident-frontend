import React from 'react'

import Piechart from './Piechart'
import { StyledCell } from './styles'

type CellProbabilitiesProps = {
	isLoading: boolean
	probabilities: [number, number]
}

const CellProbabilities: React.FC<CellProbabilitiesProps> = ({ isLoading, probabilities }) => {
	return (
		<StyledCell className="cell--probabilities" width="330px" height="450px" isLoading={isLoading}>
			<h2> Вероятности случая</h2>
			<Piechart probabilities={probabilities} />
		</StyledCell>
	)
}

export default CellProbabilities
