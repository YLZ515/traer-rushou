import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '10%' }}>🎯</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '20%', right: '12%' }}>📍</div>
      <div className="cute-decoration bounce-animation" style={{ top: '35%', left: '8%' }}>✨</div>
      <div className="cute-decoration float-animation" style={{ top: '55%', right: '15%' }}>🌟</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '75%', left: '12%' }}>💫</div>
      
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
              🎯 CSS 定位魔法师小课堂 🎯
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl bounce-animation">📍</span>
              <span className="text-2xl wiggle-animation">🎯</span>
              <span className="text-2xl float-animation">✨</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-white/70 rounded-full px-6 py-3 border-2 border-yellow-300 shadow-lg">
            🌟 本页通过交互式示例，演示CSS中 `position` 属性的几个关键值：`static`、`relative`、`absolute` 和 `fixed`！
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section: Relative vs Absolute */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-3xl font-bold cute-title mb-2 border-l-4 border-yellow-400 pl-4 flex items-center">
              <span className="mr-2">🎯</span>
              Relative (相对) vs Absolute (绝对)
            </h2>
            <p className="text-gray-700 mb-8 pl-5 flex items-start">
              <span className="mr-2 mt-1">💡</span>
              `absolute` 定位的元素会相对于其最近的、非 `static` 定位的祖先元素进行定位。如果找不到，则相对于初始包含块（通常是 &lt;html&gt;）。
            </p>
            
            <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-10 rounded-lg h-80 relative border-2 border-dashed border-yellow-400 shadow-lg">
              <div className="absolute top-4 left-4 text-xs text-gray-600 bg-white/70 px-2 py-1 rounded-full">🏠 父容器 (position: relative)</div>
              
              <div className="w-48 h-24 bg-gradient-to-br from-blue-200 to-purple-200 border-2 border-blue-400 rounded-lg p-4 text-center shadow-lg">
                <p className="font-bold text-gray-800">📦 默认位置的元素</p>
                <p className="text-sm text-gray-600">(position: static)</p>
              </div>

              <div className="w-48 h-24 bg-gradient-to-br from-pink-300 to-red-300 border-2 border-pink-500 rounded-lg p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
                <p className="font-bold text-gray-800">🎯 绝对定位的元素</p>
                <p className="text-sm text-gray-700">(position: absolute)</p>
                <p className="text-xs text-gray-600">top: 50%; left: 50%</p>
              </div>

               <div className="w-48 h-24 bg-gradient-to-br from-green-300 to-blue-300 border-2 border-green-500 rounded-lg p-4 text-center absolute bottom-4 right-4 shadow-lg">
                <p className="font-bold text-gray-800">🌟 另一个绝对定位元素</p>
                <p className="text-sm text-gray-700">(position: absolute)</p>
                <p className="text-xs text-gray-600">bottom: 1rem; right: 1rem</p>
              </div>
            </div>
          </section>

          {/* Section: Fixed */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-3xl font-bold cute-title mb-2 border-l-4 border-pink-400 pl-4 flex items-center">
              <span className="mr-2">📌</span>
              Fixed (固定)
            </h2>
            <p className="text-gray-700 mb-8 pl-5 flex items-start">
              <span className="mr-2 mt-1">💡</span>
              `fixed` 定位的元素会相对于浏览器视口（viewport）进行定位，这意味着即使页面滚动，它也会停留在同一的位置。
            </p>
            
            <div className="h-48 flex justify-center items-center bg-gradient-to-r from-purple-100 to-pink-100 p-10 rounded-lg border-2 border-purple-300 shadow-lg">
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">📜</span>
                  向下滚动页面，观察右下角的固定元素。
                </p>
            </div>
            
            {/* 添加学习提示 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                <span className="mr-2">💡</span>
                定位小贴士
              </h4>
              <ul className="text-blue-600 space-y-1 text-sm">
                <li>• 📍 static：默认定位，元素按正常文档流排列</li>
                <li>• 🎯 relative：相对定位，相对于自己原来的位置偏移</li>
                <li>• 🌟 absolute：绝对定位，相对于最近的定位祖先元素</li>
                <li>• 📌 fixed：固定定位，相对于浏览器视口，不随滚动移动</li>
              </ul>
            </div>
          </section>

        </div>

        {/* Add some space to allow for scrolling */}
        <div className="h-96"></div>

      </main>
      
      {/* This is the fixed element */}
      <div className="fixed bottom-10 right-10 w-40 h-16 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-800 font-bold rounded-lg shadow-2xl shadow-yellow-500/50 flex justify-center items-center z-50 animate-pulse border-2 border-yellow-300">
        <span className="mr-2">📌</span>
        我是固定的!
      </div>
    </div>
  );
} 