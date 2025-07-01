"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EmbedDemoPage() {
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    // 3秒后隐藏说明框
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '5%', left: '8%' }}>🤖</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '15%', right: '12%' }}>💬</div>
      <div className="cute-decoration bounce-animation" style={{ top: '30%', left: '8%' }}>✨</div>
      <div className="cute-decoration float-animation" style={{ top: '55%', right: '10%' }}>🌟</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '75%', left: '15%' }}>💫</div>
      
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-yellow-100/90 to-pink-100/90 backdrop-blur-md border-b-2 border-yellow-300 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-pink-500 hover:text-yellow-600 text-xl font-bold transition-colors cute-button flex items-center">
                <span className="mr-2">🏠</span>
                返回可爱首页
              </Link>
              <span className="text-lg md:text-2xl font-bold cute-title flex items-center">
                <span className="mr-2">🤖</span>
                QAnything 智能问答小助手
              </span>
            </div>
            <span className="text-gray-600 text-sm hidden md:block flex items-center">
              <span className="mr-2">🎨</span>
              可爱风格嵌入式页面案例
            </span>
          </div>
        </div>
        
        {showInstructions && (
          <section className="max-w-3xl mx-auto mt-24 mb-6 cute-card shadow-xl p-6 relative z-20 animate-fade-in">
            <h2 className="text-xl font-bold cute-title mb-2 flex items-center">
              <span className="mr-2">💡</span>
              小助手使用说明
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-1 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
              <li>🌟 本案例演示了如何在 Next.js 页面中嵌入第三方智能问答服务（QAnything）。</li>
              <li>🎨 顶部悬浮标题区采用可爱风格美化，iframe 区域全屏沉浸式体验。</li>
              <li>💬 如需体验交互，请直接在下方问答区输入问题。</li>
            </ul>
            
            {/* 添加使用提示 */}
            <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-700 mb-1 flex items-center">
                <span className="mr-2">💡</span>
                使用小贴士
              </h4>
              <ul className="text-green-600 space-y-1 text-xs">
                <li>• 🤖 这是一个智能问答机器人，可以回答各种问题</li>
                <li>• 💬 在下方输入框中输入你的问题</li>
                <li>• ⚡ 机器人会快速给出智能回答</li>
                <li>• 🎯 试试问一些有趣的问题吧！</li>
              </ul>
            </div>
          </section>
        )}
        
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="QAnything 问答服务"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10 border-4 border-yellow-300 rounded-t-lg shadow-2xl"
          style={{
            top: showInstructions ? 180 : 80, // 根据说明框显示状态调整位置
            height: showInstructions ? 'calc(100vh - 180px)' : 'calc(100vh - 80px)',
            border: 'none',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 