const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMsg = document.getElementById('message');

form.addEventListener('change', () => {
    const userData = {
        name: userName.value,
        email: userEmail.value,
        message:userMsg.value,
    };

    const userDataSerialized = JSON.stringify(userData);
    localStorage.setItem('userData', userDataSerialized);
});

window.addEventListener('load', () => {
    const userDataSerialized = JSON.parse(localStorage.userData);

    userName.value = userDataSerialized.name;
    userEmail.value = userDataSerialized.email;
    userMsg.value = userDataSerialized.message;
});