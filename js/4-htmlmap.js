
/************
 * Example - Use the renderHeading function  (from task 1)  to map the array to HTML
 ************/
// starting data
const headings = [
    "Summary",
    "Introduction",
    "Main body",
    "Evaluation",
    "Conclusion",
    "References"
];

// function to convert from data to HTML string
function renderHeading(text) {
    return `<h2>${text}</h2>`;
}

// create HTML from the data
var htmlString = headings
    .map(renderHeading)
    // *** IMPORTANT - don't forget to join the array into a SINGLE string ***
    .join("");

// add the HTML into the page
document.body.innerHTML += htmlString;



/************
 * Example - Use the renderParagraph function (from task 1) to map the array to HTML
 ************/
// starting data
const paragraphs = [
    "Praesent nonummy mi in odio. Praesent venenatis metus at tortor pulvinar varius. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.",
    "Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Praesent nec nisl a purus blandit viverra. Ut non enim eleifend felis pretium feugiat.",
    "Fusce ac felis sit amet ligula pharetra condimentum. Aenean massa. Ut leo.",
];

// function to convert from data to HTML string
function renderParagraph(text) {
    return `<p>${text}</p>`; /******* Answer here (instead of empty string) ********/
}

// create HTML from the data
var htmlString = paragraphs
    .map(renderParagraph)
    .join("");
    /*** CALL THE MAP FUNCTION WITH renderParagraph ***/
    // *** IMPORTANT - don't forget to join the array into a SINGLE string ***

// add the HTML into the page
document.body.innerHTML += htmlString;




/************
 * Example - Use the renderImage function (from task 1) to map the array to a HTML 
 ************/
// starting data
const images = [{
    source: "http://placekitten.com/300/250",
    alternativeText: "Cat 1",
},{
    source: "http://placekitten.com/100/250",
    alternativeText: "Cat 2",
},{
    source: "http://placekitten.com/300/300",
    alternativeText: "Cat 3",
}];


// function to convert from data to HTML string
function renderImage(imageData) {
    return `<img src="${imageData.source}" alt="${imageData.alternativeText}" />`;
}


// create HTML from the data
var htmlString = images
    .map(renderImage)
    .join("");
    /*** CALL THE MAP FUNCTION WITH renderParagraph ***/
    // *** IMPORTANT - don't forget to join the array into a SINGLE string ***

// add the HTML into the page
document.body.innerHTML += htmlString;