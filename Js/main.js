let generatedQuote = document.getElementById("generatedQuote");
let authorName = document.getElementById("authorName");

let quotes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    authorName: "― Oscar Wilde",
  },
  {
    qoute:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    authorName: "― Marilyn Monroe",
  },
  {
    qoute: "“So many books, so little time.”",
    authorName: "― Frank Zappa",
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    authorName: "― Albert Einstein",
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    authorName: "― Marcus Tullius Cicero",
  },
  {
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    authorName: "― Bernard M. Baruch",
  },
];

function showQuote() {
  let randomNumber = Math.ceil(Math.random() * quotes.length) - 1;

  generatedQuote.innerHTML = quotes[randomNumber].qoute;
  console.log(randomNumber);
  authorName.innerHTML = quotes[randomNumber].authorName;
  console.log(randomNumber);
}
