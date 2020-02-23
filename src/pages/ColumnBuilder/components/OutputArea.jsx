/**
 * @decs: 显示生成区域
 * @author: hy
 * @date: 2020/2/23
 */
import React from "react";
import {Input, message} from 'antd'

const {TextArea} = Input;

export default function OutputArea({inputObject, optionalConfig = {}}) {
	let str = createColumn(inputObject, optionalConfig);
	str = columnTransferToString(str);

	return <div>
		<TextArea value={str} style={{height: '100vh'}} onClick={handleClick}/>
	</div>
}

// 点击复制
function handleClick(e) {
	e.target.select();
	document.execCommand('Copy');
	message.success('复制成功');
}

// 由原始对象生成表头
function createColumn(sourceData, option) {
	return Object.keys(sourceData).map((item) => {
		let column = {
			title: sourceData[item],
			dataIndex: item,
			width: 120,
		};
		if (option.needLang) {
			column.title = `formatMessage({ id: '${option.beforeLang || ''}${item}', defaultMessage: '${sourceData[item]}' })`
		}

		if (option.optional) {
			column.optional = 'true';
		}

		return column
	});
}

// 将对象转换成字符串
function columnTransferToString(columns) {
	let str = '';
	columns.forEach(item => {
		str += '{\n';
		for (let key in item) {
			if (key === 'dataIndex' || key === 'key') {
				str += `${key}: '${item[key]}',\n`
			} else {
				str += `${key}:${item[key]},\n`
			}
		}
		str += '},\n';
	});
	str = `[\n${str}\n]`;

	return str
}

// 由原始对象生成表头
function createLangObject(sourceData) {
	const lang = document.getElementById('langBefore').value || '';
	let str = '';
	Object.keys(sourceData).forEach(item => {
		str += `'${lang}${item}': '${sourceData[item]}',\n`
	});

	return str
}
