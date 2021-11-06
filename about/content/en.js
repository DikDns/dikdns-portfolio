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

        <div class="suggest-lang" id="suggest-lang">
            <i class="fas fa-play"></i>
            <p>Ubah Bahasa?</p>
        </div>

    </nav>
    `,
    // MAIN SECTION
    main: `<!-- MAIN SECTION -->
    <main id="main" class="main">

        <section class="main-section section-background">

            <h2 class="title-section">Background</h2>

            <p class="desc-section">You've came here? So curious aren't you? <i class="far fa-grin"></i></p>

            <div class="description-container">
                <p class="desc-section">DikDns basically stand out for Andika the Diamond Sword– I know, it's ridiculous right? <i class="far fa-grin-squint"></i> He got influenced by one of the OG Minecraft Youtuber, DanTDM– You see? Even it's almost similar. But before that, the first one he used was IGM– stand for Iron Golem. Then it was changed 'cause he doesn't like the sound of it.</p>

                <p class="desc-section">Maybe between his old youtube social friends, still remember this username. Are you one of them? But, if you never heard of it– Well, thanks for coming! <i class="far fa-smile-beam"></i> Hope you can be friend with him.</p>
            </div>
        </section>

        

        <section class="main-section section-user">
            <h2 class="title-section">People Behind it?</h2>
            <div class="description-container">
                <p class="desc-section">You read the name and probably you know him already, but– yes Andika Eka Kurnia is one of the people that currently using this username.</p>
                <p class="desc-section">Well I don't want to talk about him much. But if you curious, you can check his page. Just click <a href="/andika-eka-kurnia">here</a> to go, I don't want to make that link bigger.</p>
            </div>
        </section>



        <section class="main-section section-timeline">
            <h2 class="title-section">Timeline</h2>
            <ul class="timeline-container">
                <li class="timeline"><strong>2015</strong> – <i class="fas fa-wrench"></i> 'DIKDNS' was created.</li>
                <li class="timeline"><strong>2015</strong> – <i class="fas fa-dice-d6"></i> a Newbie Player Kid at Minecraft: Pocket Edition.</li>
                <li class="timeline"><strong>2016</strong> – <i class="fas fa-pencil-alt"></i> He trying to play and also create Roblox Game then got introduce in Programming, Wow!</li>
                <li class="timeline"><strong>2016</strong> – <i class="fas fa-dice-d6"></i> Also that Kid became a little bit pro player now in Minecraft: Pocket Edition.</li>
                <li class="timeline"><strong>2017</strong> – <i class="fab fa-youtube"></i> He started serious making Minecraft: Pocket Edition content on Youtube. Got a little bit introduce in Type of Moba Game things.</li>
                <li class="timeline"><strong>2018</strong> – <i class="fas fa-chess-queen"></i> Now he tried to play Moba– Yes, Mobile Legends: Bang Bang. He was an intermediate level of player. I mean seriously, he played a lot and follow the e-sports industry growing in Indonesia before.</li>
                <li class="timeline"><strong>2019</strong> – <i class="fas fa-globe-americas"></i> The most epic battle royale game came to mobile phone? Yes, he played PlayerUnknown's Battlegrounds Mobile. He was attended in one tournament competition with his squad, although his mental not ready yet.</li>
                <li class="timeline"><strong>2019</strong> – <i class="fas fa-dice-d6"></i> Minecraft: Java Edition has an Aquatic and Village Pillage update then that Kid interested again.</li>
                <li class="timeline"><strong>2020</strong> – <i class="fas fa-cloud-moon"></i> He finished a very good adventures– calming game, Sky: Children of the Light.</li>
                <li class="timeline"><strong>2020</strong> – <i class="fas fa-money-bill"></i> MMORPG? He never played that kind of game. But he tried Dragon Raja and he was having fun too.</li>
                <li class="timeline"><strong>2020</strong> – <i class="fas fa-chess-pawn"></i> He starting to play one of the famous Moba Game on Desktop that came to Mobile, League of Legends: Wild Rift.</li>
                <li class="timeline"><strong>2021</strong> – <i class="fas fa-tractor"></i> He purchased a Harvest Moon– Similar farming simulation game, Stardew Valley on Mobile.</li>
                <li class="timeline"><strong>2021</strong> – <i class="fas fa-scroll"></i> He was very curious about MMORPG, and yet he tried another one. Toram Online.</li>
                <li class="timeline"><strong>2021</strong> – <i class="fas fa-dice-d6"></i> Minecraft: Java Edition has an Nether update and that Kid purchased it.</li>
                <li class="timeline"><strong>2021</strong> – <i class="fas fa-music"></i> He is now understand how rhythm game's works and become an intermediate player in <a target="_blank" href="https://osu.ppy.sh/home">Osu!</a></li>
                <li class="timeline"><strong>2021</strong> – <i class="icons fas fa-dharmachakra"></i> He was focused on Honkai Impact 3rd because of his bestfriend.</li>
                <li class="timeline"><strong>NOW</strong> – <i class="icons fas fa-clock"></i> Well, you still here??? Thanks! Sadly, he is still offline for a couple of years starting from October the first, 2021.</li>
            </ul>
            <p class="desc-section">Click <a href="/documentation">here</a> to see a documentation of every games he play.</p>
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
            <a href="../" class="link">Home <i class="fas fa-house-user"></i></a>
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
    <script src="js/main.js"></script>
    `

};



const pageEn = `
${EnglishPage.nav}
${EnglishPage.main}
${EnglishPage.footer}
${EnglishPage.js}
`;