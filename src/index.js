//------------------------------------
// Carbonhouse Exercise JavaScript
//------------------------------------

//Setting button variables
const contentSection = document.querySelector('.content');
const gridButton = document.getElementById('grid-button');
const listButton = document.getElementById('list-button');

//Setting the grid button as active on page load
gridButton.classList.add('active');

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

