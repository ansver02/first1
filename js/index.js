console.log('it is work');

const myWorks = document.querySelector('#my-works');
const portfolioContainer = document.querySelector('.portfolio-container');


myWorks.addEventListener('click',onClick);

function onClick(event){  

event.preventDefault();
portfolioContainer.classList.toggle('is-open');
myWorks.classList.toggle("open");

}


function togle(elementName, className){

   elementName.classlist.toggle(className);
    }
    