// Commit: 10/05/2024

import { css, keyframes } from 'styled-components';
import { LoadingZIndex } from './zIndex';
import { Blue25, Blue50, Dark100, PrimaryV2Dark, V2Overlay } from 'common/constants/colors';

export const fontStyle = css`
	/* font-family: SFProDisplay, SF Pro Display; */
	font-style: normal;
`;

export const cssReset = css`
	padding: 0;
	margin: 0;
	box-sizing: border-box;
`;

export const cssOverlay = css<{ $zIndex?: number }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: ${V2Overlay};
	z-index: ${(props) => props.$zIndex || LoadingZIndex};
`;

export const cssHideScrollBar = css`
	&::-webkit-scrollbar {
		display: none;
	}
`;

const cssEllipsis = css`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const cssEllipsisOneLine = css`
	${cssEllipsis}
	-webkit-line-clamp: 1;
`;

export const cssEllipsisTwoLines = css`
	${cssEllipsis}
	-webkit-line-clamp: 2;
`;
export const cssEllipsisThreeLines = css`
	${cssEllipsis}
	-webkit-line-clamp: 3;
`;

export const cssRippleStyle = (hoverColor = Blue25, activeColor = Blue50) => css`
	background-position: center;
	transition: background 1.2s ease-in;
	&:hover {
		background: ${hoverColor} radial-gradient(circle, transparent 50%, ${hoverColor} 50%) center/15000%;
	}
	&:active {
		background-color: ${activeColor};
		background-size: 100%;
		transition: background 0s;
	}
`;

export const cssCursor = (cursor = 'pointer') => css`
	cursor: ${cursor};
	* {
		cursor: ${cursor};
	}
`;

export const fadeInKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOutKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const activeElementIdx = 6;
export const cssCustomDatePickerMobile = css`
	.datepicker {
		position: static !important;
	}
	.datepicker.ios {
		background: transparent !important;
		.datepicker-scroll {
			li {
				display: flex !important;
				flex-direction: row !important;
				justify-content: center !important;
				align-items: center !important;
			}
			li:nth-child(${activeElementIdx}) {
				${fontStyle}
				color: ${PrimaryV2Dark} !important;
				text-align: center !important;
				font-size: 24px !important;
				font-weight: 400 !important;
				line-height: 36px !important;
			}
			li:nth-child(${activeElementIdx - 1}),
			li:nth-child(${activeElementIdx + 1}) {
				${fontStyle}
				color: ${Dark100} !important;
				text-align: center !important;
				font-size: 18px !important;
				font-style: normal !important;
				font-weight: 400 !important;
				line-height: 28px !important;
			}
			li:nth-child(${activeElementIdx - 2}),
			li:nth-child(${activeElementIdx + 2}) {
				${fontStyle}
				color: ${Dark100} !important;
				text-align: center !important;
				font-size: 14px !important;
				font-weight: 400 !important;
				line-height: 18px !important;
			}
			li:nth-child(${activeElementIdx - 3}),
			li:nth-child(${activeElementIdx + 3}) {
				${fontStyle}
				color: ${Dark100} !important;
				text-align: center !important;
				font-size: 14px !important;
				font-weight: 400 !important;
				line-height: 18px !important;
			}
		}
		.datepicker-wheel {
			border: none !important;
		}
		.datepicker-content {
			padding: 0 !important;
			justify-content: center !important;
		}
		.datepicker-viewport::after {
			background: transparent !important;
		}
	}
`;
