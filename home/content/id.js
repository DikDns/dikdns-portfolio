// HTML Page Object
const IndonesiaPage = {
    // NAV SECTION
    nav: `<!-- NAV SECTION -->
    <nav id="nav" class="nav">

        <div class="nav-box">
            <div class="nav-header">
                <h2>DikDns</h2>
            </div>

            <div class="nav-lang">
                <div class="lang-dropdown">
                    <button class="lang-button"><i class="fas fa-globe"></i> Id <i class="fas fa-caret-right arrow-icon"></i></button>
                    <div class="list">
                        <a id="lang" class="list-item switch-lang" href="#">English</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="nav-link">
            <ul>
                <li class="link">
                    <a href="../">
                        <i class="icons fas fa-house-user"></i>
                        <p class="link-desc">Beranda</p>
                    </a>
                </li>
                <li class="link">
                    <a href="/about">
                        <i class="icons fas fa-info-circle"></i>
                        <p class="link-desc">Tentang</p>
                    </a>
                </li>
                <li  class="link">
                    <a href="/suggestion">
                        <i class="icons fas fa-comment-alt"></i>
                        <p class="link-desc">Usulan</p>
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
        <section class="main-section section-header" id="header-page">
            <img class="profile-image" src="documentation/img/logo/design-logo-1.png" alt="DikDns Logo Image">
            <h1 class="title">DikDns</h1>
            <p class="profile-desc">–kan nama pengguna internet</p>
        </section>
        <section class="main-section section-game-on-playing" id="game-on-playing">
            <h1 class="title">Sedang Luring</h1>
            <div class="game-list">
                <section class="game-section">
                    <h2 class="title-section"><i class="icons fas fa-clock"></i> Rumpang</h2>
                    <img class="game-image" src="documentation/img/offline/highlight-offline-1.gif" alt="DikDns Offline Banner">
                    <p class="game-desc">Aku telah memutuskan untuk lebih fokus di dunia nyata. Jadi untuk beberapa tahun ke depan, mungkin aku tidak akan memainkan permainan video apapun. Terima kasih atas perhatiannya dan sampai jumpa nanti!</p>
                </section>
        </section>
        <section class="main-section">
            <p class="desc-section">Tidak perlu sungkan untuk menghubungi akun media sosialku di bawah laman ini.</p>
        </section>
    </main>
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
            <a href="/about" class="link">About <i class="fas fa-info-circle"></i></a>
            <a href="/suggestion" class="link">Suggestion <i class="fas fa-comment-alt"></i></a>
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
    <script src="home/js/main.js"></script>
    <script src="home/js/script.js"></script>
    `

};



const pageId = `
${IndonesiaPage.nav}
${IndonesiaPage.main}
${IndonesiaPage.footer}
${IndonesiaPage.js}
`;