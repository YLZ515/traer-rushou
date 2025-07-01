import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '5%', left: '10%' }}>🎨</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '15%', right: '15%' }}>✨</div>
      <div className="cute-decoration bounce-animation" style={{ top: '30%', left: '5%' }}>🎯</div>
      <div className="cute-decoration float-animation" style={{ top: '50%', right: '10%' }}>🌟</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '70%', left: '15%' }}>💫</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold cute-title mb-4">
              🎨 CSS 魔法选择器小课堂 🎨
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl bounce-animation">🔍</span>
              <span className="text-2xl wiggle-animation">🎯</span>
              <span className="text-2xl float-animation">✨</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white/70 rounded-full px-6 py-3 border-2 border-yellow-300 shadow-lg">
            🌟 本案例展示了三种最基础的CSS选择器魔法：标签选择器 (h2), 类选择器 (.abstract), 和 ID 选择器 (#CSSbase) 的奇妙效果！
          </p>
        </header>

        <div className="cute-card shadow-2xl">
          <div className="p-6 border-b-2 border-yellow-300 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-t-lg">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="mr-2">🎯</span>
              选择器魔法演示
            </h3>
          </div>
          <div className="p-8 space-y-6 bg-gradient-to-br from-white to-yellow-50">
            <p className="text-gray-700 flex items-center">
              <span className="mr-2">📋</span>
              下面列表中的每一项都由不同方式定义样式：
            </p>
            <div className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg border-2 border-yellow-300 shadow-lg">
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li className="text-green-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                  <span className="font-semibold flex items-center">
                    <span className="mr-2">📁</span>
                    [外部样式表]:
                  </span> 
                  本行文本的样式（如基础颜色、字体）可能由全局 `globals.css` 文件定义。
                </li>
                <li className="text-yellow-600 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400 underline decoration-wavy">
                  <span className="font-semibold flex items-center">
                    <span className="mr-2">📄</span>
                    [内部样式表]:
                  </span> 
                  本行文本的样式（如下划线和颜色）通过页面级样式模拟（在React/Next.js中通常通过CSS-in-JS或模块化CSS实现，此处用Tailwind类模拟）。
                </li>
                <li style={{ color: '#8A2BE2', fontWeight: 'bold' }} className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
                  <span style={{ color: '#FBBF24', textDecoration: 'none' }} className="flex items-center">
                    <span className="mr-2">🎯</span>
                    [内联样式]:
                  </span> 
                  本行文本的样式（紫色和粗体）直接通过 `style` 属性定义，具有最高优先级。
                </li>
              </ul>
            </div>
            
            {/* 创新元素：交互式选择器演示 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-300 shadow-lg">
              <h4 className="font-bold text-blue-700 mb-4 flex items-center">
                <span className="mr-2">🎮</span>
                交互式选择器演示
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-bold text-blue-600 mb-3">🎯 选择器类型</h5>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 rounded bg-blue-100 hover:bg-blue-200 transition-colors text-blue-700 font-mono text-sm">
                      .class-name { /* 类选择器 */ }
                    </button>
                    <button className="w-full text-left p-2 rounded bg-green-100 hover:bg-green-200 transition-colors text-green-700 font-mono text-sm">
                      #id-name { /* ID选择器 */ }
                    </button>
                    <button className="w-full text-left p-2 rounded bg-purple-100 hover:bg-purple-200 transition-colors text-purple-700 font-mono text-sm">
                      element { /* 元素选择器 */ }
                    </button>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-bold text-blue-600 mb-3">🎨 样式效果</h5>
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-gradient-to-r from-yellow-200 to-pink-200 text-gray-800">
                      <span className="font-bold">示例元素</span>
                    </div>
                    <div className="p-2 rounded bg-gradient-to-r from-green-200 to-blue-200 text-gray-800">
                      <span className="font-bold">另一个元素</span>
                    </div>
                    <div className="p-2 rounded bg-gradient-to-r from-purple-200 to-pink-200 text-gray-800">
                      <span className="font-bold">第三个元素</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 添加学习提示 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                <span className="mr-2">💡</span>
                样式优先级小贴士
              </h4>
              <ul className="text-blue-600 space-y-1 text-sm">
                <li>• 🎯 内联样式：优先级最高，就像魔法师的直接施法</li>
                <li>• 📄 内部样式：中等优先级，就像页面级的魔法阵</li>
                <li>• 📁 外部样式：基础优先级，就像全局的魔法规则</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 