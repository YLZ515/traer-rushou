'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 类和对象
    class Car {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`🚗 汽车 ${this.brand} ${this.model} 启动了`);
      }
      stop() {
        console.log(`🛑 汽车 ${this.brand} ${this.model} 停止了`);
      }
    }
    const myCar = new Car('Mi', 'Yu7', 2025);
    myCar.start();
    myCar.stop();

    class ElectricCar extends Car {
      range: number;
      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }
      charge() {
        console.log(`⚡ 电动汽车 ${this.brand} ${this.model} 正在充电`);
      }
    }
    const myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    myElectricCar.start();
    myElectricCar.charge();

    // 回调函数练习
    console.log('111111');
    setTimeout(function () {
      console.log('22222');
    }, 2000);
    console.log('333333');

    // DOM 操作
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '🚀 这是从脚本动态更改的内容（点击我试试）';
      divRef.current.onclick = function () {
        alert('🌟 我也被点击了！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '10%' }}>🏗️</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '20%', right: '12%' }}>📰</div>
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
            <span className="mr-2">🏗️</span>
            小记者建筑师笔记：类、继承、回调与DOM操作
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 TypeScript 类、继承、回调函数、DOM 操作等基础知识。</li>
            <li>🔍 页面加载后请按 F12 打开浏览器控制台，观察输出。</li>
            <li>🎮 你可以点击标题和下方内容，体验事件绑定与交互。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8 flex flex-col items-center">
          <div className="relative mb-6">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Futuristic car"
              width={400}
              height={200}
              className="rounded-lg shadow-lg border-4 border-yellow-300"
            />
            {/* 添加可爱的装饰角标 */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              🚗 汽车
            </div>
          </div>
          
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('🎯 我被点击了！')}
            className="text-3xl font-bold mb-6 text-center hover:text-yellow-600 cute-title"
          >
            🚀 JavaScript 语法（点击我试试）
          </h1>
          
          <div
            ref={divRef}
            className="text-lg text-gray-700 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg p-4 text-center cursor-pointer hover:bg-gradient-to-r hover:from-pink-200 hover:to-yellow-200 transition-colors border-2 border-yellow-300 shadow-lg font-bold"
          >
            <span className="mr-2">💭</span>
            div content
          </div>
          
          {/* 添加学习提示 */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300 w-full">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              建筑师编程小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 🏗️ 类：就像建筑图纸，可以创建多个相似的对象</li>
              <li>• 🧬 继承：子类可以继承父类的功能，就像建筑风格的传承</li>
              <li>• 🔄 回调：函数可以延迟执行，就像定时任务</li>
              <li>• 🎮 DOM操作：可以动态改变网页，就像实时装修</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
} 