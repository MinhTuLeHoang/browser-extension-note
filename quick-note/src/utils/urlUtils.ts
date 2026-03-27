import { ESearchKey } from '@/common/enums/ESearchKey';

export const urlUtilsGetCurParam = (searchKey: ESearchKey) => {
	const searchParams = new URLSearchParams(window.location.search);
	return String(searchParams.get(searchKey) || '');
};
