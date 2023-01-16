import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Film } from '../../types/film';

import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  onMouseEnter: (film: Film) => void;
}

const FilmCard: FC<Props> = (props) => {
  const { film, onMouseEnter } = props;
  const [doesVideoPlaying, setDoesVideoPlaying] = useState(false);
  const [doesNeedVideoToPlay, setDoesNeedVideoToPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;

    if (doesNeedVideoToPlay) {
      setTimeout(() => needUpdate && setDoesVideoPlaying(true), 1000);
    }

    return () => {needUpdate = false;};
  }, [doesNeedVideoToPlay]);

  const handleCardMouseLeave = () => {
    setDoesNeedVideoToPlay(false);
    setDoesVideoPlaying(false);
  };
  return(
    <Link
      to={`/films/${film.id}`}
      className="small-film-card catalog__films-card small-film-card__link"
      onMouseEnter={(evt) => {
        onMouseEnter(film);
        setDoesNeedVideoToPlay(true);
      }}
      onMouseLeave={handleCardMouseLeave}
    >
      <div>
        <VideoPlayer
          film={film}
          needSound={false}
          isPlaying={doesVideoPlaying}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        {film.name}
      </h3>
    </Link>
  );
};

export default FilmCard;
