const formEl = document.querySelector('.login-form');
const btnEl = formEl.lastElementChild;

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value && password.value) {
        console.log({
            email: email.value,
            password: password.value,
        });
        formEl.reset();
        return;
    }

    alert('Всі поля повинні бути заповнені');
}



