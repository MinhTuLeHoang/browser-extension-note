// Commit 10/05/2024

import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { fontStyle } from '../shared/styles';
import { cssMaxLines } from './Heading';
import { PrimaryV2Dark } from 'common/constants/colors';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * The paragraph text
	 */
	children: ReactNode;
	/**
	 * The size of the Paragraph. Default is Medium
	 */
	size?: ParagraphSize;
	/**
	 * Whether the Paragraph is bold. Default is false
	 */
	bold?: boolean;
	/**
	 * The text color. Default is PrimaryV2Dark
	 */
	color?: string;
	/**
	 * The text alignment. Default is left
	 */
	align?: 'left' | 'center' | 'right';
	/**
	 * The maximum lines. Default is not set.
	 */
	maxLines?: 1 | 2;
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
	const { children, color = PrimaryV2Dark, size = 'Medium', bold = false, align = 'left', maxLines, ...rest } = props;
	return (
		<StyledParagraph $paragraphColor={color} $size={size} $bold={bold} $align={align} $maxLines={maxLines} {...rest}>
			{children}
		</StyledParagraph>
	);
};

interface StyledProps extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * The paragraph text
	 */
	children: ReactNode;
	/**
	 * The size of the Paragraph. Default is Medium
	 */
	$size: ParagraphSize;
	/**
	 * Whether the Paragraph is bold. Default is false
	 */
	$bold: boolean;
	/**
	 * The text color. Default is PrimaryV2Dark
	 */
	$paragraphColor: string;
	/**
	 * The text alignment. Default is left
	 */
	$align: 'left' | 'center' | 'right';
	$maxLines?: 1 | 2;
}

const StyledParagraph = styled.p<StyledProps>`
	${fontStyle};
	font-weight: ${(props) => (props.$bold ? 700 : 400)};
	color: ${(props) => props.$paragraphColor};
	font-size: ${(props) => (props.$size === 'Large' ? '16px' : '14px')};
	line-height: ${(props) => (props.$size === 'Large' ? '24px' : '22px')};
	text-align: ${(props) => props.$align};
	${cssMaxLines}
`;

export type ParagraphSize = 'Medium' | 'Large';
