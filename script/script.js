let emailField = document.querySelector(`input[type='email']`);
let button = document.querySelector(`button`);
let inputContainer = document.querySelector('.input-container');
let emailFormat = /\w+@\w+.\w+/;

button.onclick = () => {
    let invalidParagraph = document.createElement('p');
    invalidParagraph.className = 'invalid';
    if (emailField.value === '') {
        let p = document.querySelector('.input-container p');
        if (p)  p.remove();
        let text = document.createTextNode('u must put a email bro');
        invalidParagraph.appendChild(text);
        inputContainer.appendChild(invalidParagraph);
        emailField.classList.add('invalid-input');
        event.preventDefault();
    } else if (!emailField.value.match(emailFormat)) {
        let p = document.querySelector('.input-container p');
        if (p)  p.remove();
        let text = document.createTextNode('u must put a valid email bro');
        invalidParagraph.appendChild(text);
        inputContainer.appendChild(invalidParagraph);
        emailField.classList.add('invalid-input');
        event.preventDefault();
    }
}