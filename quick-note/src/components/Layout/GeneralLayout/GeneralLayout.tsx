import { useState } from 'react';
import styled from 'styled-components';
import { Menu, Settings, Home, FileText, Info, PanelLeftClose } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { PrimaryV2Blue, SecondaryV2Red, V2Overlay } from '@/common/constants/colors';
import { Heading } from '../../ZPDesignSystem/typography';
import { Image } from '../../ZPDesignSystem/image';
import quickNoteLogo from '/../public/note-logo-cut.png';
import RowContainer from '../../Containers/RowContainer';

const DRAWER_WIDTH = 180;

const GeneralLayout = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container>
			<TopBar>
				<Menu onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
				<Heading>Popup</Heading>
				<Settings style={{ cursor: 'pointer' }} />
			</TopBar>

			<Overlay open={isOpen} onClick={() => setIsOpen(false)} />
			<Drawer open={isOpen}>
				<RowContainer style={{ gap: '8px' }}>
					<Image src={quickNoteLogo} alt="Company Logo" width="36px" height="36px" />
					<Heading size="Medium" bold>
						Quick Note
					</Heading>
				</RowContainer>

				<Divider />

				<NavButton onClick={() => setIsOpen(false)}>
					<Home size={20} /> Home
				</NavButton>
				<NavButton onClick={() => setIsOpen(false)}>
					<FileText size={20} /> Documents
				</NavButton>
				<NavButton onClick={() => setIsOpen(false)}>
					<Info size={20} /> About
				</NavButton>

				<CloseButton onClick={() => setIsOpen(false)}>
					<PanelLeftClose size={20} /> Close
				</CloseButton>
			</Drawer>

			<Content>
				<Outlet />
			</Content>
		</Container>
	);
};

export default GeneralLayout;

const Container = styled.div`
	/* display: flex;
	flex-direction: column; */
	position: relative;
	overflow: hidden;
	height: 100%;
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid #ddd;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: gray;
`;

const Overlay = styled.div<{ open: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${V2Overlay};
	opacity: ${(props) => (props.open ? '1' : '0')};
	visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
	transition: opacity 0.3s ease, visibility 0.3s ease;
	z-index: 5;
`;

const Drawer = styled.div<{ open: boolean }>`
	position: absolute;
	top: 0;
	left: ${(props) => (props.open ? '0' : `-${DRAWER_WIDTH}px`)};
	width: ${DRAWER_WIDTH}px;
	height: 100%;
	background: white;
	box-shadow: ${(props) => (props.open ? '2px 0 5px rgba(0, 0, 0, 0.2)' : 'none')};
	transition: left 0.3s ease;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	z-index: 10;
	box-sizing: border-box;
`;

const NavButton = styled.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	padding: 8px;
	margin-left: -8px;
	font-size: 16px;
	width: calc(100% + 16px);
	cursor: pointer;
	text-align: left;
	gap: 8px;
	&:hover {
		color: ${PrimaryV2Blue};
	}
`;

const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	padding: 8px;
	font-size: 16px;
	cursor: pointer;
	width: 100%;
	margin-top: auto;
	gap: 4px;
	&:hover {
		color: ${SecondaryV2Red};
	}
`;

const Divider = styled.hr`
	width: 100%;
	border: none;
	border-top: 1px solid #ddd;
`;
