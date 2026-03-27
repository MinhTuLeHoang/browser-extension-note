import styled from "styled-components";
import { ArrowLeft, ArrowRight, Home, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { pagePaths, notePagePaths } from "@/common/constants/PagePath";

const NavWrapper = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: rgba(15, 23, 42, 0.7);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	z-index: 1000;
`;

const NavGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const NavItem = styled.div`
	cursor: pointer;
	color: var(--text-secondary);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease;

	&:hover {
		color: white;
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.1);
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(1px);
	}
`;

const AppName = styled.h2`
	font-size: 18px;
	font-weight: 800;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	background: linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(0 0 5px rgba(255, 0, 229, 0.4));
`;

const NavBar = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goForward = () => navigate(1);
	const goHome = () => navigate(pagePaths.Menu);
	const goSettings = () => navigate(notePagePaths.Setting);

	return (
		<NavWrapper>
			<NavGroup>
				<NavItem onClick={goBack} title="Back">
					<ArrowLeft size={18} />
				</NavItem>
				<NavItem onClick={goForward} title="Forward">
					<ArrowRight size={18} />
				</NavItem>
				<NavItem onClick={goHome} title="Home">
					<Home size={18} />
				</NavItem>
			</NavGroup>

			<AppName>Super God</AppName>

			<NavGroup>
				<NavItem onClick={goSettings} title="Settings">
					<Settings size={18} />
				</NavItem>
			</NavGroup>
		</NavWrapper>
	);
};

export default NavBar;
