/**
 * @decs: 可选参数配置表单
 * @author: hy
 * @date: 2020/2/23
 */
import React, {Component} from 'react';
import {Checkbox, Form, Input} from "antd";
import styles from './OperateOptionForm.module.less'

const FormItem = Form.Item;

@Form.create()
class OperateOptionForm extends Component {
	render() {
		const {form: {getFieldDecorator, getFieldValue}} = this.props;
		return (
				<Form className={styles.operateOptionForm}
				      labelCol={{span: 6}}
				      wrapperCol={{span: 16}}>
					<FormItem label='多语言'>
						{getFieldDecorator('needLang', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox/>)}
					</FormItem>
					{
						getFieldValue('needLang') ?
								<FormItem label='前置多语言'>
									{getFieldDecorator('beforeLang', {
										initialValue: ''
									})(<Input/>)}
								</FormItem> : null
					}
					<FormItem label='显示可选'>
						{getFieldDecorator('optional', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox/>)}
					</FormItem>
				</Form>
		);
	}
}

export default OperateOptionForm;
