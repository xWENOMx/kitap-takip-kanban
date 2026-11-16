import { useState, useEffect } from "react";

// useState gibi çalışır, ancak değeri LocalStorage ile senkron tutar
export default function useLocalStorage(key, initialValue) {
  // İlk açılışta LocalStorage'dan veriyi oku (yoksa başlangıç değerini kullan)
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue; // Bozuk veri olursa uygulama çökmesin
    }
  });

  // Değer her değiştiğinde LocalStorage'a yaz
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error("LocalStorage'a yazılamadı");
    }
  }, [key, value]);

  return [value, setValue];
}
