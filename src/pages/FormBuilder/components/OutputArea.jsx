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
		str = createFormItem(inputObject, optionalConfig);
		str = itemTransferToString(str);
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

// 由原始对象生成表单元素
function createFormItem(sourceData, option) {
	return Object.keys(sourceData).map((item) => {
		return `
		<FormItem label='${option.needLang ?
				`formatMessage({ id: '${option.beforeLang || ''}${item}', defaultMessage: '${sourceData[item]}' })`
				: sourceData[item]}'>
		{getFieldDecorator('${item}', {
				${option.rules ? `rules: [
				    ${option.maxLength ? `{
				    max: 5,
				    message: ${option.needLang ? `formatMessage({ id: 'baf.maxLength', defaultMessage: '最大长度为5' }, { length: 5 })` : `'最大长度为5'`},
				    },` : ''}
				    ${option.required ? `{
				        required: true,
                message: ${option.needLang ? `formatMessage({ id: 'app.validator.required', defaultMessage: '必填项' })` : `'必填项'`},
          },` : ''}
				],` : ''}
		    ${option.initialValue ? `initialValue: defaultValue.${item} || '',` : ''}
		    })(<Input/>)}
		</FormItem>
`
	});
}

// 将对象转换成字符串
function itemTransferToString(formItems) {
	return formItems.join(' ')
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
