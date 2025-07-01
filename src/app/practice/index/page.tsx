import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '10%' }}>📝</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '20%', right: '12%' }}>🔗</div>
      <div className="cute-decoration bounce-animation" style={{ top: '35%', left: '8%' }}>📋</div>
      <div className="cute-decoration float-animation" style={{ top: '55%', right: '10%' }}>🖼️</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '75%', left: '15%' }}>📊</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 cute-card shadow-xl p-8">
          <h2 className="text-2xl font-bold cute-title mb-4 flex items-center">
            <span className="mr-2">📝</span>
            HTML 标签魔法师小课堂
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 HTML 的常用标签，包括标题、段落、超链接、列表、图片、表格和表单。</li>
            <li>🎮 所有元素均可交互体验，表单可直接提交。</li>
            <li>🎨 每个标签都有可爱的样式和动画效果！</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 cute-title flex items-center">
            <span className="mr-2">🎯</span>
            一级标题
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-lg border-2 border-yellow-300 shadow-lg">
              <span className="mr-2">📄</span>
              段落标记，a是行内元素，效果是这样的，
              <a href="https://yangzh.cn" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-yellow-600 font-bold underline decoration-wavy decoration-pink-300 hover:decoration-yellow-400 transition-all duration-300">
                🌐 这是一个超链接地址
              </a>
              <span className="ml-2">✨</span>
            </p>
            
            <ol className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border-2 border-blue-300 shadow-lg">
              <li className="text-gray-700 mb-2 flex items-center">
                <span className="mr-2">1️⃣</span>
                这是列表
              </li>
              <li className="text-gray-700 mb-2 flex items-center">
                <span className="mr-2">2️⃣</span>
                这是列表
              </li>
              <li className="text-gray-700 mb-2 flex items-center">
                <span className="mr-2">3️⃣</span>
                这是列表
              </li>
              <li className="text-gray-700 mb-2 flex items-center">
                <span className="mr-2">4️⃣</span>
                这是列表
              </li>
            </ol>
            
            <div className="flex gap-4 flex-wrap items-center justify-center my-6">
              <div className="relative group">
                <Image 
                  src="/practice/images/th.jpg" 
                  alt="图片替代说明文字" 
                  width={200} 
                  height={120}
                  className="rounded-lg shadow-lg border-4 border-yellow-300 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2" 
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  🖼️ 本地
                </div>
              </div>
              <div className="relative group">
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="未来风格示例图片" 
                  width={200} 
                  height={120}
                  className="rounded-lg shadow-lg border-4 border-pink-300 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2" 
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  🌐 网络
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-yellow-400 text-gray-800 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-lg">
                <tbody>
                  <tr className="bg-gradient-to-r from-yellow-200 to-pink-200">
                    <td className="border-2 border-yellow-400 p-3 font-bold">📊 单元格1</td>
                    <td className="border-2 border-yellow-400 p-3 font-bold">📊 单元格2</td>
                    <td className="border-2 border-yellow-400 p-3 font-bold">📊 单元格3</td>
                  </tr>
                  <tr className="hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 transition-colors">
                    <td className="border-2 border-yellow-400 p-3">🎯 数据1</td>
                    <td className="border-2 border-yellow-400 p-3">🎯 数据2</td>
                    <td className="border-2 border-yellow-400 p-3">🎯 数据3</td>
                  </tr>
                  <tr className="hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 transition-colors">
                    <td className="border-2 border-yellow-400 p-3">🌟 数据4</td>
                    <td className="border-2 border-yellow-400 p-3">🌟 数据5</td>
                    <td className="border-2 border-yellow-400 p-3">🌟 数据6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <form action="https://search.douban.com/book/subject_search" method="get" className="mt-6 flex gap-2 items-center bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-300 shadow-lg">
              <input 
                type="text" 
                name="search_text" 
                className="px-4 py-2 rounded-lg bg-white border-2 border-yellow-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition-all duration-300 flex-1" 
                placeholder="🔍 豆瓣图书搜索..." 
              />
              <button 
                type="submit" 
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold hover:from-yellow-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 搜索
              </button>
            </form>
          </div>
          
          {/* 创新元素：交互式标签学习卡片 */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300 shadow-lg">
            <h4 className="font-bold text-purple-700 mb-4 flex items-center">
              <span className="mr-2">💡</span>
              HTML 标签学习小贴士
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-600 mb-2">📝 文本标签</h5>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• &lt;h1&gt; - 一级标题</li>
                  <li>• &lt;p&gt; - 段落文本</li>
                  <li>• &lt;a&gt; - 超链接</li>
                </ul>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-600 mb-2">📊 结构标签</h5>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• &lt;table&gt; - 表格</li>
                  <li>• &lt;ol&gt; - 有序列表</li>
                  <li>• &lt;form&gt; - 表单</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 