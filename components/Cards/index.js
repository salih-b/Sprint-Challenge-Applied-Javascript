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





function Cards(par) {
    let card = document.createElement('div'),
    author = document.createElement('div'),
    array2x = Object.values(par.data.articles);

    let headlineArray = array2x.map(function(smallArray){
        return smallArray.forEach(function(obj){
return obj.headline;
        })
    });
    let imgArray = array2x.map(function(smallArray){
        return smallArray.forEach(function(obj){
return obj.authorPhoto;
        })
    });
    let credits = array2x.map(function(smallArray){
        return smallArray.forEach(function(obj){
return obj.authorName;
        })
    });
    // classes     
    card.classList.add('card');
    
    author.classList.add('author');
    

    // Headline Engine
    headlineArray.forEach(function(headlines){
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = headlines;
        card.append(headline);
    });
    // Author Image Engine
    imgArray.forEach(function(photos){
        imageDiv = document.createElement('div');
        imageDiv.classList.add('img-container');
        let image = document.createElement('img');
        image.src = photos;
        imageDiv.append(image);
        author.append(imageDiv);
// author.append(byAuthor);
    });
    credits.forEach(function(name){
        let byAuthor = document.createElement('span');
        byAuthor.textContent = `By ${name}`;
        card.append(byAuthor);
        return byAuthor;
    });
    // title.textContent = "Lambda Times";
    // temp.textContent = "98";

    //format
    
    card.append(author);
    
    
    headerLocal.append(card);

    return card;
}

let headerLocal = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
console.log(response);
Cards(response);
})
.catch( error => {
    console.log("Error:", error);
});