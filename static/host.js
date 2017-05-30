window.addEventListener('message', function(event) {
    console.log(event);

    if (event.data.target.tagName !== 'INPUT') {
        console.log('focusing outside');
        document.body.focus();
    }

    console.log('host active element:', document.activeElement);
});
