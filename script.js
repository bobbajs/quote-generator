const quote = document.getElementById('quote');
const author = document.getElementById('author');
let quotes = [];

function newQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[quoteIndex];

    quote.innerText = currentQuote.text;
    author.innerText = currentQuote.author;
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    
    try {
        const response = await fetch(apiUrl);
        quotes = await response.json();

        newQuote();
    } catch (e) {
        console.log('e', e);
    }
};

getQuotes();