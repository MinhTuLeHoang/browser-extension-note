// Commit: 16/01/2023

import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import { StyledImg } from './styled';
import { ImgRatio } from './types';
import { getPlaceholderImgSrc, getWidthHeightAttrs } from './utils';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	/**
	 * The image src.
	 */
	src: string;
	/**
	 * The image width. Set this prop to style the `width` of the image, it differs from `width` attribute of the image.<br/>
	 * Use the same with the `width` CSS property<br/>
	 */
	imgWidth?: string;
	/**
	 * The image height. Set this prop to style the `height` of the image, it differs from `height` attribute of the image.<br/>
	 * Use the same with the `height` CSS property. Default is `auto`
	 */
	imgHeight?: string;
	/**
	 * The placeholder src. When the image is loading or failed to load, a <strong>placeholder</strong> will be displayed.<br/>
	 * Default is auto config based on the `placeholderRation` prop<br/>
	 * <strong>Only set this prop if wanting to use another custom placeholder. Be aware about the aspect ratio of this placeholder and ratio of `width` and `height` attribute,
	 * they should be the same with aspect ratio of the image to avoid layout shift</strong> <br/>
	 * The placeholder size should be minimal as possible, around <strong>5KB</strong>. It need to be loaded fast and error free while the image loading. <br/>
	 */
	placeholderSrc?: string;
	/**
	 * The ratio for the placeholder. Default is 1:1<br/>
	 * <strong>Note that seting this ratio does not impact on the actual rendered size of the image</strong>
	 */
	placeholderRatio?: ImgRatio;
	/**
	 * Whether to use the icon placeholder for the image. This placeholder has ratio is 1:1. Default is false.
	 */
	iconPlaceholder?: boolean;
	/**
	 * Whether to enable the blur effect when transition from placeholder to the rendered image. Default is true
	 */
	blurTransition?: boolean;
}

export const Image: React.FC<ImageProps> = (props) => {
	const { imgWidth, src, alt, width, height, placeholderRatio = '1:1', placeholderSrc: placeholderSrcProp, imgHeight = 'auto', iconPlaceholder = false, blurTransition = true, ...rest } = props;
	const placeholderSrc = placeholderSrcProp || getPlaceholderImgSrc(iconPlaceholder, placeholderRatio);
	const widthHeightAttrs = getWidthHeightAttrs(iconPlaceholder, placeholderRatio, width, height);
	const { src: imgSrc, error } = useGetSuccessImgSrc(src, placeholderSrc || '');

	return <StyledImg src={imgSrc} alt={alt} $imgWidth={imgWidth} $imgHeight={imgHeight} $loaded={imgSrc !== placeholderSrc || error} $blurTransition={blurTransition} {...widthHeightAttrs} {...rest} />;
};

export const useGetSuccessImgSrc = (src: string, fallbackSrc: string) => {
	const [imgSrc, setImgSrc] = useState(fallbackSrc || src);
	const [error, setError] = useState(false);
	useEffect(() => {
		const img = new window.Image();
		img.src = src;
		img.onload = () => {
			setImgSrc(src);
		};
		img.onerror = () => {
			setError(true);
		};
	}, [src]);

	return { src: imgSrc, error };
};
