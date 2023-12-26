function generateQuote() {
    let quoteContainer = document.getElementById('quote');
    let authorName = document.getElementById('author');
    let authorNameOne = document.getElementById('author-1');
    let authorNameTwo = document.getElementById('author-2');
    let authorNameThree = document.getElementById('author-3');
    let randomNumber = Math.floor(Math.random() * 15)
    // console.log(randomNumber)
    // quoteContainer.innerHTML = 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best.'
    // author.innerHTML = 'Marilyn Monroe';


    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quoteContainer.innerHTML = data[randomNumber].text
            authorName.innerHTML = data[randomNumber].author
            authorNameOne.innerHTML = data[randomNumber - 1].author
            authorNameTwo.innerHTML = data[randomNumber + 1].author
            authorNameThree.innerHTML = data[randomNumber + 2].author

        });



}