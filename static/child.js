const button = document.getElementById('click-to-show');
const input = document.getElementById('click-to-focus');

document.addEventListener('focusin', function(event) {
    window.parent.postMessage({
        type: event.type,
        target: {
            tagName: event.target.tagName,
        },
    }, '*');

    console.log('child active element:', document.activeElement);
}, true);

button.addEventListener('click', function(event) {
    input.style.display = (input.style.display === '' ? 'block' : '');
});
