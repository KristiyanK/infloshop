//redirec to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(name != null){//signup page
        if(name.value.length < 3){
            showAlert('Името трябва да е поне 3 символа'); 
        } else if(!email.value.length){
            showAlert('Въведи имейл');
        } else if(password.value.length < 8){
            showAlert('Паролата трябва да е поне 8 символа');
        } else if(!number.value.length){
            showAlert('Въведи телефонния си номер');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('Невалиден телефонен номер');
        } else if(!tac.checked){
            showAlert('Трябва да се съгласиш с нашите условия за ползване');
        } else{
            //submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                role: "user"
            })
        }
    }else{
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('Въведи всички полета');
        }else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})

