const quotes = [
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The truth is more important than the facts.​",
        author: "Frank Lloyd Wright"
    },
    {
        quote: "Love yourself first, and everything else falls into place.",
        author: "Lucille Ball"
    },
    {
        quote: "Dreams can change. If we’d all stuck with our first dream, the world would be overrun with cowboys and princesses.",
        author: "Stephen Colbert"
    },
    {
        quote: "Failure is another stepping-stone to greatness.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Be curious.",
        author: "Stephen Hawking"
    },
    {
        quote: "Love all, trust a few.",
        author: "William Shakespeare"
    },
    {
        quote: "Success isn't about how much money you make. It's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        quote: "You miss 100 percent of the shots you don't take.",
        author: "Wayne Gretzky"
    }
]

const quote = document.querySelector("#quote>span:first-child");
const author = document.querySelector("#quote>span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;