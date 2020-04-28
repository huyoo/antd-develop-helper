/**
 * @decs: 可选参数配置表单
 * @author: hy
 * @date: 2020/2/23
 */
import React, {Component, Fragment} from 'react';
import {Checkbox, Form, Input} from "antd";
import styles from './OperateOptionForm.module.less'

const FormItem = Form.Item;

@Form.create()
class OperateOptionForm extends Component {
	render() {
		const {form: {getFieldDecorator, getFieldValue}} = this.props;
		return (
				<Form className={styles.operateOptionForm}
				      labelCol={{span: 8}}
				      wrapperCol={{span: 15}}>
					<FormItem label='版本4.+'>
						{getFieldDecorator('v4', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox/>)}
					</FormItem>
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
					<FormItem label='校验规则'>
						{getFieldDecorator('rules', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox/>)}
					</FormItem>
					{
						getFieldValue('rules') ?
								<Fragment>
									<FormItem label='必填'>
										{getFieldDecorator('required', {
											valuePropName: 'checked',
											initialValue: false
										})(<Checkbox/>)}
									</FormItem>
									<FormItem label='长度限制'>
										{getFieldDecorator('maxLength', {
											valuePropName: 'checked',
											initialValue: false
										})(<Checkbox/>)}
									</FormItem>
								</Fragment> : null
					}
					<FormItem label='初始值'>
						{getFieldDecorator('initialValue', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox/>)}
					</FormItem>
				</Form>
		);
	}
}

export default OperateOptionForm;
