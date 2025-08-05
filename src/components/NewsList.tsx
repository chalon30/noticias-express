'use client';

import { NewsArticle } from '@/types/news';
import Image from 'next/image';

interface NewsListProps {
  articles: NewsArticle[];
}

export default function NewsList({ articles }: NewsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <article
          key={index}
          className="flex flex-col bg-white border rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
        >
          {article.image_url ? (
            <div className="relative w-full h-48">
              <Image
                src={article.image_url}
                alt={article.title || 'Imagen de noticia'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm italic">
              Imagen no disponible
            </div>
          )}

          <div className="flex flex-col p-4 flex-1">
            <h2 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-1">
              {article.title}
            </h2>

            {article.pubDate && (
              <p className="text-xs text-gray-500 mb-2">
                {new Date(article.pubDate).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            )}

            {article.description && (
              <p className="text-sm text-gray-700 line-clamp-3 mb-4">{article.description}</p>
            )}

            <div className="mt-auto">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Leer más →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
