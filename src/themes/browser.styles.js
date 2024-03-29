import { css } from 'styled-components'

export const browser = css`
	::-webkit-scrollbar {
		background-color: #181919;
		width: 16px;
	}
	::-webkit-scrollbar-corner {
		background-color: #252627;
	}
	::-webkit-scrollbar-thumb {
		border: 3.5px solid transparent !important;
		border-radius: 1.5em;
		background-color: #515659;
		background-clip: content-box;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #616061;
		background-clip: content-box;
	}

	::selection {
    background-color: #065EC8 !important;
		color: #FFF !important;
	}
`
