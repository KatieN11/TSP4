const flipCard = document.getElementById('flipCard');

flipCard.addEventListener('click', ()=> {
    flipCard.classList.toggle('flipped');
});

const flipCard2 = document.getElementById('flipCard2');

flipCard2.addEventListener('click', ()=> {
    flipCard2.classList.toggle('flipped');
});

const flipCard3 = document.getElementById('flipCard3');

flipCard3.addEventListener('click', ()=> {
    flipCard3.classList.toggle('flipped');
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '1771113'
    const protectedContent = document.getElementById('protected-content');
    const errorMessage = document.getElementById('error-message');

    if (password=== correctPassword) {
        protectedContent.style.display = 'block';
        errorMessage.textContent = '';

    } else {
        errorMessage.textContent = 'Incorrect!';
        protectedContent.style.display = 'none';
    }
}