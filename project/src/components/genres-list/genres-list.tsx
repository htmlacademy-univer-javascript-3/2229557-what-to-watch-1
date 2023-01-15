import { useAppDispatch } from '../../hooks/hooks';
import { changeGenre } from '../../store/action';

type Props = {
  genres: string[];
  activeGenre: string;
};

function GenresList({genres, activeGenre}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre} onClick={() => handleChangeActiveGenre(genre)}>
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
