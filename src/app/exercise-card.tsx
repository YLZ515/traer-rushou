import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ id, title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/40 via-pink-300/20 to-transparent"></div>
          {/* 可爱装饰角标 */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
            ✨ 练习 {id}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-yellow-50">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
          <span className="mr-2">🎯</span>
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="cute-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <div className="font-bold text-pink-500 group-hover:text-yellow-600 transition-colors duration-300 flex items-center">
            <span className="mr-2">🚀</span>
            开始学习 &rarr;
            <span className="ml-2 group-hover:animate-bounce">🎉</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      {/* 可爱光晕效果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      {/* 主卡片 */}
      <div className="relative cute-card h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl overflow-hidden">
        {/* 可爱装饰边框 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400"></div>
        
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
        
        {/* 可爱装饰元素 */}
        <div className="absolute bottom-2 left-2 text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          🌟
        </div>
        <div className="absolute bottom-2 right-2 text-pink-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          💫
        </div>
      </div>
    </div>
  );
} 