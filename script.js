const quotes = [
  "Kamu luar biasa, jangan lupa itu!",
  "Nitaa, willy adaa kok untuk nitaaa jadi ceritaakan aja semua yang mau nita cerita ke willyy yaaa",
  "Semua perjuangan kamu tuh berharga, jangan pernah ragu sama diri sendiri.",
  "Pelan-pelan nggak apa-apa, yang penting terus jalan.",
  "Dunia mungkin capek, tapi senyuman kamu bikin semuanya terasa ringan.",
  "Nitaa, kamu pantas untuk bahagia, setiap hari.",
  "Kamu nggak perlu jadi sempurna buat layak dicintai.",
  "Istirahat itu bukan lemah, tapi bentuk sayang ke diri sendiri."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  alert(quotes[randomIndex]);
}
