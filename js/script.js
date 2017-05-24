// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var quotes =[
    {
        quote:'Only I can change my life. No one can do it for me',
        source:'Carol Burnett',
        citation: 'https://www.brainyquote.com',
        year:'1933'
    },
    {
        quote:'Always do your best. What you plant now, you will harvest later.',
        source:'Og Mandino',
        citation: 'https://www.brainyquote.com',
        year:'1923'
    },
    {
        quote:'Life is about making an impact, not making an income',
        source:'Kevin Kruse',
        citation: 'http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/',
        year:'2016'
    },
    {
        quote:'Whatever the mind of man can conceive and believe, it can achieve',
        source:'Napoleon Hill',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:'1923'
    },
    {
        quote:' Strive not to be a success, but rather to be of value',
        source:'Albert Einstein',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'You miss 100% of the shots you don’t take.',
        source:'Wayne Gretzky',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Every strike brings me closer to the next home run',
        source:'Babe Ruth',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Eighty percent of success is showing up.',
        source:'Woody Allen',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Winning isn’t everything, but wanting to win is.',
        source:'Vince Lombardi',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
        source:'Michael Jordan',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
];

function createHtmlFromQuote(quote){
    var html = '<p class="quote">' + quote['quote'] + '</p>';
    html += '<p class="source">' + quote['source'];
    html += '<span class="citation">'+ quote['citation'] + '</span>';
    html += '<span class="year" ' + quote['year'] + '</span>';
    html += '</p>';
    return html;
}
function getRandomQuote(){

    return quotes[Math.floor(Math.random() * quotes.length)];
}

function printQuote(){

    var quote = getRandomQuote();
    document.getElementById('quote-box').innerHTML =createHtmlFromQuote(quote);

}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
