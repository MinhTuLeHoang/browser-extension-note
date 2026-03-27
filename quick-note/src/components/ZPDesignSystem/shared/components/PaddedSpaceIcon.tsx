// Commit: 02/02/2023

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PaddedAreaIconProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	$width?: string;
	$height?: string;
	disabled?: boolean;
}

export const PaddedSpaceIcon: React.FC<PaddedAreaIconProps> = (props) => {
	const { $width, $height, disabled = false, onClick, children, ...rest } = props;
	return (
		<StyledPaddedSpaceIcon $width={$width} $height={$height} onClick={!disabled ? onClick : undefined} {...rest}>
			{children}
		</StyledPaddedSpaceIcon>
	);
};

const StyledPaddedSpaceIcon = styled.div<PaddedAreaIconProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.$width || '40px'};
	height: ${(props) => props.$height || '40px'};
	cursor: pointer;
`;
