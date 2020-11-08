// Your code goes here

//h2 
const header = document.querySelectorAll ('h2');
header.forEach(h2 => {
	h2.addEventListener('click', (event) => {
        event.target.style.color = 'pink';
        event.target.style.background = "black";


	});
});

//h1
const title = document.querySelectorAll ('h1');
title.forEach (element => {
    element.addEventListener ('mouseenter', () => {
     element.style.border = '5px dotted pink';
    })
});
//images
const img= document.querySelectorAll('img');
img.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.2)';
        element.style.transition= 'all 0.3s';
    })
});

//nav
const nav = document.querySelectorAll ('nav a');

nav.forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.3)';
    })
    element.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';  
    })
});


//p
const paragraph = document.querySelectorAll('p')

paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'blue';
    })
});

paragraph.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.style.color = 'brown';
    })
});

//button
const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'green';
    })
});

//h4

const h4 = document.querySelectorAll('h4')

h4.forEach(element => {
    element.addEventListener('wheel', (event) => {
        event.target.style.background = 'pink';
        element.style.fontSize = '50px';
        
    })
});

