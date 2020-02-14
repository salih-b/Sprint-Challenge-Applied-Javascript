// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





function Cards(article, topic) {
    let card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imageDiv = document.createElement('div'),
    image = document.createElement('img'),
    byAuthor = document.createElement('span');
   


    // classes     
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageDiv.classList.add('img-container');
   

       
        
     
  // content
    headline.textContent = article.headline;
        byAuthor.textContent = `By ${article.authorName}`;
        image.src = article.authorPhoto;

    //format
    card.append(headline);
    card.append(author);
    imageDiv.append(image);
    author.append(imageDiv);
    author.append(byAuthor);

    return card;
}

let headerLocal = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    const array2x = Object.keys(response.data.articles);
    console.log(array2x);
    array2x.map(topic =>{
        console.log(topic);
        response.data.articles[topic].map(article =>{
            console.log(article);
            headerLocal.append(Cards(article, topic));
        })
    })
})
.catch( error => {
    console.log("Error:", error);
});