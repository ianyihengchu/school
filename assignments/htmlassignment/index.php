<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hybrid World</title>
    <meta name="description" content="Your go-to source for the crazy hybrid creative world.">
    <link rel="icon" href="img/WechatIMG4464.jpg" type="icon">
    <link rel="stylesheet" href="css/styles.css">


    <style>
        .reading-assistance {
            background-color: #000;
            color: #fff;
            line-height: 1.6;
            letter-spacing: 0.05em;
        }
        .reading-assistance * {
            padding: 10px;
        }
        .reading-assistance a {
            color: #ffff00;
        }

        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #f1f1f1;
            color: #333;
            text-align: center;
            padding: 10px;
            z-index: 1000;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
        }

        .cookie-banner p {
            margin: 0;
        }

        .cookie-banner a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }

        .cookie-banner a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

<?php include 'include/header.php'; ?>

    <main>

        <div id="cookie-banner" class="cookie-banner">
            <p>This site uses cookies to improve your experience. <a href="#" id="acceptCookies">Accept cookies</a></p>
        </div>
        
        <h1 class="site-title">This is a hybrid world</h1>
        <p class="site-description">Discover the things happening or will happen in the creative industry.</p>

        <section id="featured-article">
            <h2 class="section-title">Featured Article</h2>
            <article>
                <img src="img/ty5s4yx1yteegu5iafav.avif" alt="Photography: Nik Mirus"
                    style="width: 100%; height: auto; max-width: 100%;">
                <h3>Small Bags, Big Impact</h3>
                <p>Photography: Nik Mirus</p>
                <p>Little in size, but large in impact, these small bags from the likes of Dries Van Noten, Simone
                    Rocha, Rick Owens, and others prove that size is not equal to power.
                </p>
                <a href="articles/Small_Bags,Big_Impact.html">Read more</a>
            </article>
        </section>

        <section id="life-style-articles" class="category-section">
            <h2>Life-style</h2>
            <article>
                <img src="img/pbrhzwkdtekiec3dpzjj.avif" alt="By: Ross Scarano"
                    style="width: 100%; height: auto; max-width: 100%;">
                <h3>Max Rocha
                    Still Believes in
                    the Main Course</h3>
                <p>By: Ross Scarano</p>
                <p>The chef behind Café Cecilia on his new cookbook,
                    why breakfast matters, and the trouble with
                    trendy sharing menus.</p>
                <a href="articles/Max_Rocha_Still_Believes_in_the_Main_Course.html">Read more</a>
            </article>

            <article>
                <img src="img/1390559.jpg" alt="TextLaura Pitcher" style="width: 100%; height: auto; max-width: 100%;">
                <h3>The rise of the 'manifinsta'</h3>
                <p>By Sarah Lee</p>
                <p>The rise of the 'manifinsta': how social media became a manifestation tool</p>
                <a href="articles/The_rise_of_the_manifinsta.html">Read more</a>
            </article>
        </section>

        <section id="Music" class="category-section">
            <h2>Music</h2>
            <article>
                <img src="img/1390570.jpg" alt="Text Günseli Yalcinkaya"
                    style="width: 100%; height: auto; max-width: 100%;">
                <h3>Amnesia Scanner are so back</h3>
                <p class="music-author">By Günseli Yalcinkaya</p>
                <p>The Finnish duo's Hoax is a split album with collaborator and visual artist Freeka Tet</p>
                <a href="articles/Amnesia_Scanner_are_so_back.html">Read more</a>
            </article>

            <article>
                <img src="img/1388421.jpg" alt="Spotify Skate Noise in Berlin"
                    style="width: 100%; height: auto; max-width: 100%;">
                <h3>What went down when Spotify brought skate noise to Berlin</h3>
                <p class="music-author">By Dazed Digital</p>
                <p>The streaming giant's latest campaign saw skaters and musicians come together for a night of chaos at
                    Berghain Kantine</p>
                <a href="articles/spotify-skate-noise-berlin.html.html">Read more</a>
            </article>
        </section>

        <section id="Art" class="category-section">
            <h2>Art</h2>
            <article>
                <img src="img/1390525.jpg" alt="Beer can artwork" style="width: 100%; height: auto; max-width: 100%;">
                <h3>Rubbish art: how gallery staff accidentally binned a beer can artwork</h3>
                <p class="art-author">By Thom Waite</p>
                <p>Alexandre Lavet's 'Brut' was mistaken for trash and thrown away at a Paris art fair</p>
                <a href="articles/rubbish-art-gallery-staff-bin-beer-can-artwork.html">Read more</a>
            </article>

            <article>
                <img src="img/1387635.jpg" alt="Ryan McGinley, Prince Gyasi and Chen Man"
                    style="width: 100%; height: auto; max-width: 100%;">
                <h3>Ryan McGinley, Prince Gyasi and Chen Man on chasing light with an iPhone</h3>
                <p class="art-author">By Thom Waite</p>
                <p>The photographers discuss their new exhibition, Horizons, which celebrates 15 years of iPhone
                    photography</p>
                <a href="articles/ryan-mcginley-prince-gyasi-chen-man-horizons-iphone-photography.html">Read more</a>
            </article>
        </section>

        <section id="site-statistics">
            <h2>Site Statistics</h2>
            <table>
                <caption>Monthly Site Visitors</caption>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Visitors</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </section>

        <section id="featured-video">
            <h2>Featured Video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TAFTQt05zAg"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </section>
    </main>

    <footer>
        <p>This site uses cookies to improve your experience. </p>
    </footer>


    <script src="js/main.js"></script>
</body>

</html>