import React, {ChangeEvent, FC, FormEvent, Fragment, useState} from 'react';
import { now } from 'moment';

import { Review } from '../../types/review';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getError } from '../../store/reducer/main/main-selector';
import { useNavigate } from 'react-router-dom';
import { getFilm } from '../../store/reducer/film/film-selector';
import { setError } from '../../store/action';
import { postReview } from '../../store/api-action';
import { getUser } from '../../store/reducer/user/user-selector';
import { ReviewData } from '../../types/review-data';

import NotFoundPage from '../../pages/not-found-page/not-found-page';

const AddReview: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const user = useAppSelector(getUser);
  const [formValue, setFormValue] = useState<ReviewData>({
    rating: 0,
    reviewText: ''
  });
  const error = useAppSelector(getError);

  if (!film) {
    return <NotFoundPage/>;
  }

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      reviewText: event.target.value
    }));
  };
  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      rating: Number(event.target.value)
    }));
  };

  const onSubmit = (review: ReviewData) => {
    try {
      const newReview : Review = {
        comment: review.reviewText,
        rating: review.rating,
        filmId: film.id ?? 0,
        id: film.id ?? 0,
        user: { id: user?.id ?? 0, name: user?.name ?? ''},
        date: now().toString()
      };
      dispatch(postReview(newReview));
      dispatch(setError(null));
    } catch {
      dispatch(setError('Can\'t post a form'));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.reviewText && formValue.rating) {
      onSubmit(formValue);
      navigate(`/films/${film?.id}`);
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((star) => (
              <Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${star + 1}`}
                  type="radio"
                  name="rating"
                  value={star + 1}
                  checked={formValue.rating === star + 1}
                  onChange={handleStarsCountChange}
                />
                <label className="rating__label" htmlFor={`star-${star + 1}`}>Rating {star + 1}</label>
              </Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={formValue.reviewText}
          onChange={handleReviewTextChange}
          minLength={50}
          maxLength={399}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={formValue.reviewText.length < 50 || formValue.reviewText.length >= 400 || formValue.rating === 0}
          >
            Post
          </button>
        </div>
        { error ? <p>{error}</p> : null}
      </div>
    </form>
  );
};

export default AddReview;
