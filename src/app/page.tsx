'use client';

import { useEffect, useState } from 'react';
import NewsFilter from '@/components/NewsFilter';
import NewsList from '@/components/NewsList';
import { NewsArticle } from '@/types/news';
import { fetchNews } from '@/lib/newsApi';

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      const news = await fetchNews(category);

      // Filtrar noticias repetidas por título
      const uniqueArticles = news.filter(
        (article, index, self) =>
          article.title &&
          index === self.findIndex((a) => a.title === article.title)
      );

      // Filtrar solo noticias con imagen segura (HTTPS)
      const httpsArticles = uniqueArticles.filter(
        (article) =>
          article.image_url?.startsWith('https://') ?? false
      );

      setArticles(httpsArticles);
    };

    getArticles();
  }, [category]);

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <NewsFilter
        onFilter={(selectedCategory) => {
          setCategory(selectedCategory);
        }}
      />
      <NewsList articles={articles} />
    </main>
  );
}
