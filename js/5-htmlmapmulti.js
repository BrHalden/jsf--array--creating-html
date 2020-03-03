

/************
 * EXAMPLE
 * Creating HTML from data - Using renderArticle from task 2, map the list of articles to HTML
 ************/

// starting data
const articles = [{
    id: 123,
    title: "First kitten catches Coronavirus",
    intro: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. ",
    imageUrl: "http://placekitten.com/300/150"
},{
    id: 456,
    title: "Second kitten catches Coronavirus",
    intro: "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nulla porta dolor.",
    imageUrl: "http://placekitten.com/300/150"
},{
    id: 678,
    title: "Third kitten catches Coronavirus",
    intro: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Curabitur ligula sapien.",
    imageUrl: "http://placekitten.com/300/150"
}];

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
var htmlString = articles
    .map(renderArticle)
    .join("");

// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * Creating HTML from data - Using renderCatstagramPost from task 2, map the list of articles to HTML
 ************/

// starting data
const catstagramPost = [{
    id: 665,
    caption: "Aenean tellus #posuere #ac",
    image: "http://placekitten.com/300/300",
    numberOfLikes: 256,
},{
    id: 456,
    caption: "Bibendum sed. #posuere #non",
    image: "http://placekitten.com/300/300",
    numberOfLikes: 128,
},{
    id: 24,
    caption: "Metus sed. #mattis #non",
    image: "http://placekitten.com/300/300",
    numberOfLikes: 64,
}];

function renderCatstagramPost(postData) {
    return `
        <div data-postid="${postData.id}">
           <img src="${postData.image}" alt="${postData.caption}" />
           <p>Cat ID: ${postData.id}</span>
           <p>number of likes: ${postData.numberOfLikes}</p>

        </div>
    `;
}
var htmlString = catstagramPost.map(renderCatstagramPost).join("");
document.body.innerHTML += htmlString;
/************
 * Creating HTML from data - Using renderAdvert from task 2, map the list of articles to HTML
 ************/

// starting data
const advert = [{
    id: 234,
    title: "Used car for sale",
    price: 30000,
    description: "Nullam sagittis. Praesent venenatis metus at tortor pulvinar varius. Morbi mattis ullamcorper velit. Praesent turpis."
},{
    id: 35,
    title: "New house for sale",
    price: 9000000,
    description: "Praesent venenatis metus at tortor pulvinar varius. Morbi mattis ullamcorper velit."
},{
    id: 456,
    title: "Piano for sale",
    price: 30000,
    description: "Morbi mattis ullamcorper velit. Praesent turpis."
},{
    id: 23874,
    title: "Speed boat for sale",
    price: 9000,
    description: "Metus at tortor pulvinar varius. Morbi mattis ullamcorpers."
}];

function renderAdvert(data) {
    return `
        <article data-advertid="${data.id}"
            <h2>${data.title}</h2>
            <div>${data.price}</div>
            <p>${data.description}</p>
        </article>
    `;
}

var htmlString = advert.map(renderAdvert).join("");
document.body.innerHTML += htmlString;
