export default function MyAppDemo() {
  return (
    <div className="cute-card p-6 m-4 border-3 border-yellow-300 bg-gradient-to-br from-yellow-100 to-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
        <span className="mr-2">🎨</span>
        一个可爱的练习卡片
      </h2>
      <p className="text-gray-700 flex items-center">
        <span className="mr-2">✨</span>
        这是我的第一个React组件！就像搭积木一样有趣！
      </p>
      <div className="mt-3 flex space-x-2">
        <span className="cute-tag">🎯 练习</span>
        <span className="cute-tag">⚛️ React</span>
      </div>
    </div>
  );
} 