import { createGlobalStyle } from 'styled-components'

const GlobalStyleTags = createGlobalStyle`

html {
	height: 100%;
	color: ${({ theme }) => theme.font};
	background-color: ${({ theme }) => theme.background};
	font-display: swap;

	::selection {
		color: ${({ theme }) => theme.selection.default.font};
		background-color: ${({ theme }) => theme.selection.default.background};
	}

	::-webkit-scrollbar {
		width: 5px;
	}
	
	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.scrollbar.defaultTrackColor}; 
	}
	
	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.scrollbar.defaultThumbColor}; 
	}

	body {
		margin: 0;
		font-family: -Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		a,
		a:hover,
		a:active,
		a:focus {
			text-decoration: none;
			outline: none;
		}

		code {
			font-family: Consolas, source-code-pro, Menlo, Monaco, 'Courier New', monospace;
		}
	}
}



`

export default GlobalStyleTags
