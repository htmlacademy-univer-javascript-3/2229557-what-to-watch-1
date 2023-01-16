import React, {ChangeEvent, FC, FormEvent, Fragment, useState} from 'react';
import { Review } from '../../types/review';
import { api } from '../../services/api';
import { APIRoute } from '../../const';
import { ReviewData } from '../../types/review-data';


type Props = {
  filmId: number;
}

const AddReview: FC<Props> = (props) => {
  const { filmId } = props;
  const [formValue, setFormValue] = useState<ReviewData>({
    rating: 0,
    reviewText: ''
  });
  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      reviewText: event.target.value
    }));
  };
  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      starsCount: Number(event.target.value)
    }));
  };

  const onSubmit = (review: ReviewData) => {
    api.post<Review[]>(`${APIRoute.Comments}/${filmId ?? 0}`, {...review}).then();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.reviewText && formValue.rating) {
      onSubmit(formValue);
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((cur) => (
              <Fragment key={cur}>
                <input className="rating__input" id={`star-${cur + 1}`} type="radio" name="rating" value={cur + 1} checked={formValue.rating === cur + 1} onChange={handleStarsCountChange}/>
                <label className="rating__label" htmlFor={`star-${cur + 1}`}>Rating {cur + 1}</label>
              </Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={formValue.reviewText}
          onChange={handleReviewTextChange}
          maxLength={400}
          minLength={50}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default AddReview;
