// Commit: 16/01/2023

import styled, { css } from 'styled-components';

interface StyledProps {
	$imgWidth?: string;
	$imgHeight: string;
	$loaded: boolean;
	$blurTransition: boolean;
}

const cssImgLoaded = css`
	filter: blur(0px);
	transition: filter 0.7s ease-out;
`;
const cssImgLoading = css`
	filter: blur(4px);
	clip-path: inset(0);
`;

export const StyledImg = styled.img<StyledProps>`
	max-width: 100%;
	width: ${(props) => props.$imgWidth};
	height: ${(props) => props.$imgHeight};
	${(props) => {
		if (props.$blurTransition) {
			return props.$loaded ? cssImgLoaded : cssImgLoading;
		}
		return undefined;
	}}
`;
