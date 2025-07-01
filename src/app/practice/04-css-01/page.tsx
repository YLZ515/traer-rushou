import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '5%', left: '8%' }}>📦</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '15%', right: '12%' }}>🎯</div>
      <div className="cute-decoration bounce-animation" style={{ top: '30%', left: '10%' }}>🎨</div>
      <div className="cute-decoration float-animation" style={{ top: '50%', right: '8%' }}>✨</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '70%', left: '15%' }}>🌟</div>
      <div className="cute-decoration bounce-animation" style={{ top: '85%', right: '15%' }}>💫</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold cute-title mb-4">
              🎨 CSS 核心概念魔法学院 🎨
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl bounce-animation">📦</span>
              <span className="text-2xl wiggle-animation">🎯</span>
              <span className="text-2xl float-animation">✨</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-white/70 rounded-full px-6 py-3 border-2 border-yellow-300 shadow-lg">
            🌟 本页展示了CSS中几个核心概念：盒模型、布局系统（Display & Flexbox）以及过渡动画！
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section: Box Model */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-3xl font-bold cute-title mb-6 border-l-4 border-yellow-400 pl-4 flex items-center">
              <span className="mr-2">📦</span>
              盒模型 (Box Model)
            </h2>
            <p className="text-gray-700 mb-8 flex items-start">
              <span className="mr-2 mt-1">💡</span>
              CSS盒模型描述了元素如何被渲染。它由内到外包括：内容(content)、内边距(padding)、边框(border)和外边距(margin)。
            </p>
            <div className="flex justify-center items-center bg-gradient-to-r from-yellow-100 to-pink-100 p-10 rounded-lg border-2 border-yellow-300">
              <div className="bg-gradient-to-br from-yellow-200 to-pink-200 p-5 text-center shadow-lg" style={{ margin: '2rem' }}>
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 p-5 rounded-lg" style={{ border: '3px dashed #fbbf24' }}>
                  <div className="bg-gradient-to-br from-yellow-300 to-orange-300 text-gray-800 p-10 rounded-lg font-bold">
                    🎯 内容区域
                  </div>
                </div>
              </div>
            </div>
            
            {/* 创新元素：交互式盒模型演示 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300 shadow-lg">
              <h4 className="font-bold text-green-700 mb-4 flex items-center">
                <span className="mr-2">🎮</span>
                交互式盒模型演示
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-lg border border-green-200">
                  <h5 className="font-bold text-green-600 mb-3">📦 点击查看各部分</h5>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 rounded bg-yellow-100 hover:bg-yellow-200 transition-colors text-yellow-700 font-mono text-sm">
                      margin: 外边距
                    </button>
                    <button className="w-full text-left p-2 rounded bg-pink-100 hover:bg-pink-200 transition-colors text-pink-700 font-mono text-sm">
                      border: 边框
                    </button>
                    <button className="w-full text-left p-2 rounded bg-purple-100 hover:bg-purple-200 transition-colors text-purple-700 font-mono text-sm">
                      padding: 内边距
                    </button>
                    <button className="w-full text-left p-2 rounded bg-orange-100 hover:bg-orange-200 transition-colors text-orange-700 font-mono text-sm">
                      content: 内容
                    </button>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-green-200">
                  <h5 className="font-bold text-green-600 mb-3">🎨 实时效果</h5>
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-gradient-to-r from-yellow-200 to-pink-200 text-gray-800 text-center">
                      <span className="font-bold">点击上方按钮查看效果</span>
                    </div>
                    <div className="p-2 rounded bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 text-center">
                      <span className="font-bold">盒模型各部分的作用</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 text-sm text-gray-600 bg-white/70 rounded-lg p-4 border-2 border-yellow-300">
              <p className="flex items-center justify-center">
                <span className="mr-2">📋</span>
                外圈: Margin (外边距) → 中圈: Border (边框) → 内圈: Padding (内边距) → 核心: Content (内容)
              </p>
            </div>
          </section>

          {/* Section: Layout */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-3xl font-bold cute-title mb-6 border-l-4 border-pink-400 pl-4 flex items-center">
              <span className="mr-2">🎯</span>
              布局 (Layout)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="mr-2">📝</span>
                  Display: inline
                </h3>
                <p className="text-gray-700 mb-4">`display: inline` 使块级元素（如`p`）像文本一样在一行内排列。</p>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border-2 border-blue-300">
                  <p className="inline bg-gradient-to-r from-blue-300 to-purple-300 p-2 rounded text-white font-bold">元素一</p>
                  <p className="inline bg-gradient-to-r from-blue-300 to-purple-300 p-2 rounded text-white font-bold mx-2">元素二</p>
                  <p className="inline bg-gradient-to-r from-blue-300 to-purple-300 p-2 rounded text-white font-bold">元素三</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="mr-2">🎪</span>
                  Display: flex (Flexbox)
                </h3>
                <p className="text-gray-700 mb-4">`display: flex` 是一种强大的一维布局模型，可以轻松对齐和分布元素。</p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg flex justify-around items-center border-2 border-green-300">
                  <p className="bg-gradient-to-r from-green-300 to-blue-300 p-3 rounded text-white font-bold">Flex子项1</p>
                  <p className="bg-gradient-to-r from-green-300 to-blue-300 p-3 rounded text-white font-bold">Flex子项2</p>
                  <p className="bg-gradient-to-r from-green-300 to-blue-300 p-3 rounded text-white font-bold">Flex子项3</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Animation */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-3xl font-bold cute-title mb-6 border-l-4 border-orange-400 pl-4 flex items-center">
              <span className="mr-2">✨</span>
              过渡动画 (Transition)
            </h2>
            <p className="text-gray-700 mb-8 flex items-start">
              <span className="mr-2 mt-1">🎭</span>
              通过 `transition` 属性，可以为CSS属性的变化添加平滑的动画效果。将鼠标悬停在下面的方块上查看效果。
            </p>
            <div className="flex justify-center items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-pink-300 flex justify-center items-center text-gray-800 font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-pink-400 hover:to-purple-400 hover:text-white hover:rounded-full hover:scale-110 hover:rotate-180 shadow-lg border-2 border-yellow-400 hover:border-pink-400">
                <span className="group-hover:hidden">悬停我</span>
                <span className="hidden group-hover:block">🎉</span>
              </div>
            </div>
            
            {/* 添加学习提示 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                <span className="mr-2">💡</span>
                动画小贴士
              </h4>
              <ul className="text-orange-600 space-y-1 text-sm">
                <li>• 🎭 transition：让元素变化更平滑，就像魔法师的优雅施法</li>
                <li>• ⏱️ duration：控制动画时长，就像魔法咒语的吟唱时间</li>
                <li>• 🎪 ease：控制动画节奏，就像舞蹈的韵律感</li>
              </ul>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 