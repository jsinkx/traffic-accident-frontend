import React from 'react'

import { StyledCell } from './styles'

const CellPlace: React.FC = () => (
	<StyledCell className="cell--place">
		<ul>
			<li>
				<b> Город: </b>
				Москва
			</li>
			<li>
				<b> Регион: </b>
				Север
			</li>
		</ul>
	</StyledCell>
)

export default CellPlace
