# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Assignment 05

## How to run
```shell
# Please run this script in your terminal, and visit the localhost url in the output

npm start
```

## File changes
Mainly in:  
* [\src\App.jsx](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/App.jsx) ***(HTML)***
* [\src\App.css](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/App.css) ***(CSS)***
* [\src\components\DemoCard1.jsx](https://github.com/ken-gy-leung/jra-full-stack/blob/asgn02/assignments/asgn-02-card-ui-design/src/components/DemoCard1.jsx) ***(HTML)***

## Content
### 目标：   
基于 React 创建一个简易的任务清单应用（To-Do List App）。该应用应具有基本的增删改查功能，并且界面应友好、交互流畅。

### 步骤：  
1. **初始化**你的 React 项目使用 **create-react-app** 来初始化你的应用框架。
2. **创建一个 Task 组件**设计一个展示单个任务的组件。该组件应显示任务内容和一个完成按钮。
3. **使用 State 管理任务列表**在 App 组件中使用 **state** 来存储任务列表。
4. 提供一个输入框，使用户可以添加新任务到 **state** 中。
5. **利用 Props 传递数据**将单个任务数据通过 **props** 传递给 Task 组件，使其能够正确展示。
6. **事件处理**为完成按钮添加 **onClick** 事件，当用户点击时，标记任务为已完成。
7. 为输入框添加 **onChange** 事件，实时捕捉用户输入的内容。
8. **条件渲染**利用条件渲染，为已完成的任务添加删除线或更改其颜色。
9. 提供一个按钮，使用户可以过滤查看已完成或未完成的任务。
10. **美化你的应用**使用 CSS（或你之前学过的 SCSS）为你的应用添加一些基本样式。你可以选择一个明亮的色调，或使用渐变色，使其更具吸引力。

### 扩展挑战：  
使用 React 的 **localStorage** API，使任务在页面刷新后仍然可以保存。
添加任务的编辑功能。
实现任务的拖放排序功能。