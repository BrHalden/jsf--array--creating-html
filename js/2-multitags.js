

/************
 * EXAMPLE
 * Creating HTML from data - Create a function called renderArticle that takes in an object and returns the data as HTML
 ************/

// starting data
const article = {
    id: 123,
    title: "First kitten catches Coronavirus",
    intro: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nulla porta dolor.",
    imageUrl: "http://placekitten.com/300/150"
};

// function to convert from data to HTML string
function renderArticle(articleData) {
    return `
        <article data-articleid="${articleData.id}">
            <h1>${articleData.title}</h1>
            <img src="${articleData.imageUrl}" alt="${articleData.title} image" />
            <p>${articleData.intro}</p>
        </article>
    `;
}

// create HTML from the data
var htmlString = renderArticle(article);
// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * Creating HTML from data - Create a function called renderCatstagramPost that takes in an object and returns the data as HTML.
 * The start of the functions has been done for you.
 * THEN add the post to the page using the method from the previous questions.
 ************/

// starting data
const catstagramPost = {
    id: 234,
    caption: "Aenean tellus metus, bibendum sed. #posuere #ac #mattis #non",
    image: "http://placekitten.com/300/300",
    numberOfLikes: 256,
};

// function to convert from data to HTML string
function renderCatstagramPost(postData) {
    return `
        <div data-postid="${postData.id}">
           <img src="${postData.image}" alt="${postData.caption}" />
           <p>Cat ID: ${postData.id}</span>
           <p>number of likes: ${postData.numberOfLikes}</p>

        </div>
    `;
}
var htmlString = renderCatstagramPost(catstagramPost);
document.body.innerHTML += htmlString;

/************
 * Creating HTML from data - Create a function called renderAdvert that takes in an object and returns the data as HTML.
 * THEN add the post to the page using the method from the previous questions.
 * 
 * Use the HTML format:
 * <article data-advertid="ID">
 *   <h2>TITLE</h2>
 *   <div>PRICE</div>
 *   <p>DESCRIPTION</p>
 * </article>
 ************/

// starting data
const advert = {
    id: 234,
    title: "Used car for sale",
    price: 30000,
    description: "Nullam sagittis. Praesent venenatis metus at tortor pulvinar varius. Morbi mattis ullamcorper velit. Praesent turpis."
};

function renderAdvert(data) {
    return `
        <article data-advertid="${data.id}"
            <h2>${data.title}</h2>
            <div>${data.price}</div>
            <p>${data.description}</p>
        </article>
    `;
}
var htmlString = renderAdvert(advert);
document.body.innerHTML += htmlString;






