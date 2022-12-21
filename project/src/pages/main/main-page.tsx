import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {MainPageProp} from '../../types/main-page-props';
import {FilmCardProps} from '../../types/film-card-props';

const films: FilmCardProps[] = [
  {
    img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    img: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
  },
  {
    img: 'img/macbeth.jpg',
    name: 'Macbeth',
  },
  {
    img: 'img/aviator.jpg',
    name: 'Aviator',
  },
  {
    img: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
  },
  {
    img: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
  },
  {
    img: 'img/revenant.jpg',
    name: 'Revenant',
  },
  {
    img: 'img/johnny-english.jpg',
    name: 'Johnny English',
  },
  {
    img: 'img/shutter-island.jpg',
    name: 'Shutter Island',
  },
  {
    img: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
  },
  {
    img: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
  },
  {
    img: 'img/snatch.jpg',
    name: 'Snatch',
  },
  {
    img: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
  },
  {
    img: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
  },
  {
    img: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
  {
    img: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
  },
  {
    img: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
  },
  {
    img: 'img/orlando.jpg',
    name: 'Orlando',
  },
  {
    img: 'img/mindhunter.jpg',
    name: 'Mindhunter',
  },
  {
    img: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
];

function MainPage(props: MainPageProp): JSX.Element{
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.img} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={'img/the-grand-budapest-hotel-poster.jpg'}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
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
            {
              [
                'All genres',
                'Comedies',
                'Crime',
                'Documentary',
                'Dramas',
                'Horror',
                'Kids & Family',
                'Romance',
                'Sci-Fi',
                'Thrillers'
              ].map((item) => (
                <li className="catalog__genres-item catalog__genres-item--active" key={item}>
                  <a href="#" className="catalog__genres-link">{item}</a>
                </li>))
            }
          </ul>

          <div className="catalog__films-list">
            {
              films.map((film) =>
                <FilmCard {...film} key={film.name}/>)
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default MainPage;
