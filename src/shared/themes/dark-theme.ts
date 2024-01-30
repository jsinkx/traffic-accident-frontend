import Colors from '../colors'

import THEMES from './themes'

const darkTheme = {
	paletteName: THEMES.DARK,
	background: Colors.BLACK,
	elementBackground: Colors.GREY,
	font: Colors.WHITE,
	inactiveFont: Colors.GREY_EXTRA_LIGHT,

	successColor: Colors.GREEN,
	errorColor: Colors.RED,

	elementBorder: Colors.GREY_BORDER,

	selection: {
		default: {
			font: Colors.WHITE,
			background: Colors.BLUE,
		},
	},
} as const

export default darkTheme
