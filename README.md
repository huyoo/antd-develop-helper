<h1 align='center'>Antd开发协助工具</h1>
    
# 特性
- 表格columns的快速生成，包含宽度、多语言
- 表单元素的快速生成(目前仅支持antd 3.x，4.+的版本后续实现)

# Usage

```sh
// 下载项目单独运行
git clone https://github.com/huyoo/antd-develop-helper.git
npm install 
npm run start
```

# 目录结构
```
- src
  |- components
  |- configs   //全局配置信息
     |- router.config.js   //路由配置
  |- pages  //页面
     |- ColumnBuilder //表头生成器
     |- FormBuilder  //表单元素生成器
```

## 开发日记
1. 2020.02.22 创建项目
2. 2020.02.24 v0.2.0 增加表头创建工具
3. 2020.04.21 v0.3.0 增加表单元素快速生成


# LICENSE

MIT
