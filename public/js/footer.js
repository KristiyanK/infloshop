const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
            <img src="../img/light-logo.png" class="logo" alt="">
        </div>
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