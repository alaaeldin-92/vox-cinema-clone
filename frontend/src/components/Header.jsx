import React from "react";

const Header = () => {
  return (
    <header role="banner">
      <section>
        <a class="brand vox" href="/" title="VOX Cinemas">
          VOX Cinemas
        </a>

        <nav class="light tertiary anonymous" role="navigation">
          <ul>
            <li class="site-search" data-target="site-search">
              <a href="/search" title="Search">
                <span
                  class="iconography white no-text hide-tablet hide-phone"
                  data-glyph="search"
                ></span>
                <span
                  class="iconography blue no-text hide-desktop"
                  data-glyph="search"
                ></span>
              </a>
            </li>
            <li class="site-login">
              <a class="" href="/account/login" data-google-label="login">
                <span
                  class="iconography blue no-text hide-desktop"
                  data-glyph="account"
                ></span>{" "}
                <span class="hide-tablet hide-phone">Login</span>
              </a>
            </li>
            <li class="hide-phone hide-tablet">
              <a class="" href="/account/signup" data-google-label="sign_up">
                Sign-Up
              </a>
            </li>
            <li class="locale hide-phone hide-tablet">
              <span class="flag en">
                <a
                  class="region"
                  href="https://uae.voxcinemas.com/regions"
                  title="Change my region"
                >
                  <img
                    src="https://uae.voxcinemas.com/assets/images/region/ae-128x128.png"
                    alt="UAE"
                    data-ot-ignore=""
                  />
                  <span>UAE</span>
                </a>
              </span>
            </li>
          </ul>
        </nav>

        <a class="flyout hide-desktop" data-target="navigation">
          <span class="iconography blue no-text" data-glyph="menu"></span>
        </a>
      </section>

      <section>
        <nav class="primary" role="navigation" data-flyout="navigation">
          <a
            class="close iconography white no-text hide-desktop"
            data-glyph="cross"
          ></a>
          <ul>
            <li class="heading hide-desktop">Menu</li>
            <li class="has-children">
              <a
                class=""
                href=""
                data-google-category=""
                data-uuid="d83146b3-9798-4be4-a89a-a60ad7fbe79c"
              >
                MOVIES{" "}
                <span
                  aria-hidden="true"
                  class="iconic"
                  data-glyph="caret-bottom"
                ></span>
              </a>
              <ul>
                <li
                  class="surface hide-desktop"
                  data-uuid="d83146b3-9798-4be4-a89a-a60ad7fbe79c"
                >
                  <span
                    class="iconography white prefixes-text"
                    data-glyph="back-arrow"
                    data-uuid="d83146b3-9798-4be4-a89a-a60ad7fbe79c"
                  ></span>{" "}
                  Back
                </li>
                <li class="sub-heading hide-desktop">MOVIES </li>
                <li class="">
                  <a class="" href="/movies/whatson" data-google-category="">
                    WHAT'S ON
                  </a>
                </li>
                <li class="">
                  <a class="" href="/movies/comingsoon" data-google-category="">
                    COMING SOON
                  </a>
                </li>
                <li class="">
                  <a class="" href="" data-google-category=""></a>
                </li>
              </ul>
            </li>
            <li class="has-children">
              <a
                class=""
                href=""
                data-google-category=""
                data-uuid="8df47b37-14bc-4225-99d6-37d3eab4c08e"
              >
                FOOD &amp; DRINKS{" "}
                <span
                  aria-hidden="true"
                  class="iconic"
                  data-glyph="caret-bottom"
                ></span>
              </a>
              <ul>
                <li
                  class="surface hide-desktop"
                  data-uuid="8df47b37-14bc-4225-99d6-37d3eab4c08e"
                >
                  <span
                    class="iconography white prefixes-text"
                    data-glyph="back-arrow"
                    data-uuid="8df47b37-14bc-4225-99d6-37d3eab4c08e"
                  ></span>{" "}
                  Back
                </li>
                <li class="sub-heading hide-desktop">FOOD &amp; DRINKS </li>
                <li class="">
                  <a
                    class=""
                    href="/order-food-and-drinks-online"
                    data-google-category=""
                  >
                    PRE-ORDER ONLINE
                  </a>
                </li>
                <li class="">
                  <a class="" href="/in-seat-delivery" data-google-category="">
                    IN-SEAT DELIVERY
                  </a>
                </li>
                <li class="">
                  <a class="" href="/vox-exclusives" data-google-category="">
                    VOX EXCLUSIVES
                  </a>
                </li>
                <li class="">
                  <a class="" href="/home-delivery" data-google-category="">
                    HOME DELIVERY
                  </a>
                </li>
              </ul>
            </li>
            <li class="has-children">
              <a
                class=""
                href="/ways-to-watch/summary"
                data-google-category=""
                data-uuid="f880d2c1-0605-4e2e-9fad-e3671038289b"
              >
                WAYS TO WATCH{" "}
                <span
                  aria-hidden="true"
                  class="iconic"
                  data-glyph="caret-bottom"
                ></span>
              </a>
              <ul>
                <li
                  class="surface hide-desktop"
                  data-uuid="f880d2c1-0605-4e2e-9fad-e3671038289b"
                >
                  <span
                    class="iconography white prefixes-text"
                    data-glyph="back-arrow"
                    data-uuid="f880d2c1-0605-4e2e-9fad-e3671038289b"
                  ></span>{" "}
                  Back
                </li>
                <li class="sub-heading hide-desktop">WAYS TO WATCH </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/samsung-onyx"
                    data-google-category=""
                  >
                    SAMSUNG ONYX
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/snow-cinema"
                    data-google-category=""
                  >
                    SNOW CINEMA
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/private-cinemas"
                    data-google-category=""
                  >
                    PRIVATE CINEMAS
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/imax"
                    data-google-category=""
                  >
                    IMAX
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ways-to-watch/max" data-google-category="">
                    MAX
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/gold"
                    data-google-category=""
                  >
                    GOLD
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/theatre"
                    data-google-category=""
                  >
                    THEATRE
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ways-to-watch/kids"
                    data-google-category=""
                  >
                    KIDS
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ways-to-watch/4dx" data-google-category="">
                    4DX
                  </a>
                </li>
              </ul>
            </li>
            <li class="has-children">
              <a
                class=""
                href="/ticket-offer/summary"
                data-google-category=""
                data-uuid="4dce1e46-af3a-4fad-a4bd-f33a00dbb508"
              >
                TICKET OFFERS{" "}
                <span
                  aria-hidden="true"
                  class="iconic"
                  data-glyph="caret-bottom"
                ></span>
              </a>
              <ul>
                <li
                  class="surface hide-desktop"
                  data-uuid="4dce1e46-af3a-4fad-a4bd-f33a00dbb508"
                >
                  <span
                    class="iconography white prefixes-text"
                    data-glyph="back-arrow"
                    data-uuid="4dce1e46-af3a-4fad-a4bd-f33a00dbb508"
                  ></span>{" "}
                  Back
                </li>
                <li class="sub-heading hide-desktop">TICKET OFFERS </li>
                <li class="">
                  <a class="" href="/ticket-offer/adcb" data-google-category="">
                    ADCB Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/fab-share"
                    data-google-category=""
                  >
                    FAB SHARE Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/citibank"
                    data-google-category=""
                  >
                    Citibank Offers
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ticket-offer/cbd" data-google-category="">
                    CBD Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/mashreq"
                    data-google-category=""
                  >
                    Mashreq Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/rak-bank"
                    data-google-category=""
                  >
                    RAKBANK Offers
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ticket-offer/fab" data-google-category="">
                    FAB Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/standard-chartered-bank"
                    data-google-category=""
                  >
                    Standard Chartered Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/flexi-visa"
                    data-google-category=""
                  >
                    Flexi Emirates NBD Visa Card Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/emirates-islamic"
                    data-google-category=""
                  >
                    Emirates Islamic Offers
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ticket-offer/nbf" data-google-category="">
                    NBF Offers
                  </a>
                </li>
                <li class="">
                  <a class="" href="/ticket-offer/hsbc" data-google-category="">
                    HSBC Offers
                  </a>
                </li>
                <li class="">
                  <a class="" href="/movie_pass_offers" data-google-category="">
                    Other Offers
                  </a>
                </li>
                <li class="">
                  <a
                    class=""
                    href="/ticket-offer/emirates-nbd-signature-banking-offer"
                    data-google-category=""
                  >
                    Emirates NBD Signature Banking Offers
                  </a>
                </li>
              </ul>
            </li>
            <li class="">
              <a class="" href="/vox-voice" data-google-category="voxvoice">
                VOX VOICE
              </a>
            </li>
            <li class="locale hide-desktop">
              <span class="flag en">
                <a
                  class="region"
                  href="https://uae.voxcinemas.com/regions"
                  title="Change my region"
                >
                  <img
                    src="/assets/images/region/ae-128x128.png"
                    alt="UAE"
                    data-ot-ignore=""
                  />
                  <span>UAE</span>
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
