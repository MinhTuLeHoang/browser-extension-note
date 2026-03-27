import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface IFooterContainerV2Props extends React.HTMLAttributes<HTMLDivElement> {
	/** default: 16px */
	padding?: string;
	/** default: fixed */
	type?: 'fixed' | 'absolute';
	/** default: false */
	shadow?: boolean;
	children?: React.ReactNode;
}

const FooterContainerV2 = ({ padding = '16px', type = 'fixed', shadow = false, children, style, ...props }: IFooterContainerV2Props) => {
	const [footerHeight, setFootHeight] = useState(0);
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!footerRef.current) return;

		try {
			const resizeObserver = new ResizeObserver((entries) => {
				// Do what you want to do when the size of the element changes
				console.log('entries', entries);
				setFootHeight(entries[0].borderBoxSize[0].blockSize);
			});
			resizeObserver.observe(footerRef.current);
			return () => {
				resizeObserver.disconnect();
			}; // clean up
		} catch (error) {
			const caculateHeight = () => {
				if (footerRef.current?.clientHeight !== undefined) setFootHeight(footerRef.current?.clientHeight);
			};

			caculateHeight();
			setTimeout(() => {
				caculateHeight();
				setTimeout(() => {
					caculateHeight();
				}, 100);
			}, 100);
		}
	}, []);

	return (
		<>
			<div style={{ height: footerHeight, width: '100%', backgroundColor: 'transparent', ...style }} />
			<StyledFooter $padding={padding} $type={type} $shadow={shadow} ref={footerRef} style={style} {...props}>
				{children}
			</StyledFooter>
		</>
	);
};

export default FooterContainerV2;

const StyledFooter = styled.div<{ $padding?: string; $type?: 'fixed' | 'absolute'; $shadow?: boolean; ref?: React.RefObject<HTMLDivElement | null>; children?: React.ReactNode; style?: React.CSSProperties }>`
	position: ${({ $type }) => $type ?? 'fixed'};
	width: 100vw;
	bottom: 0;
	left: 0;
	padding: ${({ $padding }) => $padding ?? '16px'};
	background-color: white;
	${({ $shadow }) => $shadow && 'box-shadow: 0px -4px 29px 0px #0000000D;'}
	z-index: 3;
`;
