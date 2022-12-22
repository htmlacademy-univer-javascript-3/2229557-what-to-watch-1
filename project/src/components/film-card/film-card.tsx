import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmShort } from '../../types/film-short';
import VideoPlayer from '../video/video-player';

type Props = {
  film: FilmShort;
  onHover: Dispatch<SetStateAction<number | null>>;
}

const FilmCard: FC<Props> = (props) => {
  const { film, onHover } = props;
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
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={(_) => {
        setDoesNeedVideoToPlay(true);
        onHover?.((__) => film.id);
      }}
      onMouseLeave={handleCardMouseLeave}
    >
      <VideoPlayer
        film={film}
        needSound={false}
        isPlaying={doesVideoPlaying}
        width={280}
        height={175}
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
