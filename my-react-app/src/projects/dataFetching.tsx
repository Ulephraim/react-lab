/** @format */

import { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
  id: number;
  title: string;
}

export default function DataFetch() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });

        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Aborted');
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (error) {
    return <div>Something went wrong, Please try again</div>;
  }

  return (
    <div>
      <h1>Data Fetching in React</h1>
      <button className="page-btn" onClick={() => setPage(page + 1)}>
        Increase Page ({page})
      </button>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
