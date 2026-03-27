// Commit: 16/01/2023

import { IconPlaceholder, Placeholder11, Placeholder169, Placeholder21, Placeholder31, Placeholder41 } from '../shared/remoteImages';
import { ImgRatio } from './types';

export const getPlaceholderImgSrc = (iconPlaceholder: boolean, imgRatio?: ImgRatio) => {
	if (iconPlaceholder) {
		return IconPlaceholder;
	}

	switch (imgRatio) {
		case '16:9':
			return Placeholder169;
		case '1:1':
			return Placeholder11;
		case '2:1':
			return Placeholder21;
		case '3:1':
			return Placeholder31;
		case '4:1':
			return Placeholder41;
		default:
			return undefined;
	}
};

type WidthHeightAttr = string | number;
export const getWidthHeightAttrs = (iconPlaceholder: boolean, imgRatio?: ImgRatio, width?: WidthHeightAttr, height?: WidthHeightAttr) => {
	if (width && height) {
		return { width, height };
	}

	if (iconPlaceholder) {
		return { width: '1', height: '1' };
	}

	switch (imgRatio) {
		case '16:9':
			return { width: '16', height: '9' };
		case '1:1':
			return { width: '1', height: '1' };
		case '2:1':
			return {
				width: '2',
				height: '1',
			};
		case '3:1':
			return {
				width: '3',
				height: '1',
			};
		case '4:1':
			return {
				width: '4',
				heigth: '1',
			};
		default:
			return {};
	}
};
