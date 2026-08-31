# 卡王的个人导航站

这是一个基于静态 HTML/CSS/JS 构建的 Minecraft 主题个人导航站，集中整理卡王的官方社交账号、交流入口、网易版皮肤投稿方式和 Minecraft 代安装服务。同时收录浏览器搜索语法、崩溃日志分析、网页套壳工具等教程与实用资料，方便访问者快速找到需要的内容。

## 🌐 主要入口
- [主导航页面](https://kawangya.github.io/)

## 📌 当前项目内容
- 首页入口：index.html
- 子页面：pages/，包含 浏览器搜索语法、通用跳转工具、个人应用和整合包分享页面
- 页面样式：css/aistyle.css；css/style.css 为备用样式文件，部分页面使用内置样式
- 通用脚本：js/script.js，提供复制内容、图片放大等功能
- 图片资源：images/，包含网站图标和公众号、QQ 联系方式二维码

## 🧱 项目结构
```text
kw-nav/
├── index.html              # 主页
├── pages/                  # 子页面目录
│   ├── llqssyf.html        # 浏览器搜索语法页面
│   ├── tytzgj.html         # 通用跳转工具页面
│   ├── wdyy.html           # 个人应用页面
│   └── zhbfx.html          # Minecraft 整合包分享页面
├── css/                    # 样式表目录
│   ├── aistyle.css         # 页面通用样式
│   └── style.css           # 备用样式文件
├── js/                     # JavaScript 目录
│   └── script.js           # 通用脚本
├── images/                 # 图片资源目录
│   ├── favicon.ico         # 网站图标
│   ├── apple-touch-icon.png
│   ├── qqhy.png            # 联系方式图片
│   └── wxgzh.png           # 公众号图片
├── LICENSE                 # 开源许可证
└── README.md               # 项目说明
```

## ▶️ 使用方式
- 直接在浏览器中打开 index.html 即可预览
- 如果部署到 GitHub Pages 或其他静态托管服务，上传整个仓库内容即可

## 📄 许可证
本项目基于 [MIT License](LICENSE) 开源。