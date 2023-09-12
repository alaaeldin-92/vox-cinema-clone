import React, { useState } from "react";

const SelectCinema = () => {
  const [cinemaActive, setCinemaActive] = useState(false);
  const [moviesActive, setMoviesActive] = useState(false);

  const toggleCinemaClass = () => {
    setCinemaActive(!cinemaActive);
    setMoviesActive(false);
  };

  const toggleMovieClass = () => {
    setMoviesActive(!moviesActive);
    setCinemaActive(false);
  };

  return (
    <section>
      <nav>
        <form
          className="quick-filter"
          action="/showtimes"
          method="get"
          autocomplete="off"
        >
          <div
            className={`pseudo-multi-select cinemas ${
              cinemaActive ? "active" : ""
            } `}
            onClick={toggleCinemaClass}
          >
            <span
              className="label"
              data-none="Select Your Cinema(s)"
              data-selected="{0} Cinema(s) Selected"
            >
              Select Your Cinema(s)
            </span>
            <div
              className="dropdown"
              style={cinemaActive ? { display: "block" } : {}}
            >
              <div className="scroll has-toolbar">
                <ol className="values">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="abu-dhabi-mall-abu-dhabi"
                      />
                      <span>Abu Dhabi Mall - Abu Dhabi</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="al-hamra-mall-ras-al-khaimah"
                      />
                      <span>Al Hamra Mall - Ras Al Khaimah</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="c" value="al-jimi-mall" />
                      <span>Al Jimi Mall</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="c" value="burjuman" />
                      <span>Burjuman</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-ajman"
                      />
                      <span>City Centre Ajman</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-al-zahia"
                      />
                      <span>City Centre Al Zahia</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-deira"
                      />
                      <span>City Centre Deira</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-fujairah"
                      />
                      <span>City Centre Fujairah</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-mirdif"
                      />
                      <span>City Centre Mirdif</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-sharjah"
                      />
                      <span>City Centre Sharjah</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="city-centre-shindagha"
                      />
                      <span>City Centre Shindagha</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="dubai-festival-city-mall"
                      />
                      <span>Dubai Festival City Mall</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="kempinski-hotel-at-moe"
                      />
                      <span>Kempinski Hotel at MOE</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="megaplex-cineplex-grand-hyatt"
                      />
                      <span>MEGAPLEX(Cineplex Grand Hyatt)</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="mall-of-the-emirates"
                      />
                      <span>Mall of the Emirates</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="c" value="mercato" />
                      <span>Mercato</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="c" value="nakheel-mall" />
                      <span>Nakheel Mall</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="nation-towers-abu-dhabi"
                      />
                      <span>Nation Towers - Abu Dhabi</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="reem-mall-abu-dhabi"
                      />
                      <span>Reem Mall - Abu Dhabi</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="the-galleria-al-maryah-island"
                      />
                      <span>The Galleria Al Maryah Island</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="wafi-mall-at-wafi-city"
                      />
                      <span>Wafi Mall at Wafi City</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="c"
                        value="yas-mall-abu-dhabi"
                      />
                      <span>Yas Mall - Abu Dhabi</span>
                    </label>
                  </li>
                </ol>
              </div>

              <div className="toolbar">
                <a className="action primary outline clear">Clear All</a>
                <a className="action primary done">Done</a>
              </div>
            </div>
          </div>

          <div
            className={`pseudo-multi-select movies ${
              moviesActive ? "active" : ""
            } `}
            onClick={toggleMovieClass}
          >
            <span
              className="label"
              data-none="Select Your Movie(s)"
              data-all="Any Movie"
              data-selected="{0} Movie(s) Selected"
            >
              Select Your Movie(s)
            </span>
            <div
              className="dropdown"
              style={moviesActive ? { display: "block" } : {}}
            >
              <div className="scroll has-toolbar">
                <div className="pre-selection">
                  <a className="action primary outline all">Any Movie</a>
                </div>

                <ol className="values">
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="3alzero-arabic" />
                      <span>(Arabic) 3alzero</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="adiye-tamil" />
                      <span>(Tamil) Adiye</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="agent-zero-arabic"
                      />
                      <span>(Arabic) Agent Zero</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="aincho-paincho-nepali"
                      />
                      <span>(Nepali) Aincho Paincho</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="barbie" />
                      <span>Barbie</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="blue-beetle" />
                      <span>Blue Beetle</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="cats-in-the-museum"
                      />
                      <span>Cats in the Museum</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="cheta-singh-punjabi"
                      />
                      <span>(Punjabi) Cheta Singh</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="demon-slayer-orchestra-concert-japanese"
                      />
                      <span>(Japanese) Demon Slayer: Orchestra Concert</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="dream-girl-2-hindi"
                      />
                      <span>(Hindi) Dream Girl 2</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="el-batta-el-safra-arabic"
                      />
                      <span>(Arabic) El Batta El Safra</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="elemental" />
                      <span>Elemental</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="gadar-2-hindi" />
                      <span>(Hindi) Gadar 2</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="gran-turismo" />
                      <span>Gran Turismo</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="jailer-tamil" />
                      <span>(Tamil) Jailer</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="jawan-hindi" />
                      <span>(Hindi) Jawan</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="jawan-tamil" />
                      <span>(Tamil) Jawan</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="jawan-telugu" />
                      <span>(Telugu) Jawan</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="khamas-gawlat-arabic"
                      />
                      <span>(Arabic) Khamas Gawlat</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="kick-tamil" />
                      <span>(Tamil) Kick</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="king-of-kotha-malayalam"
                      />
                      <span>(Malayalam) King of Kotha</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="kushi-telugu" />
                      <span>(Telugu) Kushi</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="mastaney-punjabi"
                      />
                      <span>(Punjabi) Mastaney</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="matrah-matrouh-arabic"
                      />
                      <span>(Arabic) Matrah Matrouh</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="mavka-the-forest-song"
                      />
                      <span>Mavka: The Forest Song</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="meg-2-the-trench"
                      />
                      <span>Meg 2: The Trench</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="miss-shetty-mr-polishetty-telugu"
                      />
                      <span>(Telugu) Miss Shetty Mr. Polishetty</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="mission-impossible-dead-reckoning"
                      />
                      <span>Mission Impossible: Dead Reckoning</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="mr-ex-arabic" />
                      <span>(Arabic) Mr EX</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="omg-2-hindi" />
                      <span>(Hindi) OMG 2</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="oppenheimer" />
                      <span>Oppenheimer</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="paws-of-fury" />
                      <span>Paws Of Fury</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="pinocchio-and-friends"
                      />
                      <span>Pinocchio and Friends</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="puppy-love" />
                      <span>Puppy Love</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="ramachandra-boss-and-co-malayalam"
                      />
                      <span>(Malayalam) Ramachandra Boss &amp; Co</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="rdx-malayalam" />
                      <span>(Malayalam) RDX</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="retribution" />
                      <span>Retribution</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="rocky-aur-rani-kii-prem-kahaani-hindi"
                      />
                      <span>(Hindi) Rocky Aur Rani Kii Prem Kahaani</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="sapta-sagaradaache-ello-side-a-kannada"
                      />
                      <span>(Kannada) Sapta Sagaradaache Ello: Side A</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="shams-arabic" />
                      <span>(Arabic) Shams</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="sound-of-freedom"
                      />
                      <span>Sound of Freedom</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="talk-to-me" />
                      <span>Talk To Me</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="the-adventures-of-jurassic-pet-2-the-lost-secret"
                      />
                      <span>
                        The Adventures of Jurassic Pet 2: The Lost Secret
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="the-collective" />
                      <span>The Collective</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="the-dive" />
                      <span>The Dive</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="the-equalizer-3" />
                      <span>The Equalizer 3</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="the-hero-of-centopia"
                      />
                      <span>The Hero of Centopia</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="the-nun-2" />
                      <span>The Nun 2</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="the-super-mario-bros"
                      />
                      <span>The Super Mario Bros</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" name="m" value="toby-kannada" />
                      <span>(Kannada) Toby</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="m"
                        value="wesh-x-wesh-arabic"
                      />
                      <span>(Arabic) Wesh X Wesh</span>
                    </label>
                  </li>
                </ol>
              </div>

              <div className="toolbar">
                <a className="action primary outline clear">Clear All</a>
                <a className="action primary done">Done</a>
              </div>
            </div>
          </div>

          <button type="submit" className="action secondary">
            Find Times and Book
          </button>
        </form>
      </nav>
    </section>
  );
};

export default SelectCinema;
