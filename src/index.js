import './style.scss'
import { Collapse, ScrollSpy } from 'bootstrap';

window.addEventListener('load', () => setTimeout(init, 100));

function init () {    
    document.body.classList.remove('overflow-hidden')                    
    document.getElementById('content').classList.remove('opacity-0')
    
    const scrollSpy = new ScrollSpy(document.body, {
        target: '#navbar',
        rootMargin: '0px 0px -25%',
        smoothScroll: true 
    })
}