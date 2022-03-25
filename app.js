'use strict'
const switcher = document.querySelector('.btn')
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className.indexOf('dark-theme') > -1) {
        switcher.textContent = 'Light theme';
    } else {
        (className.indexOf('dark-theme') === -1)    
        switcher.textContent = 'Dark theme';

    }
    
console.log('current class name: ' + className);

}) // end of switcher event listener


