import { View, Image } from "@react-pdf/renderer";
import React,{ ReactElement } from "react";
import {styles as s} from './style'

interface Props{
	data: {
		url: string;
		display: boolean;
		// 全圆头像
		circle: boolean;
		theme: string;
	}
}
/**
 * 头像
 * @param param0
 * @returns
 */
export default function Avatar({ data }: Props){
	if (!data.display) {
		return null
	}
	return (
		<View style={s.avatar_warpper}>
			<Image style={data.circle ? s.avatar : s.avatar_rect } src={data.url} cache={true} />
		</View>
	)
}
