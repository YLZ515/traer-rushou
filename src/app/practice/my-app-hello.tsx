export default function MyAppHello() {
  return (
    <div className="cute-card p-6 m-4 border-3 border-pink-300 bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
      <p className="text-gray-700 text-lg flex items-center">
        <span className="mr-2">🌟</span>
        这是来自自定义组件中的内容！每个组件都有自己的魔法！
      </p>
      <div className="mt-3 flex space-x-2">
        <span className="cute-tag">🎭 自定义</span>
        <span className="cute-tag">✨ 魔法</span>
      </div>
    </div>
  );
} 