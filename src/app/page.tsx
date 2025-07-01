import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-200/90 to-pink-200/90 backdrop-blur-md text-gray-800 p-4 shadow-lg w-full z-50 border-b-4 border-yellow-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-pink-500 transition-colors duration-300 tracking-wider flex items-center">
          <span className="mr-2">🌟</span>
          可爱学习平台
          <span className="ml-2">🌟</span>
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-pink-500 transition-colors duration-300 flex items-center">
            <span className="mr-1">🏠</span>首页
          </Link>
          <Link href="/archive" className="hover:text-pink-500 transition-colors duration-300 flex items-center">
            <span className="mr-1">📚</span>归档
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 text-gray-800 items-center overflow-hidden relative">
      {/* 可爱装饰元素 */}
      <div className="cute-decoration" style={{ top: '10%', left: '5%' }}>🌸</div>
      <div className="cute-decoration float-animation" style={{ top: '15%', right: '10%' }}>⭐</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '30%', left: '15%' }}>🎈</div>
      <div className="cute-decoration bounce-animation" style={{ top: '25%', right: '20%' }}>🌈</div>
      <div className="cute-decoration float-animation" style={{ top: '50%', left: '8%' }}>🍀</div>
      <div className="cute-decoration wiggle-animation" style={{ top: '60%', right: '15%' }}>🎪</div>
      <div className="cute-decoration bounce-animation" style={{ top: '70%', left: '12%' }}>🎨</div>
      <div className="cute-decoration float-animation" style={{ top: '80%', right: '8%' }}>🎭</div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold cute-title mb-6 drop-shadow-lg">
              🎓 Web前端学习之旅 🎓
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-3xl bounce-animation">🚀</span>
              <span className="text-3xl wiggle-animation">💻</span>
              <span className="text-3xl float-animation">🎯</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-wide bg-white/70 rounded-full px-8 py-4 border-2 border-yellow-300 shadow-lg">
            🌟 让我们一起在编程的世界里快乐学习，创造美好的数字世界！ 🌟
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
