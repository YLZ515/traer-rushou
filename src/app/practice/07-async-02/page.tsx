'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('⏰ 111111');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('🚀 Async function finished successfully with result:', result)
    );
    console.log('🚀 2222222');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('最后一次推送日期:', date);
      setLastPushDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '10%' }}>⏰</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '20%', right: '12%' }}>🔮</div>
      <div className="cute-decoration bounce-animation" style={{ top: '35%', left: '8%' }}>🎭</div>
      <div className="cute-decoration float-animation" style={{ top: '55%', right: '10%' }}>✨</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '75%', left: '15%' }}>🌟</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 cute-card shadow-xl p-8">
          <h2 className="text-2xl font-bold cute-title mb-4 flex items-center">
            <span className="mr-2">🔮</span>
            时间魔法师进阶笔记：异步编程与API数据获取
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 async/await、Promise、fetch API、DOM 操作等异步编程基础。</li>
            <li>📅 页面加载后会自动获取 GitHub 仓库的最后一次推送日期。</li>
            <li>🔍 请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center cute-title flex items-center">
            <span className="mr-2">🔮</span>
            JavaScript 异步编程练习
          </h1>
          
          <div className="w-full mb-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              异步编程进阶小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 🔮 async/await：让异步代码更易读，就像优雅的魔法咒语</li>
              <li>• ⏰ Promise：处理异步操作的结果，就像魔法契约</li>
              <li>• 🌐 fetch API：从网络获取数据，就像远程魔法</li>
              <li>• 📅 状态管理：使用 useState 管理异步数据，就像魔法书</li>
            </ul>
          </div>
          
          <div
            id="demo"
            ref={demoRef}
            className="text-lg text-gray-700 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg p-6 text-center w-full mt-4 border-2 border-yellow-300 shadow-lg font-bold"
          >
            {lastPushDate ? (
              <div className="flex items-center justify-center">
                <span className="mr-2">📅</span>
                <span>最后一次推送日期: </span>
                <span className="text-yellow-600 font-mono ml-2 bg-yellow-200 px-3 py-1 rounded-lg border border-yellow-400">
                  {lastPushDate}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="mr-2">⏳</span>
                <span className="text-gray-600">正在获取数据...</span>
              </div>
            )}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300 text-center">
            <p className="text-gray-700 font-bold">
              <span className="mr-2">🎯</span>
              这个日期显示了仓库最后一次更新的时间！
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 