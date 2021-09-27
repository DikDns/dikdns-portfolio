// HTML Page Object
const IndonesiaPage = {
    // NAV SECTION
    nav: `<!-- NAV SECTION -->
    <nav id="nav" class="nav">

        <div class="nav-box">
            <div class="nav-header">
                <h2>Andika Eka Kurnia</h2>
            </div>

            <div class="nav-lang">
                <div class="lang-dropdown">
                    <button class="lang-button"><i class="fas fa-globe"></i> Id <i class="fas fa-caret-right arrow-icon"></i></button>
                    <div class="list">
                        <a class="list-item switch-lang" href="#">English</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="nav-link">
            <ul>
                <li  class="link">
                    <a href="#">
                        <i class="fas fa-user-circle"></i>
                        <p class="link-desc">Profil</p>
                    </a>
                </li>
                <li class="link">
                    <a href="#about-me">
                        <i class="fas fa-info-circle"></i>
                        <p class="link-desc">Tentang</p>
                    </a>
                </li>
                <li  class="link">
                    <a href="#about-project">
                        <i class="fas fa-project-diagram"></i>
                        <p class="link-desc">Proyek</p>
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

        <div id="home" class="main-section">
            <img class="profile-image" src="../documentation/img/andika-eka-kurnia/photo-self-1.png" alt="Andika eka kurnia show his funny face with a thumbs-up picture">
            <h1 class="title">Andika Eka Kurnia</h1>
            <p class="profile-desc">–Itulah ketika aku menemukan sesuatu yang wangy wangy...</p>
        </div>

        <div id="about-me" class="main-section">
            <section class="about-section">
                <h2 class="title-section">Tentang Aku</h2>
                <p class="desc-section">Aku benar - benar bingung bagaimana mendeskripsikan diriku– Oke dah, ini dia. Aku suka bermain permainan video tentu saja. Kebahagianku datang dengan menonton film dan anime. Meskipun, sekarang hanya sering menonton anime saja. Steins;Gate salah satu anime favoritku dan MCU salah satu film favoritku. Aku masih seorang pelajar yang tinggal di Indonesia. Tujuanku ingin membuat permainan video. Cukup, mari kita membicarakan proyek ini saja, oke?</p>
            </section>
        </div>

        <div id="about-project" class="main-section">

            <section class="about-section">
                <h2 class="title-section">Proyek?</h2>
                <p class="desc-section">Ini hanya situs statis sederhana yang memuat informasi tentang DikDns. Mungkin, bisa disebut Situs Portfolio DikDns? Tidak tahu juga sih, tapi itu adalah nama dari proyek ini. Aku menyebutnya proyek karena aku tidak pernah membuat hal seperti ini sebelumnya. Menyiapkan segala hal teknis dan hal - hal lainnya mandiri. Ini adalah proyek berkelanjutan, artinya ini akan berkembang seiring waktu. Rencanaku adalah ingin mengubah proyek ini menjadi situs yang dinamis. </p>
            </section>

            <section class="about-section">
                <h2 class="title-section">Credits</h2>
                <p class="desc-section">Tidak lupa terima kasih khusus kepada Dicky dan Dzikri dalam memberikan semua masukan yang luar biasa. Terakhir terima kasih banyak kepada kamu yang mampir kemari! <i class="far fa-grin-beam"></i></p>
            </section>

        </div>

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



const pageId = `
${IndonesiaPage.nav}
${IndonesiaPage.main}
${IndonesiaPage.footer}
${IndonesiaPage.js}
`;