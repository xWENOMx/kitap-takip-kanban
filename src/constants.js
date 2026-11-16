// Kanban sütunlarının tanımları (id, başlık ve renk sınıfları)
// Tailwind sınıfları tam yazılmalı, dinamik birleştirilmemeli
export const STATUSES = [
  {
    id: "okunacak",
    title: "Okunacak",
    emoji: "📚",
    header: "bg-amber-100 text-amber-800",
    button: "bg-amber-500 hover:bg-amber-600",
    border: "border-amber-400",
  },
  {
    id: "okunuyor",
    title: "Okunuyor",
    emoji: "📖",
    header: "bg-sky-100 text-sky-800",
    button: "bg-sky-500 hover:bg-sky-600",
    border: "border-sky-400",
  },
  {
    id: "bitti",
    title: "Bitti",
    emoji: "✅",
    header: "bg-emerald-100 text-emerald-800",
    button: "bg-emerald-500 hover:bg-emerald-600",
    border: "border-emerald-400",
  },
];
