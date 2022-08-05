import About from "./aboutme";

const Work = ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(button.textContent === 'remove') {
            ul.removeChild(li)
        };
    };
});
