/**
 * @decs: 显示生成区域
 * @author: hy
 * @date: 2020/2/23
 */
import React, {useState} from "react";
import {Input, message, Switch} from 'antd'
import styles from './OutputArea.module.less'

const {TextArea} = Input;

export default function OutputArea({inputObject, optionalConfig = {}}) {
	const [showLang, setShowLang] = useState(false);
	let str = '';
	if (showLang) {
		str = createLangObject(inputObject, optionalConfig)
	} else {
		str = createColumn(inputObject, optionalConfig);
		str = columnTransferToString(str);
	}

	function handleSwitchChange() {
		setShowLang(!showLang)
	}

	return <div className={styles.outputArea}>
		<div className='tool-bar'>
			{optionalConfig.needLang ? <div>多语言：<Switch title='切换到多语言' onClick={handleSwitchChange}/></div> : null}
		</div>
		<TextArea value={str} className='text-area' onClick={handleClick}/>
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
function createLangObject(sourceData, option) {
	const lang = option.beforeLang || '';
	let str = '';
	Object.keys(sourceData).forEach(item => {
		str += `'${lang}${item}': '${sourceData[item]}',\n`
	});

	return str
}
