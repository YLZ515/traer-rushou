'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('⏰ 111');
    }, 2000);
    console.log('🚀 222');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('⏰ 1111');
          resolve();
        }, 1000);
      });
    }
    getSomething().then(() => {
      console.log('🚀 2222');
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('⏰ 111111');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getSomething2();
      console.log('🚀 222222');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        // 提取每个提交的日期
        const dates = commits.map((commit: { commit: { author: { date: string } } }) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
      }
    }

    function showCommitDatesTable(dates: string[]) {
      let html = '<table class="w-full text-left border-collapse border-2 border-yellow-400 text-gray-800 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-lg">';
      html += '<thead><tr class="bg-gradient-to-r from-yellow-200 to-pink-200"><th class="p-3 border-2 border-yellow-400 font-bold">📋 序号</th><th class="p-3 border-2 border-yellow-400 font-bold">📅 提交日期</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        html += `<tr class="hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 transition-colors"><td class="p-3 border-2 border-yellow-400">${idx + 1}</td><td class="p-3 border-2 border-yellow-400">${date}</td></tr>`;
      });
      html += '</tbody></table>';
      setTableHtml(html);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('所有提交日期:', JSON.stringify(dates));
        showCommitDatesTable(dates);
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
            <span className="mr-2">⏰</span>
            时间魔法师学习笔记：异步编程与API数据获取
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 setTimeout、Promise、async/await、fetch API、DOM 操作等异步编程基础。</li>
            <li>📊 页面加载后会自动获取 GitHub 提交日期并渲染表格。</li>
            <li>🔍 请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center cute-title flex items-center">
            <span className="mr-2">⏰</span>
            JavaScript 异步编程练习
          </h1>
          
          <div className="w-full mb-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              异步编程小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• ⏰ setTimeout：延迟执行，就像定时魔法</li>
              <li>• 🔮 Promise：处理异步操作，就像魔法契约</li>
              <li>• 🎭 async/await：让异步代码看起来像同步，就像优雅的魔法</li>
              <li>• 🌐 fetch API：从网络获取数据，就像远程魔法</li>
            </ul>
          </div>
          
          {/* 创新元素：异步操作进度条 */}
          <div className="w-full mb-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-purple-700 mb-3 flex items-center">
              <span className="mr-2">⚡</span>
              异步操作进度演示
            </h4>
            <div className="space-y-3">
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-bold">⏰ setTimeout 操作</span>
                  <span className="text-purple-500 text-sm">2秒后完成</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-bold">🔮 Promise 操作</span>
                  <span className="text-purple-500 text-sm">1秒后完成</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full animate-pulse" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-bold">🌐 API 请求</span>
                  <span className="text-purple-500 text-sm">正在获取数据...</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full animate-pulse" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="demo" ref={demoRef} className="w-full overflow-x-auto mt-4" dangerouslySetInnerHTML={{ __html: tableHtml }} />
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg border-2 border-yellow-300 text-center">
            <p className="text-gray-700 font-bold">
              <span className="mr-2">📊</span>
              上面的表格展示了从 GitHub API 获取的提交日期数据！
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 