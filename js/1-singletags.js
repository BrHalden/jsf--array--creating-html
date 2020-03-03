
/************
 * Example - Create a function called renderParagraph that takes in a string and returns it wrapped in an <h1> tag.
 ************/
// starting data
const heading = "Welcome to my site";

// function to convert from data to HTML string
function renderHeading(text) {
    return `<h1>${text}</h1>`;
}

// create HTML from the data
var htmlString = renderHeading(heading);
// add the HTML into the page
document.body.innerHTML += htmlString;




/************
 * Write the code inside renderParagraph so that it converts the parameter to an HTML string.
 * This will be similar to the example above, but using a paragraph tag instead of a heading tag.
 ************/

// starting data
const paragraph = "Fusce vel dui. Nunc nulla. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Morbi ac felis. Curabitur vestibulum aliquam leo.";

// function to convert from data to HTML string
function renderParagraph(text) {
    return `<p>${text}</p>`; /******* Answer here (instead of empty string) ********/
}

// create HTML from the data
var htmlString = renderParagraph(paragraph);
// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * Create a function called renderBlockQuote, that takes in a string and returns it wrapped inside a <blockquote> tag.
 ************/

// starting data
const quote = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";

// function to convert from data to HTML string

/******* Answer here ********/

function renderBlockQuote(text) {
	return `<blockquote>${text}</blockquote>`
}
// create HTML from the data
var htmlString = renderBlockQuote(quote) /******* Call the function here (instead of the empty string ********/;
// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * EXAMPLE
 * Create a function called renderImage, that takes in an OBJECT and returns an HTML string
 ************/

// starting data
const image = {
    source: "http://placekitten.com/300/250",
    alternativeText: "A baby cat",
};

// function to convert from data to HTML string
function renderImage(imageData) {
    return `<img src="${imageData.source}" alt="${imageData.alternativeText}" />`;
}

// create HTML from the data
var htmlString = renderImage(image);
// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * Create a function called renderLink, that takes in an OBJECT and returns an HTML string
 * Then use that function to add the link to the page like the other questions
 ************/

// starting data
const link = {
    href: "https://www.arsenal.com/",
    text: "Click here to see the best team in the world",
};

// function to convert from data to HTML string
function renderLink(imageData) {
	return `<a href="${imageData.href}">${imageData.text}</a>`;
}

// create HTML from the data
var htmlString = renderLink(link);
// add the HTML into the page
document.body.innerHTML += htmlString;

