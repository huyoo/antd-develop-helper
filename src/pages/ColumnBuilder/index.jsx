/**
 * @decs:
 * @author: hy
 * @date: 2020/2/22
 */
import React, {Component, Fragment} from 'react';
import {Input} from 'antd'
import cls from 'classnames'
import styles from './ss.less'


const {TextArea} = Input;

class ColumnBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInputArea: true,
			showOutputArea: false
		}
	}

	render() {
		const {showOutputArea, showInputArea} = this.state;
		// console.log(styles);

		return (
				<div style={{display: "flow"}} className='container'>
					<div className={styles.containers}>
						test
						<TextArea/>
					</div>
					<div>按钮区</div>
					{
						showOutputArea ? <div>输出区</div> : null
					}
				</div>
		);
	}
}

export default ColumnBuilder;
