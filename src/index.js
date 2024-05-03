//------------------------------------
// Carbonhouse Exercise JavaScript
//------------------------------------

//Setting content section button variables
const contentSection = document.querySelector('main');
const gridButton = document.getElementById('grid-button');
const listButton = document.getElementById('list-button');

//Setting the grid button as active on page load
gridButton.classList.add('active');
contentSection.classList.add('grid-view');

//Adding click event listeners to the buttons
gridButton.addEventListener('click', () => {
    //Enabling active state for grid view, disabling active state for list view
    gridButton.classList.add('active');
    listButton.classList.remove('active');
    contentSection.classList.add('grid-view');
    contentSection.classList.remove('list-view');
    //console.log("grid view active");


})

listButton.addEventListener('click', () => {
    //Enabling active state for grid view, disabling active state for grid view
    listButton.classList.add('active');
    gridButton.classList.remove('active');
    contentSection.classList.add('list-view');
    contentSection.classList.remove('grid-view');
    //console.log("list view active");


})

////////////////

//Setting social section button variables
const tabPanes = document.querySelectorAll('.tab-pane');
const twitterButton = document.getElementById('twitter-button');
const twitterPane = document.getElementById('twitter');
const instagramButton = document.getElementById('instagram-button');
const instagramPane = document.getElementById('instagram');
const facebookButton = document.getElementById('facebook-button');
const facebookPane = document.getElementById('facebook');

//Setting the twitter button as active on page load
twitterButton.classList.add('active');
twitterPane.classList.add('active');

//Adding click event listeners to the Twitter button
twitterButton.addEventListener('click', () => {
    //Enabling active state for twitter view, disabling active state for instagram and facebook view
    twitterButton.classList.add('active');
    instagramButton.classList.remove('active');
    facebookButton.classList.remove('active');

    twitterPane.classList.add('active');
    instagramPane.classList.remove('active');
    facebookPane.classList.remove('active');

})

//Adding click event listeners to the Instagram button
instagramButton.addEventListener('click', () => {
    //Enabling active state for instagram view, disabling active state for twitter and facebook view
    instagramButton.classList.add('active');
    twitterButton.classList.remove('active');
    facebookButton.classList.remove('active');

    instagramPane.classList.add('active');
    twitterPane.classList.remove('active');
    facebookPane.classList.remove('active');

})

//Adding click event listeners to the Facebook button
facebookButton.addEventListener('click', () => {
    //Enabling active state for facebook view, disabling active state for twitter and facebook view
    facebookButton.classList.add('active');
    twitterButton.classList.remove('active');
    instagramButton.classList.remove('active');

    facebookPane.classList.add('active');
    twitterPane.classList.remove('active');
    instagramPane.classList.remove('active');

})

// Logic for Hamburger Menu on Mobile
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var collapsibleBox = document.querySelector('.collapsible-box');

    // Hide the collapsible box initially
    collapsibleBox.style.display = 'none';

    hamburger.addEventListener('click', function() {
        if (collapsibleBox.style.display === 'none') {
            collapsibleBox.style.display = 'block';
        } else {
            collapsibleBox.style.display = 'none';
        }
    });
});