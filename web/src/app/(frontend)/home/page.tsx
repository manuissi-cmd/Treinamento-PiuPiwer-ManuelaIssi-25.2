"use client";

import React, { useState } from "react";
import Sidebar from "../(landing-pages)/_components/Sidebar";

// Tipagem básica do post
type Post = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};

// Posts iniciais (simulação)
const initialPosts: Post[] = [
  {
    id: 1,
    author: "Bruno",
    content: "Bem-vindos ao PiuPiwer! Animado pra ver os projetos de vocês 🚀",
    createdAt: "há 2 h",
  },
  {
    id: 2,
    author: "Rafa Macedo",
    content:
      "Dica: tentem separar bem componentes e páginas, isso ajuda MUITO depois 😉",
    createdAt: "há 4 h",
  },
  {
    id: 3,
    author: "Usuária de Teste",
    content: "Primeiro piu da Noctiluz aqui! ✨",
    createdAt: "há 1 dia",
  },
];

// Carrossel simples de notícias
function NewsCarousel() {
  const news = [
    {
      id: 1,
      title: "Novidade no PiuPiwer",
      description:
        "Agora você pode acompanhar os posts da comunidade em tempo real.",
    },
    {
      id: 2,
      title: "Dica de produtividade",
      description:
        "Separe um tempo fixo diário para treinar código. A consistência importa mais que o volume.",
    },
    {
      id: 3,
      title: "Comunidade Noctiluz",
      description:
        "Compartilhe seu aprendizado, dúvidas e conquistas com outros estudantes.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % news.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + news.length) % news.length);

  const current = news[index];

  return (
    <div className="w-full rounded-xl bg-white/80 shadow-sm p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-pink-800">
          Notícias da comunidade
        </h2>
        <span className="text-xs text-gray-500">
          {index + 1} / {news.length}
        </span>
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-800">
          {current.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{current.description}</p>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button
          onClick={prev}
          className="text-xs border rounded px-2 py-1 hover:bg-gray-50"
        >
          ← anterior
        </button>
        <button
          onClick={next}
          className="text-xs border rounded px-2 py-1 hover:bg-gray-50"
        >
          próxima →
        </button>
      </div>
    </div>
  );
}

// Card de post
function PostCard({ post }: { post: Post }) {
  return (
    <article className="w-full rounded-xl bg-white/80 shadow-sm p-4">
      <header className="flex items-center gap-3 mb-2">
        <div className="h-9 w-9 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-semibold">
          {post.author.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
          <p className="text-xs text-gray-500">{post.createdAt}</p>
        </div>
      </header>

      <p className="text-sm text-gray-800 whitespace-pre-line">
        {post.content}
      </p>
    </article>
  );
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState("");

  function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    const content = newPost.trim();
    if (!content) return;

    const post: Post = {
      id: Date.now(),
      author: "Você",
      content,
      createdAt: "agora mesmo",
    };

    setPosts((prev) => [post, ...prev]);
    setNewPost("");
  }

  return (
    <Sidebar>
      <div className="min-h-screen flex justify-center px-4 md:px-8 py-8 bg-[#ffeef9]">
        <div className="w-full max-w-3xl space-y-8">
          {/* cabeçalho */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-800">
              Bem-vindo(a) à Noctiluz
            </h1>
            <p className="mt-3 text-base md:text-lg text-gray-700">
              Aqui começa sua nova jornada de aprendizado! ✨
            </p>
          </section>

          {/* carrossel */}
          <NewsCarousel />

          {/* criar post */}
          <section className="w-full rounded-xl bg-white/80 shadow-sm p-4 flex gap-3">
            <div className="h-10 w-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-semibold mt-1">
              V
            </div>
            <form
              onSubmit={handleCreatePost}
              className="flex-1 flex flex-col gap-3"
            >
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="O que você quer compartilhar hoje?"
                className="w-full min-h-[70px] resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white/80"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-pink-600 text-white hover:bg-pink-700 transition"
                >
                  Piu!
                </button>
              </div>
            </form>
          </section>

          {/* feed */}
          <section className="space-y-3 pb-10">
            {posts.length === 0 ? (
              <p className="text-center text-sm text-gray-500">
                Ainda não há posts. Seja a primeira pessoa a publicar! ✨
              </p>
            ) : (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            )}
          </section>
        </div>
      </div>
    </Sidebar>
  );
}
