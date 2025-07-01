# 项目概览
本项目旨在整合多个前端技术和工具，构建一个功能丰富的个人项目展示和学习平台。它不仅包含了基于 Next.js 的现代 Web 应用开发实践，还集成了 QAnything 知识库问答系统和 WakaTime API，以展示不同技术栈的融合能力和个人开发习惯的数据可视化。

## 1. 技术栈
- 前端框架 : Next.js (React)
- 样式 : Tailwind CSS (或其他)
- 数据可视化 : ECharts (或其他)
- 知识库集成 : QAnything (通过 iframe 嵌入)
- API 集成 : WakaTime API
- 版本控制 : Git
## 2. QAnything 知识库问答系统集成
本项目通过嵌入 QAnything 知识库问答系统，提供了一个交互式的知识查询界面。这使得用户可以直接在应用内与预设的知识库进行问答互动，无需跳转到外部平台。

### 2.1 集成方式
QAnything 的集成主要通过在 Next.js 应用中嵌入一个 iframe 来实现。这种方式简单高效，能够快速将 QAnything 的功能引入到现有项目中。

```
<iframe src="http://
your-qanything-instance-url:p
ort" width="100%" 
height="600px" 
frameborder="0"></iframe>
```
请将 http://your-qanything-instance-url:port 替换为您的 QAnything 实际部署地址和端口。

### 2.2 QAnything 运行截图
![QAnything 运行截图](images/qanything-screenshot.png)
## 3. WakaTime API 集成
本项目通过调用 WakaTime API 来获取并展示个人编码时长数据。这不仅能帮助开发者直观了解自己的编码习惯和效率，也为项目增添了数据可视化的元素。

### 3.1 集成步骤
1. 获取 WakaTime API Key ：
   
   - 访问 WakaTime 官网 并登录。
   - 进入用户设置 (Settings) 或 API Keys 页面，生成并复制您的个人 API Key。
2. 后端代理设置 (推荐) ：
   为了保护您的 API Key 不被暴露在客户端，并解决潜在的跨域 (CORS) 问题，强烈建议在 Next.js 项目中创建一个后端 API 路由作为 WakaTime API 的代理。这样，前端只与您自己的后端路由通信，由后端安全地携带 API Key 请求 WakaTime 服务。
   
   例如，在 pages/api/wakatime.js (Pages Router) 或 app/api/wakatime/route.js (App Router) 中创建 API 路由：
   
   ```
   // 示例：pages/api/
   wakatime.js (Pages Router)
   export default async 
   function handler(req, res) 
   {
     const WAKATIME_API_KEY = 
     process.env.
     WAKATIME_API_KEY;
     const response = await 
     fetch('https://wakatime.
     com/api/v1/users/current/
     stats/last_7_days?
     api_key=' + 
     WAKATIME_API_KEY);
     const data = await 
     response.json();
     res.status(200).json
     (data);
   }
   
   // 示例：app/api/wakatime/
   route.js (App Router)
   // import { NextResponse } 
   from 'next/server';
   // export async function 
   GET() {
   //   const 
   WAKATIME_API_KEY = process.
   env.WAKATIME_API_KEY;
   //   const response = 
   await fetch('https://
   wakatime.com/api/v1/users/
   current/stats/last_7_days?
   api_key=' + 
   WAKATIME_API_KEY);
   //   const data = await 
   response.json();
   //   return NextResponse.
   json(data);
   // }
   ```
3. 前端组件调用 ：
   在前端 React 组件中，通过 fetch 或 axios 调用您创建的后端 API 路由来获取数据，并进行展示。
   
   ```
   import React, { useEffect, 
   useState } from 'react';
   
   function WakaTimeStats() {
     const [stats, setStats] 
     = useState(null);
   
     useEffect(() => {
       async function 
       fetchStats() {
         const res = await 
         fetch('/api/
         wakatime'); // 调用后
         端代理路由
         const data = await 
         res.json();
         setStats(data.data);
       }
       fetchStats();
     }, []);
   
     if (!stats) {
       return <div>Loading 
       WakaTime stats...</
       div>;
     }
   
     return (
       <div>
         <h2>WakaTime 编码统计
         </h2>
         <p>总编码时长: {stats.
         human_readable_total}
         </p>
         <p>平均每日编码: 
         {stats.
         human_readable_daily_
         average}</p>
         {/* 更多数据展示 */}
       </div>
     );
   }
   
   export default 
   WakaTimeStats;
   ```
3.2 WakaTime API 集成与展示截图
![WakaTime API 集成与展示截图](images/wakatime-screenshot.png)
4. Next.js 项目结构
本项目遵循 Next.js 的推荐项目结构，主要目录和文件说明如下：

