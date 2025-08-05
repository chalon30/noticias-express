const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

const BASE_URL = 'https://newsdata.io/api/1/news';

export interface NewsArticle {
  title: string;
  link: string;
  description?: string;
  pubDate?: string;
  source_id?: string;
  image_url?: string;
}

export const fetchNews = async (query: string = 'technology'): Promise<NewsArticle[]> => {
  try {
    if (!API_KEY) throw new Error('API key no definida en el entorno');

    const url = `${BASE_URL}?apikey=${API_KEY}&q=${query}&language=es`;
    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error HTTP ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

