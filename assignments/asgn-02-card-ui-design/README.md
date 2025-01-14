# Assignment 02

## How to run
```shell
# Please run this script in your terminal, and visit the localhost url in the output

npm run dev
```

## File changes
Mainly in:  
* [\src\App.jsx](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/App.jsx) ***(HTML)***
* [\src\App.css](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/App.css) ***(CSS)***
* [\src\components\DemoCard1.jsx](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/components/DemoCard1.jsx) ***(HTML)***

## Content
卡片式设计（Card UI Design）

### 作业背景：

卡片式设计（Card UI Design）是现代Web设计中常见的一种模式，广泛用于产品展示、新闻摘要、个人资料等。此次作业，你将会获得一些预先设计好的Card UI Design图。你的任务是使用HTML和CSS来实现这些设计，将其从静态图像转变为实际的Web元素。

选择一个提供的UI设计，完成作业。

参考图一：  
![Card-Design-1](README-imgs/Card-Design-1.png)

参考图二：  
![Card-Design-2](README-imgs/Card-Design-2.png)

### 作业要求：

* __精确还原__：尽量确保你的代码实现与给定的UI设计图在视觉上相匹配，包括颜色、尺寸、字体和间距。

* __响应式设计__：尽管设计图可能是针对特定的屏幕尺寸，但你需要确保你的卡片设计在各种设备和屏幕尺寸上都能正常显示。

* __使用选择器和属性__：你应该在CSS中应用至少以下选择器和属性：
  <ol type="1">
    <li>标签选择器、类选择器、ID选择器。</li>
    <li>文本样式、背景属性、padding、margin、flexbox。</li>
  </ol>
* __代码清晰性__：代码应该是清晰的、整洁的，并且有适当的注释。

* __交互效果__：考虑为你的卡片添加一些基本的交互效果，如hover状态。

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