```
my-app/
├── public/             # 静
态资源，如图片、字体
├── src/
│   ├── app/            # 
App Router 模式下的路由和页面
│   │   ├── exercises/  # 存
放旧作业的目录
│   │   │   ├── exercise1/ # 
示例：第一个作业
│   │   │   │   └── page.js
│   │   │   └── exercise2/ # 
示例：第二个作业
│   │   │       └── page.js
│   │   ├── api/        # 后
端 API 路由
│   │   │   └── wakatime/
route.js # WakaTime API 代理
│   │   ├── globals.css # 全
局样式
│   │   ├── layout.js   # 根
布局文件
│   │   └── page.js     # 根
页面文件 (主页)
│   └── components/     # 可
复用 React 组件
├── .env.local          # 环
境变量 (本地开发用，不提交 Git)
├── next.config.ts      # 
Next.js 配置文件
├── package.json        # 项
目依赖和脚本
├── tsconfig.json       # 
TypeScript 配置文件
└── README.md           # 项
目说明文档
```
5. 旧作业整合方式
旧的课程练习作业被系统地整合到 `my-app/src/app/exercises/` 目录下（如果您的 Next.js 项目使用 App Router 模式）或 my-app/pages/exercises/ 目录下（如果使用 Pages Router 模式）。这种整合方式的优势在于：

- 集中管理 ：所有练习作业都位于一个统一的目录下，便于查找、管理和维护。
- 模块化设计 ：每个练习可以是一个独立的 Next.js 页面文件，或者是一个包含多个相关文件（如组件、样式、数据）的子目录。这使得每个练习都是一个独立的模块，互不干扰。
- 易于展示 ：通过在主导航页面（例如 `my-app/src/app/page.js` 或 my-app/pages/index.js ）中动态或静态地列出这些练习的链接，可以方便地构建一个练习导航页，用户可以轻松访问和回顾所有学习成果。
5.1 示例结构
```
my-app/
└── src/
    └── app/
        └── exercises/
            ├── 
            0319-css/       
            # 对应 0319-css.
            html
            │   └── page.js
            ├── 
            0326-css/       
            # 对应 0326-css.
            html
            │   └── page.js
            ├── 
            0402-news/      
            # 对应 0402-news.
            html
            │   └── page.js
            ├── 
            0409-news/      
            # 对应 0409-news.
            html
            │   └── page.js
            ├── 
            0416-async/     
            # 对应 
            0416-async.html
            │   └── page.js
            ├── 
            kehsihua/       
            # 对应 kehsihua.
            html
            │   └── page.js
            ├── 
            mcp-server/     
            # 对应 
            mcp-server.html
            │   └── page.js
            ├── 
            phone-pet-visuali
            zation/ # 对应 
            phone-pet-visuali
            zation.html
            │   └── page.js
            └── 
            yingyu/         
            # 对应 yingyu.
            html
                └── page.js
```
每个旧的 HTML 文件可以被转换为一个独立的 Next.js 页面，放置在 exercises 目录下的对应子目录中。例如， 0319-css.html 可以转换为 my-app/src/app/exercises/0319-css/page.js 。

 5.2 Next.js 组织课程练习作业的运行截图
 ![Next.js 练习导航页截图](images/nextjs-exercise-nav.png)
 ![Next.js 练习详情页截图](images/nextjs-exercise-detail.png)
6. 项目运行指南
在开始之前，请确保您的开发环境已安装以下软件：

- Node.js (推荐 LTS 版本，例如 18.x 或 20.x)
- npm (Node.js 包管理器) 或 Yarn
- Git (用于克隆项目)
 6.1 本地开发环境设置
1. 克隆项目仓库 ：
   打开您的终端或命令提示符，执行以下命令克隆项目到本地：
git clone <repository_url>
cd <repository_name>
```

请将 `<repository_url>` 替换为您的项目 Git 仓库地址，`<repository_name>` 替换为您的项目目录名。

2. 进入 Next.js 应用目录并安装依赖 ：
本项目的主 Next.js 应用位于 my-app/ 子目录中。您需要进入该目录并安装所有必要的依赖。

```bash

cd my-app
npm install # 或者 yarn install
```

3. 配置环境变量 (WakaTime API) ：
   如果您计划使用 WakaTime API 功能，需要在 my-app 目录下创建一个 .env.local 文件，并添加您的 WakaTime API Key。这个文件不会被 Git 追踪，确保您的敏感信息安全。
WAKATIME_API_KEY=your_wakatime_api_key_here
```

请将 `your_wakatime_api_key_here` 替换为您的实际 WakaTime API Key。

6.2 运行项目
1. 启动开发服务器 ：
   在 my-app 目录下，运行开发服务器。这将启动一个本地服务器，并支持热重载，方便开发调试。
npm run dev # 或者 yarn dev
```

项目通常会在 `http://localhost:3000` 启动。您可以在浏览器中打开此地址访问应用。

2. 构建生产版本 (可选) ：
当您准备部署项目时，可以构建一个优化的生产版本。这会生成用于部署的静态文件和服务器端代码。

```bash

npm run build # 或者 yarn build
```

3. 启动生产服务器 (可选) ：
   构建完成后，您可以启动生产服务器来测试或运行生产环境下的应用。
npm run start # 或者 yarn start
```