// Commit 10/05/2024

import React, { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { fontStyle } from '../shared/styles';
import { cssMaxLines } from './Heading';
import { PrimaryV2Dark } from 'common/constants/colors';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
	/**
	 * true: display block (default)
	 * false: display inline-block
	 */
	displayBlock?: boolean;
	/**
	 * The label text
	 */
	children: ReactNode;
	/**
	 * The size of the Label. Default is Medium
	 */
	size?: LabelSize;
	/**
	 * Whether the Label is bold. Default is false
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
	maxLines?: 1 | 2 | 3;
}
interface StyledProps extends HTMLAttributes<HTMLLabelElement> {
	/**
	 * true: display block (default)
	 * false: display inline-block
	 */
	$displayBlock?: boolean;
	/**
	 * The label text
	 */
	children: ReactNode;
	/**
	 * The size of the Label. Default is Medium
	 */
	$size: LabelSize;
	/**
	 * Whether the Label is bold. Default is false
	 */
	$bold: boolean;
	/**
	 * The text color. Default is PrimaryV2Dark
	 */
	$labelColor: string;
	/**
	 * The text alignment. Default is left
	 */
	$align?: 'left' | 'center' | 'right';
	$maxLines?: 1 | 2 | 3;
}

export const Label: React.FC<LabelProps> = (props) => {
	const { children, color = PrimaryV2Dark, size = 'Medium', bold = false, align = 'left', displayBlock = true, maxLines, ...rest } = props;
	return (
		<StyledLabel $labelColor={color} $size={size} $bold={bold} $align={align} $displayBlock={displayBlock} $maxLines={maxLines} {...rest}>
			{children}
		</StyledLabel>
	);
};

export const StyledLabel = styled.label<StyledProps>`
	${fontStyle};
	display: ${(props) => (props.$displayBlock ? 'block' : 'inline-block')};
	font-weight: ${(props) => (props.$bold ? 700 : 400)};
	color: ${(props) => props.$labelColor};
	${(props) => fontSizeLineHeight(props.$size)}
	text-align: ${(props) => props.$align};
	${cssMaxLines}
`;

export type LabelSize = 'XSmall' | 'Small' | 'Medium' | 'Large';

const fontSizeLineHeight = (size: LabelSize) => {
	if (size === 'Large') {
		return css`
			font-size: 16px;
			line-height: 20px;
		`;
	}
	if (size === 'Medium') {
		return css`
			font-size: 14px;
			line-height: 18px;
		`;
	}
	if (size === 'Small') {
		return css`
			font-size: 12px;
			line-height: 16px;
		`;
	}
	return css`
		font-size: 10px;
		line-height: 12px;
	`;
};
