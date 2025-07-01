import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '10%', left: '8%' }}>🎨</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '25%', right: '12%' }}>⚛️</div>
      <div className="cute-decoration bounce-animation" style={{ top: '40%', left: '15%' }}>🏗️</div>
      <div className="cute-decoration float-animation" style={{ top: '65%', right: '8%' }}>✨</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '80%', left: '10%' }}>🌟</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 cute-card shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 relative">
            <Image 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="My App 示例" 
              width={220} 
              height={140} 
              className="rounded-lg shadow-lg border-4 border-yellow-300" 
            />
            {/* 添加可爱的装饰角标 */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
              🎨 创意
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold cute-title mb-2 flex items-center">
              <span className="mr-2">🎨</span>
              My App 创意小应用
            </h2>
            <p className="text-gray-700 mb-2">一个充满创意的 React 应用页面，展示组件化开发的魔法！就像搭积木一样，把各种组件组合成漂亮的应用 🏗️</p>
            <div className="flex gap-2 flex-wrap">
              <span className="cute-tag">⚛️ React</span>
              <span className="cute-tag">🎯 入门</span>
              <span className="cute-tag">🏗️ 组件化</span>
            </div>
          </div>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 cute-title flex items-center">
            <span className="mr-2">🎭</span>
            组件魔法演示区
          </h1>
          <div className="space-y-6">
            <MyAppDemo />
            <MyAppHello />
          </div>
          
          {/* 添加学习提示 */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              组件学习小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 🧩 组件：就像可重复使用的积木块</li>
              <li>• 🎨 Props：组件之间传递信息的方式</li>
              <li>• 🎭 State：组件内部的状态管理</li>
              <li>• 🏗️ 组合：将小组件组合成大应用</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
} 