import Colors from '@shared/colors'

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

	scrollbar: {
		defaultTrackColor: Colors.GREY_EXTRA_LIGHT,
		defaultThumbColor: Colors.GREY,
	},
} as const

export default lightTheme
