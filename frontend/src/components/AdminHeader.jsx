import React from "react";

const AdminHeader = () => {
  return (
    <header role="banner">
      <section>
        <a class="brand vox" href="/admin" title="VOX Cinemas">
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
        </nav>
      </section>
    </header>
  );
};

export default AdminHeader;
