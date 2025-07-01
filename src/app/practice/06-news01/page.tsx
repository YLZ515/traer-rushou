'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '语文') {
        console.log(`${this.name}正在学习${subject}，真棒！`);
      }
      exam() {
        console.log(`${this.name} 正在考试`);
      }
    }
    const xiaoming = new Student('小明', 7, '实验小学', 1);
    xiaoming.learn('英语');
    xiaoming.exam();

    class Undergraduate extends Student {
      major: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
      }
      intern(corp: string) {
        console.log(`${this.name}在${corp}实习，获得经验值1000`);
        console.log(super.exam());
      }
    }
    const xiaoming2 = new Undergraduate('小明', 17, '科技大学', 1, '新闻学', 0);
    xiaoming2.intern('腾讯');

    // 回调函数，函数作为参数传递给另一个函数
    console.log('111111');
    setTimeout(function () { console.log('222222'); }, 1000);
    console.log('333333');

    // DOM 操作
    if (h1Ref.current) {
      console.log(h1Ref.current);
      h1Ref.current.innerHTML = '🎓 这是来自脚本的动态内容（可点击）';
      h1Ref.current.style.color = '#fbbf24';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('🌟 你好啊！你点击了段落！');
      };
    }
    alert('🎉 页面加载完成');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration float-animation" style={{ top: '8%', left: '10%' }}>🎮</div>
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
            <span className="mr-2">🎓</span>
            小记者学习笔记：类、继承、回调与DOM操作
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
            <li>🌟 本案例演示了 TypeScript 类、继承、回调函数、DOM 操作等基础知识。</li>
            <li>🎉 页面加载后会弹窗提示，并在控制台输出相关信息。</li>
            <li>🎮 你可以点击标题和段落，体验事件绑定与交互。</li>
            <li>🔍 请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto cute-card shadow-2xl p-8">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('🎯 你点我干啥！')}
            className="text-3xl font-bold mb-6 text-center hover:text-yellow-600 cute-title"
          >
            🎓 这是一个标题的原始内容
          </h1>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <Image
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Futuristic campus"
                width={400}
                height={200}
                className="rounded-lg shadow-lg border-4 border-yellow-300"
              />
              {/* 添加可爱的装饰角标 */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                🎓 校园
              </div>
            </div>
            <p ref={pRef} className="text-lg text-gray-700 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg p-4 cursor-pointer hover:bg-gradient-to-r hover:from-pink-200 hover:to-yellow-200 transition-colors border-2 border-yellow-300 shadow-lg font-bold">
              <span className="mr-2">💭</span>
              这是一个段落（点击我试试）
            </p>
          </div>
          
          {/* 添加学习提示 */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              编程小贴士
            </h4>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• 🏗️ 类：就像创建对象的模板，可以重复使用</li>
              <li>• 🧬 继承：子类可以继承父类的属性和方法</li>
              <li>• 🔄 回调：函数可以作为参数传递给其他函数</li>
              <li>• 🎮 DOM操作：可以动态改变网页内容和样式</li>
            </ul>
          </div>
          
          {/* 创新元素：代码编辑器模拟 */}
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 shadow-lg">
            <h4 className="font-bold text-gray-700 mb-4 flex items-center">
              <span className="mr-2">💻</span>
              代码编辑器模拟
            </h4>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="flex items-center mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-xs">student.js</span>
              </div>
              <div className="text-gray-300 space-y-1">
                <div><span className="text-purple-400">class</span> <span className="text-blue-400">Student</span> {'{'} <span className="text-gray-400">{'// 学生类'}</span></div>
                <div className="ml-4"><span className="text-purple-400">constructor</span>(<span className="text-orange-400">name</span>, <span className="text-orange-400">age</span>) {'{'}</div>
                <div className="ml-8"><span className="text-blue-400">this</span>.<span className="text-green-400">name</span> = <span className="text-orange-400">name</span>;</div>
                <div className="ml-8"><span className="text-blue-400">this</span>.<span className="text-green-400">age</span> = <span className="text-orange-400">age</span>;</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"><span className="text-green-400">learn</span>() {'{'}</div>
                <div className="ml-8"><span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-yellow-400">`$&lbrace;this.name&rbrace;正在学习！`</span>);</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
                <div></div>
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">xiaoming</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">Student</span>(<span className="text-yellow-400">&apos;小明&apos;</span>, <span className="text-orange-400">7</span>);</div>
                <div><span className="text-blue-400">xiaoming</span>.<span className="text-green-400">learn</span>(); <span className="text-gray-400">{'// 输出：小明正在学习！'}</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 