import Colors from '../colors'

import THEMES from './themes'

const lightTheme = {
	paletteName: THEMES.LIGHT,
	background: Colors.WHITE_BACKGROUND,
	elementBackground: Colors.WHITE_ELEMENT,
	font: Colors.BLACK,
	inactiveFont: Colors.GREY_LIGHT,

	successColor: Colors.GREEN_LIGHT,
	errorColor: Colors.RED_LIGHT,

	elementBorder: Colors.WHITE_BORDER,

	selection: {
		default: {
			font: Colors.WHITE,
			background: Colors.BLUE,
		},
	},
} as const

export default lightTheme
