import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer role="contentinfo">
        <section class="tertiary">
          <article>
            <a class="brand vox" href="/">
              VOX Cinemas
            </a>

            <div>
              <h5>STAY IN TOUCH</h5>
              <div className="grid grid-flow-col mt-[20px]">
                <a
                  className="bg-[#474749] rounded-full w-10 h-10 grid place-items-center"
                  href="https://www.facebook.com/voxcinemas"
                  title="Follow us on Facebook"
                >
                  <ImFacebook />
                </a>

                <a
                  className="bg-[#474749] rounded-full w-10 h-10 grid place-items-center"
                  href="https://www.twitter.com/voxcinemas"
                  title="Follow us on Twitter"
                >
                  <ImTwitter />
                </a>

                <a
                  className="bg-[#474749] rounded-full w-10 h-10 grid place-items-center"
                  href="https://www.instagram.com/voxcinemas"
                  title="Follow us on Instagram"
                >
                  <FiInstagram />
                </a>

                <a
                  className="bg-[#474749] rounded-full w-10 h-10 grid place-items-center"
                  href="https://www.youtube.com/user/voxcinemas"
                  title="Follow us on YouTube"
                >
                  <ImYoutube />
                </a>
              </div>
            </div>
          </article>

          <nav role="navigation" class=" can-toggle">
            <h5>About</h5>
            <ul className="block">
              <li class="">
                <a class="" href="/about" data-google-category="aboutus">
                  About Us
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/terms-and-conditions"
                  data-google-category="termsandconditions"
                >
                  Terms and Conditions
                </a>
              </li>
              <li class="">
                <a class="" href="/careers" data-google-category="careers">
                  Careers
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/sustainability"
                  data-google-category="sustainability"
                >
                  Sustainability
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/corporate-events"
                  data-google-category="groupsandcorporateevents"
                >
                  Groups &amp; Corporate Events
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="https://uae.voxcinemas.com/school-trips"
                  data-google-category="schoolbookings"
                >
                  School Bookings
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/vox-cinemas-app"
                  data-google-category="voxcinemasapp"
                >
                  VOX Cinemas App
                </a>
              </li>
              <li class="has-children">
                <a
                  class=""
                  href="https://www.majidalfuttaim.com/en/responsible-disclosure-policy"
                  data-google-category="responsibledisclosurepolicy"
                >
                  Responsible Disclosure Policy
                </a>
              </li>
            </ul>
          </nav>

          <nav role="navigation" class=" can-toggle">
            <h5>Help &amp; Support</h5>
            <ul className="block">
              <li class="">
                <a class="" href="/refunds" data-google-category="refunds">
                  Refunds
                </a>
              </li>
              <li class="">
                <a class="" href="/contact-us" data-google-category="contactus">
                  Contact Us
                </a>
              </li>
              <li class="">
                <a class="" href="/faq" data-google-category="faqs">
                  FAQs
                </a>
              </li>
              <li class="">
                <a class="" href="/cinemas" data-google-category="findus">
                  Find Us
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/health-and-safety"
                  data-google-category="healthandsafety"
                >
                  Health &amp; Safety
                </a>
              </li>
              <li class="">
                <a
                  class="onetrust-cookie-dialog"
                  href=""
                  data-google-category="cookiesettings"
                >
                  Cookie Settings
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/privacy-center"
                  data-google-category="privacycenter"
                >
                  Privacy Center
                </a>
              </li>
            </ul>
          </nav>

          <nav role="navigation" class=" can-toggle">
            <h5>Explore Our Site</h5>
            <ul className="block">
              <li class="">
                <a
                  class=""
                  href="/movies/whatson"
                  data-google-category="what's on"
                >
                  What's On
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/movies/comingsoon"
                  data-google-category="coming soon"
                >
                  Coming Soon
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/food-and-drinks"
                  data-google-category="foodanddrinks"
                >
                  Food &amp; Drinks
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/movie-genres"
                  data-google-category="allmoviegenres"
                >
                  All Movie Genres
                </a>
              </li>
              <li class="">
                <a
                  class=""
                  href="/promotions"
                  data-google-category="promotions"
                >
                  Promotions
                </a>
              </li>
              <li class="">
                <a class="" href="/vox-voice" data-google-category="voxvoice">
                  VOX Voice
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <article class="applications">
            <h5>Download our mobile app</h5>

            <a
              class="application-store ios"
              href="https://itunes.apple.com/app/id669495038?mt=8"
            >
              Download on the AppStore
            </a>
            <a
              class="application-store android"
              href="https://play.google.com/store/apps/details?id=com.voxcinemas.voxcinemasdev"
            >
              Get it on Google Play
            </a>
          </article>
          <article>
            <p class="copyright">© 2023 VOX Cinemas. All rights protected.</p>
          </article>
        </section>
      </footer>

      <footer class="maf" role="contentinfo">
        <section>
          <article>
            <a class="brand maf" href="https://www.majidalfuttaim.com/">
              Majid Al Futtaim
            </a>
          </article>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
