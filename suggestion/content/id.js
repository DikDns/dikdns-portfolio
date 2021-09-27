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
        <h2 class="title-section">Usulan Gim?</h2>
        <p class="desc-section">Sebenarnya tulis saja apa yang kamu mau, meskipun itu tidak berhubungan dengan hal permainan video.</p>

        <form name="submit-to-google-sheet" id="form" class="form">
            <div class="form-group">
                <input class="form-control" name="username" id="username" type="text" placeholder="Nama Pengguna" required>
            </div>

            <div class="form-group">
                <textarea class="form-control input-textarea" name="suggestion" id="suggestion" placeholder="Usulkan disini"></textarea>
            </div>

            <div class="form-group">
                <button class="form-control submit" id="submit" type="submit">Kirim</button>
            </div>
        </form>

    </main>

    <!-- Submit Form STATUS -->
    <section class="form-status" id="form-status">
        <div class="box-form-status">
            <div class="status on" id="loading">
                <i class="icons fas fa-circle-notch"></i> 
                <p class="desc-status">Mengirim...</p>
            </div>
            <div class="status" id="positive">
                <i style="color: lime;" class="icons fas fa-check-square"></i> 
                <p class="desc-status">Terima kasih! Kalimat kamu telah terkirim!</p>
            </div>
            <div class="status" id="negative">
                <i style="color: red;" class="icons fas fa-exclamation-circle"></i> 
                <p class="desc-status">Tidak terkirim!</p>
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



const pageId = `
${IndonesiaPage.nav}
${IndonesiaPage.main}
${IndonesiaPage.footer}
${IndonesiaPage.js}
`;