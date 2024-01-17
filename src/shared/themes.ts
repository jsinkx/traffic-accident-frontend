import Colors from './colors'

export enum THEMES {
	LIGHT = 'light',
	DARK = 'dark',
}

export const lightTheme = {
	paletteName: THEMES.LIGHT,
	background: Colors.WHITE_BACKGROUND,
	elementBackground: Colors.WHITE_ELEMENT,
	font: Colors.BLACK,
	inactiveFont: Colors.GREY_LIGHT,

	successColor: Colors.GREEN_LIGHT,
	errorColor: Colors.RED_LIGHT,

	selection: {
		default: {
			font: Colors.WHITE,
			background: Colors.BLUE,
		},
	},
} as const

export const darkTheme = {
	paletteName: THEMES.DARK,
	background: Colors.BLACK,
	elementBackground: Colors.GREY,
	font: Colors.WHITE,
	inactiveFont: Colors.GREY_EXTRA_LIGHT,

	successColor: Colors.GREEN,
	errorColor: Colors.RED,

	selection: {
		default: {
			font: Colors.WHITE,
			background: Colors.BLUE,
		},
	},
} as const
