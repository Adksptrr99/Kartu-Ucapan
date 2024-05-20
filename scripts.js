const quotes = [
    "Selamat ulang tahun! Semoga harimu penuh dengan kebahagiaan.",
    "Selamat atas kelulusanmu! Semoga sukses selalu menyertaimu.",
    "Semoga hari ini menjadi awal dari kesuksesanmu.",
    "Jangan pernah menyerah, karena yang terbaik masih akan datang.",
    "Selamat atas pekerjaan barumu! Semoga sukses di tempat yang baru.",
    "Hari ini adalah kesempatanmu untuk bersinar. Lakukan yang terbaik!",
    "Semoga cinta dan kebahagiaan selalu menyertaimu.",
    "Selamat menempuh hidup baru! Semoga bahagia selalu.",
    "Selamat hari jadi! Semoga hubungan kita semakin kuat.",
    "Selamat atas keberhasilanmu! Teruslah berjuang."
];

function generateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Memisahkan kalimat-kalimat dalam kutipan menjadi sebuah array
    const sentences = quote.split(/[.!?]/);

    // Memilih satu kalimat secara acak
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    // Menetapkan kalimat yang dipilih ke dalam elemen kutipan
    quoteElement.classList.remove('show');
    setTimeout(() => {
        quoteElement.innerText = randomSentence.trim(); // Menghilangkan spasi tambahan
        quoteElement.classList.add('show');
    }, 100);
}
