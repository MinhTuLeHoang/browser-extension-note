import { pagePaths } from '@/common/constants/PagePath';
import { ESearchKey } from '@/common/enums/ESearchKey';
import { urlUtilsGetCurParam } from '@/utils/urlUtils';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationCenterPage = () => {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const pagePath = urlUtilsGetCurParam(ESearchKey.PAGE_PATH);

		if (!pagePath) {
			alert(`empty path ${window.location.href}`);
			navigate(pagePaths.Menu);
			return;
		}

		const listPagePaths = Object.values(pagePaths);
		if (listPagePaths.includes(pagePath)) {
			alert(`include: ${pagePath}`);
			navigate(pagePath);
			return;
		}

		alert(`exclude: ${pagePath}, ${window.location.href}`);
		navigate(pagePaths.Menu);
	}, []);

	return <>abc</>;
};

export default NavigationCenterPage;
