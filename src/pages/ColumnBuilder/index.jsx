/**
 * @decs: 表头创建
 * @author: hy
 * @date: 2020/2/22
 */
import React, {Component} from 'react';
import {Button, Input} from 'antd'
import styles from './index.module.less'
import OperateOptionForm from "./components/OperateOptionForm";
import OutputArea from "./components/OutputArea";

const {TextArea} = Input;

class ColumnBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInputArea: true,
			showOutputArea: false,
			inputObject: '',
			optionalConfig: {}
		};
		this.formRef = null;
	}

	// 存放输入文本域
	handleInputChange = (event) => {
		const inputValue = event.target.value;
		const inputObject = inputValue.split(/\n/)
				.map(item => {
					item = item.split(':');
					return {
						[item[0]]: item[1]
					}
				})
				.reduce((sum, item) => Object.assign(sum, item), {});

		this.setState({inputObject});
	};

	handleBack = () => {
		this.setState({
			showInputArea: true,
			showOutputArea: false,
		});
	};

	// 生成表头
	handleRender = () => {
		const {showOutputArea, showInputArea} = this.state;
		let passValidate = false, optionalConfig = null;

		this.formRef.validateFieldsAndScroll((err, values) => {
			if (err) return;

			passValidate = true;
			optionalConfig = values
		});

		if (!passValidate) return;

		this.setState({
			showInputArea: false,
			showOutputArea: true,
			optionalConfig
		});
	};

	render() {
		const {showOutputArea, showInputArea, inputObject, optionalConfig} = this.state;

		return (
				<div className={styles.containers}>
					<div className='inputArea' style={{display: showInputArea ? '' : 'none'}}>
						<TextArea onChange={this.handleInputChange} style={{height: '100vh'}}/>
					</div>
					<div className='operateArea'>
						<OperateOptionForm ref={r => this.formRef = r}/>
						{showInputArea || <Button onClick={this.handleBack}>返回</Button>}
						<Button type='primary' onClick={this.handleRender}>启动</Button>
					</div>
					{
						showOutputArea ? <div className='outputArea'>
								<OutputArea inputObject={inputObject} optionalConfig={optionalConfig}/>
							</div> : null
					}
				</div>
		);
	}
}

export default ColumnBuilder;
