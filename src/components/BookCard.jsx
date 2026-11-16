import { STATUSES } from "../constants";

export default function BookCard({ book, onMove, onDelete }) {
  // Kitabın bulunduğu sütun hariç diğer durumlar için buton üret
  const otherStatuses = STATUSES.filter((s) => s.id !== book.status);
  const current = STATUSES.find((s) => s.id === book.status);

  return (
    <div
      className={`rounded-lg border-l-4 bg-white p-4 shadow-sm transition hover:shadow-md ${current.border}`}
    >
      {/* Kitap bilgileri ve silme butonu */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold leading-snug text-slate-800">
            {book.title}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500">{book.author}</p>
        </div>
        <button
          onClick={() => onDelete(book.id)}
          aria-label="Kitabı sil"
          className="text-slate-300 transition hover:text-red-500"
        >
          ✕
        </button>
      </div>

      {/* Durum değiştirme butonları */}
      <div className="mt-3 flex flex-wrap gap-2">
        {otherStatuses.map((s) => (
          <button
            key={s.id}
            onClick={() => onMove(book.id, s.id)}
            className={`rounded-md px-3 py-1 text-xs font-medium text-white transition ${s.button}`}
          >
            {s.emoji} {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
