// app/page.tsx
import { fetchNews } from '@/lib/newsApi';
import { NewsArticle } from '@/types/news';
import NewsList from '@/components/NewsList';

export default async function Home() {
  const articles: NewsArticle[] = await fetchNews('tecnología');

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <NewsList articles={articles} />
    </main>
  );
}
