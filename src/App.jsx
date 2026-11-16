import useLocalStorage from "./hooks/useLocalStorage";
import AddBookForm from "./components/AddBookForm";
import Column from "./components/Column";
import { STATUSES } from "./constants";

export default function App() {
  // Tüm kitaplar LocalStorage'da "kitaplar" anahtarıyla saklanır
  const [books, setBooks] = useLocalStorage("kitaplar", []);

  // Yeni kitabı "okunacak" durumuyla listeye ekle
  const addBook = (title, author) => {
    const newBook = {
      id: crypto.randomUUID(), // Benzersiz kimlik
      title,
      author,
      status: "okunacak",
    };
    setBooks([...books, newBook]);
  };

  // Kitabın durumunu (sütununu) değiştir
  const moveBook = (id, newStatus) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, status: newStatus } : b)));
  };

  // Kitabı listeden sil
  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-10">
      {/* Başlık alanı */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
          📚 Kitap Takip Panosu
        </h1>
        <p className="mt-2 text-slate-500">
          Okuma yolculuğunu sütunlar arasında takip et
        </p>
      </header>

      {/* Kitap ekleme formu */}
      <AddBookForm onAdd={addBook} />

      {/* Üç sütunlu Kanban alanı (mobilde alt alta dizilir) */}
      <main className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {STATUSES.map((status) => (
          <Column
            key={status.id}
            status={status}
            books={books.filter((b) => b.status === status.id)}
            onMove={moveBook}
            onDelete={deleteBook}
          />
        ))}
      </main>
    </div>
  );
}
