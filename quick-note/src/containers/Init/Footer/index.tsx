import styled from "styled-components";
import { Heart } from "lucide-react";

const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 16px 0;
	background: rgba(15, 23, 42, 0.7);
	backdrop-filter: blur(8px);
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	font-size: 11px;
	color: var(--text-secondary);
	letter-spacing: 0.05em;
	z-index: 100;
	pointer-events: none; /* Let clicks pass through if needed, though usually footer is just info */
`;

const HeartIcon = styled.span`
	color: #ff0055;
	display: flex;
	align-items: center;
	filter: drop-shadow(0 0 3px rgba(255, 0, 85, 0.5));
	animation: pulse 2s infinite ease-in-out;

	@keyframes pulse {
		0%, 100% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.2); opacity: 1; }
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<HeartIcon><Heart size={10} fill="#ff0055" /></HeartIcon>
			MADE BY PASSIONED DEV MINH TÚ LÊ HOÀNG
			<HeartIcon><Heart size={10} fill="#ff0055" /></HeartIcon>
		</FooterWrapper>
	);
};

export default Footer;
