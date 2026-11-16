import BookCard from "./BookCard";

export default function Column({ status, books, onMove, onDelete }) {
  return (
    <section className="flex flex-col rounded-xl bg-slate-100 p-3">
      {/* Sütun başlığı ve kitap sayısı */}
      <header
        className={`mb-3 flex items-center justify-between rounded-lg px-4 py-2 font-semibold ${status.header}`}
      >
        <span>
          {status.emoji} {status.title}
        </span>
        <span className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs">
          {books.length}
        </span>
      </header>

      {/* Kitap kartları listesi */}
      <div className="flex flex-col gap-3">
        {books.length === 0 ? (
          // Sütun boşsa gösterilecek mesaj
          <p className="py-6 text-center text-sm text-slate-400">
            Bu sütunda kitap yok
          </p>
        ) : (
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onMove={onMove}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </section>
  );
}
