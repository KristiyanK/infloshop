const createNav = ()=>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="../img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" id="search-box" placeholder="search influencer, product, etc">
                    <button class="search-btn" id="search-btn">Search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/cart.png" alt=""></a>
            </div>
    </div>
    <ul class="links-contrainer">
        <li class="link-item" id="home"><a href="/" class="link">Начало</a></li>
        <li class="link-item" id="inflohome"><a href="#shop" class="link">Инфлуенсъри</a></li>
        <li class="link-item" id="login"><a href="/login" class="link">Вход</a></li>
        <li class="link-item" id="register"><a href="/signup" class="link">Регистрация</a></li>
        <li class="link-item"><a href="/seller" class="link hideLinks" id="profile">Профил</a></li>
        <li class="link-item"><a href="/admin" class="link hideLinks" id="adminPanel">Админ</a></li>
    </ul>
    `
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const profileLink = document.querySelector('#profile')
const loginLink = document.querySelector('#login')
const registerLink = document.querySelector('#register')
const adminLink = document.querySelector('#adminPanel')

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user is logged in
        loginLink.classList.add('hideLinks')
        registerLink.classList.add('hideLinks')
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
        if(user.role == 'seller' ){
            profileLink.classList.remove('hideLinks');
        }
        if(user.role == 'admin' ){
            adminLink.classList.remove('hideLinks');
        }
    } else{
        //user is logged out
        loginLink.classList.remove('hideLinks')
        registerLink.classList.remove('hideLinks')
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
    
}

//search box
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`
    }
})