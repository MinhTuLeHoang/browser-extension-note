// Commit 10/05/2024

import React, { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { cssEllipsisOneLine, cssEllipsisThreeLines, cssEllipsisTwoLines, fontStyle } from '../shared/styles';
import { PrimaryV2Dark } from '@/common/constants/colors';


export interface HeadingProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The heading text
	 */
	children: ReactNode;
	/**
	 * The size of the Heading. Default is Small
	 */
	size?: HeadingSize;
	/**
	 * Whether the Heading is bold. Default is true
	 */
	bold?: boolean;
	/**
	 * The text color. Default is PrimaryBlack
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
interface StyledProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The heading text
	 */
	children: ReactNode;
	/**
	 * The size of the Heading. Default is Small
	 */
	$size: HeadingSize;
	/**
	 * Whether the Heading is bold. Default is false
	 */
	$bold: boolean;
	/**
	 * The text color. Default is PrimaryBlack
	 */
	$headingColor: string;
	/**
	 * The text alignment. Default is left
	 */
	$align: 'left' | 'center' | 'right';
	$maxLines?: 1 | 2 | 3;
}

export const Heading: React.FC<HeadingProps> = (props) => {
	const { children, size = 'Small', color = PrimaryV2Dark, bold = true, align = 'left', ...rest } = props;
	const tagName = getTagName(size);
	return (
		<StyledHeading as={tagName} $size={size} $headingColor={color} $bold={bold} $align={align} {...rest}>
			{children}
		</StyledHeading>
	);
};

export const cssMaxLines = css<{ $maxLines?: StyledProps['$maxLines'] }>`
	${(props) => {
		if (props.$maxLines === 1) {
			return cssEllipsisOneLine;
		}
		if (props.$maxLines === 2) {
			return cssEllipsisTwoLines;
		}
		if (props.$maxLines === 3) {
			return cssEllipsisThreeLines;
		}
		return undefined;
	}}
`;

export const StyledHeading = styled.h3<StyledProps>`
	${fontStyle}
	font-weight: ${(props) => (props.$bold ? 700 : 400)};
	color: ${(props) => props.$headingColor};
	text-align: ${(props) => props.$align};
	${(props) => mapFontSizeLineHeight(props.$size)}
	${cssMaxLines}
`;

type HeadingSize = 'Small' | 'Medium' | 'Large';

const mapFontSizeLineHeight = (size: HeadingSize) => {
	if (size === 'Large') {
		return css`
			font-size: 24px;
			line-height: 36px;
		`;
	}

	if (size === 'Medium') {
		return css`
			font-size: 18px;
			line-height: 28px;
		`;
	}

	return css`
		font-size: 16px;
		line-height: 24px;
	`;
};

const getTagName = (size: HeadingSize) => {
	if (size === 'Large') {
		return 'h1';
	}

	if (size === 'Medium') {
		return 'h2';
	}

	return 'h3';
};
