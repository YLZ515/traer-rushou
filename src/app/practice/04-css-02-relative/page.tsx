import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '5%', left: '8%' }}>🔍</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '15%', right: '10%' }}>📍</div>
      <div className="cute-decoration bounce-animation" style={{ top: '30%', left: '12%' }}>✨</div>
      <div className="cute-decoration float-animation" style={{ top: '50%', right: '8%' }}>🌟</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '70%', left: '15%' }}>💫</div>
      
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
              🔍 CSS 相对定位探秘小课堂 🔍
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl bounce-animation">📍</span>
              <span className="text-2xl wiggle-animation">🔍</span>
              <span className="text-2xl float-animation">✨</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-white/70 rounded-full px-6 py-3 border-2 border-yellow-300 shadow-lg">
            🌟 `position: relative` 使元素相对于其在正常文档流中的原始位置进行偏移，但其原始空间仍被保留！
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Section: Normal Flow */}
          <section className="cute-card shadow-2xl p-8">
            <h2 className="text-2xl font-bold cute-title mb-6 text-center flex items-center justify-center">
              <span className="mr-2">📋</span>
              正常文档流
            </h2>
            <div className="space-y-4 text-gray-700 text-center">
              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 1</div>
              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 2</div>
              <div className="p-4 bg-gradient-to-r from-yellow-300 to-orange-300 border-2 border-yellow-400 rounded-lg shadow-lg font-bold">🎯 元素 3 (将要被定位的元素)</div>
              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 4</div>
            </div>
          </section>

          {/* Section: Relative Positioning */}
          <section className="cute-card shadow-2xl p-8">
             <h2 className="text-2xl font-bold cute-title mb-6 text-center flex items-center justify-center">
               <span className="mr-2">🔍</span>
               相对定位 (Relative)
             </h2>
             <div className="space-y-4 text-gray-700 text-center relative">
              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 1</div>
              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 2</div>
              
              {/* Ghost element showing original position */}
              <div className="p-4 bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-lg text-gray-600">
                👻 元素 3 的原始位置
              </div>

              {/* The relatively positioned element */}
              <div className="p-4 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-lg absolute w-full border-2 border-yellow-400 shadow-lg font-bold" style={{ top: 'calc(8rem + 2rem + 8px)', left: '40px' }}>
                🚀 元素 3 (position: relative; top: ...; left: 40px;)
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg border-2 border-blue-300 shadow-lg">📦 元素 4</div>

              <p className="text-sm text-amber-700 pt-16 text-center bg-gradient-to-r from-amber-100 to-yellow-100 p-4 rounded-lg border-2 border-amber-300">
                <span className="mr-2">💡</span>
                注意：即使元素3被移动，元素4的位置也并未改变，因为元素3在文档流中占据的空间被保留了。
              </p>
            </div>
          </section>
        </div>
        
        <div className="mt-12 cute-card shadow-2xl p-6">
          <h3 className="text-xl font-semibold cute-title mb-4 flex items-center">
            <span className="mr-2">💻</span>
            核心代码
          </h3>
          <pre className="bg-gradient-to-r from-gray-100 to-gray-200 text-sm text-gray-800 p-4 rounded-md overflow-x-auto border-2 border-gray-300 shadow-lg">
            <code>
{`.target-element {
  position: relative;
  top: 50px; /* 相对于原始位置向下移动 50px */
  left: 40px; /* 相对于原始位置向右移动 40px */
}`}
            </code>
          </pre>
          
          {/* 添加学习提示 */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              相对定位小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 📍 relative：元素相对于自己原来的位置进行偏移</li>
              <li>• 👻 空间保留：元素移动后，原来的空间仍然被保留</li>
              <li>• 🎯 不影响其他元素：其他元素的位置不会受到影响</li>
              <li>• 🚀 常用于微调：适合对元素位置进行精确调整</li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
} 