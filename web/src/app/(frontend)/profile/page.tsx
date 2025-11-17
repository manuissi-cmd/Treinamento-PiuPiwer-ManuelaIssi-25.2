'use client';
import { useEffect, useState } from 'react';
import { api, Post, UserStats } from "../../../services/api";

 
export default function ProfilePage(){
  const [stats,setStats]=useState<UserStats| null>(null);
  const [posts,setPosts]=useState<Post[]>([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{ (async()=>{
    try{
      const [s,p]=await Promise.all([api.getMyStats(), api.getMyPosts()]);
      setStats(s); setPosts(p);
    } finally { setLoading(false); }
  })(); },[]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Meu Perfil</h1>
      <section className="grid grid-cols-3 gap-3">
        <div className="border rounded p-4"><div className="text-sm text-gray-500">Posts</div><div className="text-2xl">{stats?.posts ?? '-'}</div></div>
        <div className="border rounded p-4"><div className="text-sm text-gray-500">Seguidores</div><div className="text-2xl">{stats?.followers ?? '-'}</div></div>
        <div className="border rounded p-4"><div className="text-sm text-gray-500">Seguindo</div><div className="text-2xl">{stats?.following ?? '-'}</div></div>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Meus posts</h2>
        {loading && <p className="text-sm text-gray-500">Carregando…</p>}
        {!loading && posts.length===0 && <p className="text-sm text-gray-500">Você ainda não publicou nada.</p>}
        {posts.map(p=>(
          <article key={p.id} className="border rounded p-3">
            <div className="text-sm text-gray-500">{new Date(p.createdAt).toLocaleString()}</div>
            <p className="mt-2">{p.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
