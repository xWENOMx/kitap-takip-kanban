import { useState } from "react";

export default function AddBookForm({ onAdd }) {
  // Form alanlarının durumu
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Form gönderildiğinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    if (!title.trim() || !author.trim()) return; // Boş kayıtları engelle
    onAdd(title.trim(), author.trim());
    setTitle("");
    setAuthor("");
  };

  const inputClass =
    "flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm " +
    "outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-8 flex max-w-3xl flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row"
    >
      <input
        type="text"
        placeholder="Kitap adı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Yazar adı"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={inputClass}
      />
      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        + Ekle
      </button>
    </form>
  );
}
