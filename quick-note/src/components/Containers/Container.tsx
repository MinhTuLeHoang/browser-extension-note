import React from 'react';
import styled from 'styled-components';

export interface ICustomDiv extends React.HTMLAttributes<HTMLDivElement> {}


export const BottomCardContainer = styled.div<ICustomDiv>`
	box-shadow: 0px -8px 18px 0px #0000000d;
	border-radius: 16px 16px 0px 0px;
	background-color: white;
	padding: 16px;
	padding-right: 0px;
	padding-bottom: 24px;
`;
