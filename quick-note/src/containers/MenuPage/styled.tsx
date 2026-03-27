import styled from "styled-components";
import { ChevronRight } from "lucide-react";

export const PageContainer = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: 100%;
	box-sizing: border-box;
`;

export const TitleSection = styled.div`
	text-align: left;
	margin-top: 10px;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: 800;
	margin: 0;
	background: linear-gradient(135deg, var(--neon-cyan), var(--neon-blue));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(0 0 8px rgba(0, 243, 255, 0.3));
	letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
	margin: 4px 0 0 0;
	color: var(--text-secondary);
	font-size: 14px;
`;

export const SearchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 12px 16px 12px 42px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	color: white;
	font-size: 14px;
	backdrop-filter: blur(10px);
	transition: all 0.3s ease;

	&::placeholder {
		color: rgba(255, 255, 255, 0.3);
	}

	&:focus {
		outline: none;
		border-color: var(--neon-cyan);
		box-shadow: 0 0 15px rgba(0, 243, 255, 0.15);
		background: rgba(255, 255, 255, 0.08);
	}
`;

export const SearchIconWrapper = styled.div`
	position: absolute;
	left: 14px;
	color: rgba(255, 255, 255, 0.5);
	display: flex;
	align-items: center;
	z-index: 10;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-bottom: 20px;
`;

export const Card = styled.div`
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.05);
	padding: 20px;
	border-radius: 18px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	backdrop-filter: blur(10px);
	position: relative;
	overflow: hidden;

	&:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.07);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.5);

		.icon-bg {
			transform: scale(1.2);
			opacity: 1;
		}

		.arrow {
			transform: translateX(2px);
			opacity: 1;
		}
	}

	&.featured {
		grid-column: span 2;
		background: linear-gradient(135deg, rgba(68, 102, 255, 0.1), rgba(0, 243, 255, 0.05));
		border-color: rgba(68, 102, 255, 0.2);
	}
`;

export const IconWrapper = styled.div<{ color?: string }>`
	width: 40px;
	height: 40px;
	border-radius: 12px;
	background: ${props => props.color || 'var(--neon-blue)'}15;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${props => props.color || 'var(--neon-blue)'};
	margin-bottom: 4px;
	transition: all 0.3s ease;
`;

export const CardTitle = styled.div`
	font-weight: 600;
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardDescription = styled.div`
	font-size: 12px;
	color: var(--text-secondary);
	line-height: 1.4;
`;

export const ArrowIcon = styled(ChevronRight)`
	opacity: 0.3;
	transition: all 0.3s ease;
`;
