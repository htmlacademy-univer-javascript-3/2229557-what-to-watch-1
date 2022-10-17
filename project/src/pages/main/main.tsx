function MainPage(): JSX.Element {
    return (
        <div>
            <meta charSet="UTF-8" />
            <title>WTW</title>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="css/main.min.css" />
            <div className="visually-hidden">
                {/* inject:svg */}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <symbol id="add" viewBox="0 0 19 20">
                        {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                        <title>+</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
                        </g>
                    </symbol>
                    <symbol id="full-screen" viewBox="0 0 27 27">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
                    </symbol>
                    <symbol id="in-list" viewBox="0 0 18 14">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
                    </symbol>
                    <symbol id="pause" viewBox="0 0 14 21">
                        <symbol id="play-s" viewBox="0 0 19 19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
                        </symbol>
                        {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                        <title>Artboard</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Artboard" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
                            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
                        </g>
                    </symbol>
                </svg>
                {/* endinject */}
            </div>
            <section className="film-card">
                <div className="film-card__bg">
                    <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
                </div>
                <h1 className="visually-hidden">WTW</h1>
                <header className="page-header film-card__head">
                    <div className="logo">
                        <a className="logo__link">
                            <span className="logo__letter logo__letter--1">W</span>
                            <span className="logo__letter logo__letter--2">T</span>
                            <span className="logo__letter logo__letter--3">W</span>
                        </a>
                    </div>
                    <ul className="user-block">
                        <li className="user-block__item">
                            <div className="user-block__avatar">
                                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
                            </div>
                        </li>
                        <li className="user-block__item">
                            <a className="user-block__link">Sign out</a>
                        </li>
                    </ul>
                </header>
                <div className="film-card__wrap">
                    <div className="film-card__info">
                        <div className="film-card__poster">
                            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
                        </div>
                        <div className="film-card__desc">
                            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
                            <p className="film-card__meta">
                                <span className="film-card__genre">Drama</span>
                                <span className="film-card__year">2014</span>
                            </p>
                            <div className="film-card__buttons">
                                <button className="btn btn--play film-card__button" type="button">
                                    <svg viewBox="0 0 19 19" width={19} height={19}>
                                        <use xlinkHref="#play-s" />
                                    </svg>
                                    <span>Play</span>
                                </button>
                                <button className="btn btn--list film-card__button" type="button">
                                    <svg viewBox="0 0 19 20" width={19} height={20}>
                                        <use xlinkHref="#add" />
                                    </svg>
                                    <span>My list</span>
                                    <span className="film-card__count">9</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page-content">
                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>
                    <ul className="catalog__genres-list">
                        <li className="catalog__genres-item catalog__genres-item--active">
                            <a href="#" className="catalog__genres-link">All genres</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Comedies</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Crime</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Documentary</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Dramas</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Horror</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Romance</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Sci-Fi</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Thrillers</a>
                        </li>
                    </ul>
                    <div className="catalog__films-list">
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Aviator</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">We need to talk about Kevin</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">What We Do in the Shadows</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/revenant.jpg" alt="Revenant" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Revenant</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/johnny-english.jpg" alt="Johnny English" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Johnny English</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/shutter-island.jpg" alt="Shutter Island" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Shutter Island</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/pulp-fiction.jpg" alt="Pulp Fiction" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Pulp Fiction</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">No Country for Old Men</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/snatch.jpg" alt="Snatch" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Snatch</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Moonrise Kingdom</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Seven Years in Tibet</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/midnight-special.jpg" alt="Midnight Special" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Midnight Special</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">War of the Worlds</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Dardjeeling Limited</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/orlando.jpg" alt="Orlando" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Orlando</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/mindhunter.jpg" alt="Mindhunter" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Mindhunter</a>
                            </h3>
                        </article>
                        <article className="small-film-card catalog__films-card">
                            <div className="small-film-card__image">
                                <img src="img/midnight-special.jpg" alt="Midnight Special" width={280} height={175} />
                            </div>
                            <h3 className="small-film-card__title">
                                <a className="small-film-card__link" href="film-page.html">Midnight Special</a>
                            </h3>
                        </article>
                    </div>
                    <div className="catalog__more">
                        <button className="catalog__button" type="button">Show more</button>
                    </div>
                </section>
                <footer className="page-footer">
                    <div className="logo">
                        <a className="logo__link logo__link--light">
                            <span className="logo__letter logo__letter--1">W</span>
                            <span className="logo__letter logo__letter--2">T</span>
                            <span className="logo__letter logo__letter--3">W</span>
                        </a>
                    </div>
                    <div className="copyright">
                        <p>© 2019 What to watch Ltd.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default MainPage;