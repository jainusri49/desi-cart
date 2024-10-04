const formTitle = document.getElementById('formTitle');
const emailField = document.getElementById('emailField');
const numberField = document.getElementById('numberField');
const confirmPasswordField = document.getElementById('confirmPasswordField');
const actionBtn = document.getElementById('actionBtn');
const toggleText = document.getElementById('toggleText');
const inputFields = document.querySelectorAll('.input-field');
const toggleParagraph = document.querySelector('p');

let isLogin = true;

function addAnimation() {
    inputFields.forEach((field, index) => {
        setTimeout(() => {
            field.classList.add('show');
        }, index * 100);
    });
    toggleParagraph.classList.add('show');
}

function removeAnimation() {
    inputFields.forEach((field) => {
        field.classList.remove('show');
    });
    toggleParagraph.classList.remove('show');
}

function resetForm() {
    if (isLogin) {
        formTitle.textContent = 'Login';
        emailField.style.display = 'none';
        numberField.style.display = 'none';
        confirmPasswordField.style.display = 'none';
        actionBtn.textContent = 'Login';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Sign Up</a>';
    } else {
        formTitle.textContent = 'Sign Up';
        emailField.style.display = 'block';
        numberField.style.display = 'block';
        confirmPasswordField.style.display = 'block';
        actionBtn.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLink">Login</a>';
    }
}

function toggleForm() {
    removeAnimation();
    setTimeout(() => {
        isLogin = !isLogin;
        resetForm();
        addAnimation();
    }, 500);
}

window.onload = () => {
    addAnimation();
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'toggleLink') {
        e.preventDefault();
        toggleForm();
    }
});
