const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
            <img src="../img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casual</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casual</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
            
        </div>
        <p class="footer-title">About company</p>
            <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                At harum recusandae mollitia repellat facilis excepturi saepe! Nostrum eaque, 
                esse magni iusto tempora sunt laboriosam non et quisquam voluptatem ab consequuntur.
            </p>
            <p class="info">Support email: kriskonov1@gmail.com</p>
            <p class="info">Telephone: 0876299922</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Facebook</a>
                    <a href="#" class="social-link">Twitter</a>
                </div>
            </div>
            <p class="footer-credit">All influencers in one place</p>
    `
}

createFooter();