'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    const a = 100;
    // alert(a)
    console.log(a);
    const api_key = 'ssssx-=-dddd';
    console.log(api_key);
    console.log(typeof a, typeof api_key, typeof true);
    const b = '1';
    console.log(a + b);
    console.log(a + Number(b));
    const c = '100';
    console.log(typeof a, typeof c);
    console.log(a == c);
    console.log(a === c);
    // 分支语句
    const current_time = '12:20';
    if (current_time == '12:20') {
      console.log('冲啊！');
    } else {
      console.log('假装学习……');
    }
    // for循环
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
    // while循环
    let hug = 60;
    while (hug > 0) {
      console.log('继续干饭……');
      hug = hug - 10;
    }
    // 函数
    function intro() {
      console.log('你好，我是一个脚本！');
    }
    intro();
    function intro2(content: string) {
      console.log('以下是我介绍的内容： ' + String(content));
    }
    console.log(typeof intro2('这是传入的参数'));
    function intro3(content1: string, content2: string) {
      console.log('以下是我介绍的内容： ' + String(content1) + String(content2));
    }
    intro3('参数1', '参数2');
    function intro4(content: string) {
      console.log(content);
      return content + '这是返回值';
    }
    intro4('带返回值的函数');
    const result = intro4('带返回值的函数');
    console.log(result);
    alert('🎉 页面加载完成，查看控制台输出！');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '8%' }}>📰</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '20%', right: '12%' }}>🎭</div>
      <div className="cute-decoration bounce-animation" style={{ top: '35%', left: '12%' }}>💻</div>
      <div className="cute-decoration float-animation" style={{ top: '60%', right: '8%' }}>🚀</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '75%', left: '15%' }}>✨</div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-pink-500 hover:text-yellow-600 transition-colors cute-button">
            <span className="text-2xl font-bold">🏠</span>
            <span>返回可爱首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 cute-card shadow-xl p-8">
          <h2 className="text-2xl font-bold cute-title mb-4 flex items-center">
            <span className="mr-2">🎓</span>
            小记者学习笔记：变量、类型、分支、循环与函数
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 JS/TS 变量、类型判断、分支、循环、函数等基础语法魔法！</li>
            <li>🎉 页面加载后会弹窗提示，并在控制台输出相关信息。</li>
            <li>🔍 请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8 flex flex-col items-center">
          <div className="mb-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Futuristic coding environment"
              width={400}
              height={200}
              className="rounded-lg shadow-lg border-4 border-yellow-300"
            />
            {/* 添加可爱的装饰角标 */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              💻 编程魔法
            </div>
          </div>
          
          <div className="text-lg text-gray-700 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg p-6 text-center border-2 border-yellow-300 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <span className="mr-2">🎭</span>
              <span className="font-bold">小记者提醒</span>
              <span className="ml-2">🎭</span>
            </div>
            （本页无可视内容，查看控制台输出）
            <div className="mt-3 text-sm text-gray-600">
              🌟 记得打开控制台看看我们的JavaScript魔法！
            </div>
          </div>
          
          {/* 添加学习提示 */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              学习小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 🔢 变量：就像给数据起名字的小盒子</li>
              <li>• 🎭 类型：不同的数据类型有不同的魔法</li>
              <li>• 🛤️ 分支：让程序学会做选择</li>
              <li>• 🔄 循环：重复执行的神奇魔法</li>
              <li>• 🎪 函数：可以重复使用的代码块</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
} 