// HTML Page Object
const EnglishPage = {
    // NAV SECTION
    nav: `<!-- NAV SECTION -->
    <nav id="nav" class="nav">

        <div class="nav-box">
            <div class="nav-header">
                <h2>DikDns</h2>
            </div>

            <div class="nav-lang">
                <div class="lang-dropdown">
                    <button class="lang-button"><i class="fas fa-globe"></i> En <i class="fas fa-caret-right arrow-icon"></i></button>
                    <div class="list">
                        <a id="lang" class="list-item switch-lang" href="#">Bahasa Indonesia</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="nav-link">
            <ul>
                <li class="link">
                    <a href="../">
                        <i class="icons fas fa-house-user"></i>
                        <p class="link-desc">Home</p>
                    </a>
                </li>
                <li class="link">
                    <a href="/about">
                        <i class="icons fas fa-info-circle"></i>
                        <p class="link-desc">About</p>
                    </a>
                </li>
                <li  class="link">
                    <a href="/suggestion">
                        <i class="icons fas fa-comment-alt"></i>
                        <p class="link-desc">Suggestion</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="nav-menu-toggle">
            <input class="btn-toggle" type="checkbox">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </nav>
    `,
    // MAIN SECTION
    main: `<!-- MAIN SECTION -->
    <main id="main" class="main">
        <h2 class="title-section">Game Suggestion?</h2>
        <p class="desc-section">Actually just write it down what ever you want, even though it's unrelated to game stuff.</p>

        <form name="submit-to-google-sheet" id="form" class="form">
            <div class="form-group">
                <input class="form-control" name="username" id="username" type="text" placeholder="Username" required>
            </div>

            <div class="form-group">
                <textarea class="form-control input-textarea" name="suggestion" id="suggestion" placeholder="Suggest here"></textarea>
            </div>

            <div class="form-group">
                <button class="form-control submit" id="submit" type="submit">Send</button>
            </div>
        </form>

    </main>

    <!-- Submit Form STATUS -->
    <section class="form-status" id="form-status">
        <div class="box-form-status">
            <div class="status on" id="loading">
                <i class="icons fas fa-circle-notch"></i> 
                <p class="desc-status">Sending...</p>
            </div>
            <div class="status" id="positive">
                <i style="color: lime;" class="icons fas fa-check-square"></i> 
                <p class="desc-status">Thanks! Your words has been sent!</p>
            </div>
            <div class="status" id="negative">
                <i style="color: red;" class="icons fas fa-exclamation-circle"></i> 
                <p class="desc-status">Failed to send!</p>
                <p class="error-status"></p>
            </div>
        </div>
    </section>
    `,
    // FOOTER SECTION
    footer: `<!-- FOOTER SECTION -->
    <footer id="footer" class="footer">
        <section class="footer-section footer-copyright">
            <p class="desc-footer">This is a non-profit project, all of those image are copyright to it's own source.</p>
            <p class="desc-footer">Copyright &copy; DikDns Project 2021 | Built by <a href="/andika-eka-kurnia">Andika Eka Kurnia</a></p>
        </section>
        <section class="footer-section footer-link">
            <a target="_blank" href="https://twitter.com/dik_dns" class="link">Twitter <i class="fab fa-twitter-square"></i></a>
            <a target="_blank" href="https://www.instagram.com/dikdns/" class="link">Instagram <i class="fab fa-instagram-square"></i></a>
            <a target="_blank" href="mailto:dikdnssocial@gmail.com" class="link">Send Email <i class="far fa-paper-plane"></i></a>
            <a href="../" class="link">Home <i class="fas fa-house-user"></i></a>
            <a href="/about" class="link">About <i class="fas fa-info-circle"></i></a>
            <a href="/andika-eka-kurnia" class="link">Andika Eka Kurnia <i class="fas fa-user-circle"></i></a>
            <a href="/documentation" class="link">Documentation <i class="fas fa-book"></i></a>
            <a href="#" class="link">Top Page <i class="fas fa-angle-double-up"></i></a>
        </section>
        <section class="footer-section footer-version">
            <p>Patch 2.0</p>
        </section>
    </footer>
    `,

    js: `
    <script src="js/main.js"></script>
    `

};



const pageEn = `
${EnglishPage.nav}
${EnglishPage.main}
${EnglishPage.footer}
${EnglishPage.js}
`;