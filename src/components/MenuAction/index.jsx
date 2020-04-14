/**
 * @decs: 菜单切换按钮
 * @author: hy
 * @date: 2020/4/14
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Dropdown, Menu} from "antd";
import {Link} from "react-router-dom";

const ButtonMenu = <Menu>
	<Menu.Item key="1">
		<Link to='/column-builder'>表头生成器</Link>
	</Menu.Item>
	<Menu.Item key="2">
		<Link to='/form-builder'>表单元素生成器</Link>
	</Menu.Item>
</Menu>;

class MenuAction extends Component {
	render() {
		return (
				<Dropdown overlay={ButtonMenu}>
					<Button style={{marginLeft: 8}}>工具切换</Button>
				</Dropdown>
		);
	}
}

MenuAction.propTypes = {};

export default MenuAction;
