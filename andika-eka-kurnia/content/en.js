// HTML Page Object
const EnglishPage = {
    // NAV SECTION
    nav: `<!-- NAV SECTION -->
    <nav id="nav" class="nav">

        <div class="nav-box">
            <div class="nav-header">
                <h2>Andika Eka Kurnia</h2>
            </div>

            <div class="nav-lang">
                <div class="lang-dropdown">
                    <button class="lang-button"><i class="fas fa-globe"></i> En <i class="fas fa-caret-right arrow-icon"></i></button>
                    <div class="list">
                        <a class="list-item switch-lang" href="#">Bahasa Indonesia</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-link">
            <ul>
                <li class="link">
                    <a href="#">
                        <i class="fas fa-user-circle"></i>
                        <p class="link-desc">Profile</p>
                    </a>
                </li>
                <li class="link">
                    <a href="#about-me">
                        <i class="fas fa-info-circle"></i>
                        <p class="link-desc">About Me</p>
                    </a>
                </li>
                <li  class="link">
                    <a href="#about-project">
                        <i class="fas fa-project-diagram"></i>
                        <p class="link-desc">Project</p>
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
            <p class="profile-desc">–That's when I see something wangy wangy...</p>
        </div>

        <div id="about-me" class="main-section">
            <section class="about-section">
                <h2 class="title-section">About Me</h2>
                <p class="desc-section">I really don't know how to describe my self– Okay, here goes nothin. I like to play video games of course. My joy is coming from watching movies and animes. Although, most often now just watch animes. Steins;Gate one of my favorite anime and MCU one of my favorite movies. I'm still a student that live in Indonesia. My goal is to create some video games. Enough, let's just talk about this project, okay?</p>
            </section>
        </div>

        <div id="about-project" class="main-section">

            <section class="about-section">
                <h2 class="title-section">Project?</h2>
                <p class="desc-section">This is just a simple static website that contains information about DikDns. Maybe, you can call it DikDns Portfolio Web? I'm not sure, but that is the title of this project. I call it project because I'm never been doing something like this before. Preparing all of the technical stuff and something like that by my own. Also this are on-going project, so that means it will change as the time goes on. Well, basically my plan is to change this into a dynamic website. </p>
            </section>

            <section class="about-section">
                <h2 class="title-section">Credits</h2>
                <p class="desc-section">Special thanks to Dicky and Dzikri on giving all of the amazing feedback. Last one for you that coming here, thank you very much! <i class="far fa-grin-beam"></i></p>
            </section>

        </div>

    </main>
    `,
    // FOOTER SECTION
    footer: `<!-- FOOTER SECTION -->
    <footer id="footer" class="footer">
        <section class="footer-section footer-copyright">
            <p class="desc-footer">This is a non-profit project, all of those image are copyright to it's own source.</p>
            <p class="desc-footer">Copyright &copy; DikDns Project 2021 | Built by <a href="https://dikdns.github.io/andika-eka-kurnia">Andika Eka Kurnia</a></p>
        </section>
        <section class="footer-section footer-link">
            <a target="_blank" href="https://twitter.com/dik_dns" class="link">Twitter <i class="fab fa-twitter-square"></i></a>
            <a target="_blank" href="https://www.instagram.com/dikdns/" class="link">Instagram <i class="fab fa-instagram-square"></i></a>
            <a target="_blank" href="mailto:dikdnssocial@gmail.com" class="link">Send Email <i class="far fa-paper-plane"></i></a>
            <a href="../" class="link">Home <i class="fas fa-house-user"></i></a>
            <a href="/about" class="link">About <i class="fas fa-info-circle"></i></a>
            <a href="/suggestion" class="link">Suggestion <i class="fas fa-comment-alt"></i></a>
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