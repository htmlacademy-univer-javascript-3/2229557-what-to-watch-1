import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    movieId: 1,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate'
    }
  },
  {
    id: 2,
    movieId: 2,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate Muir'
    }
  },
  {
    id: 3,
    movieId: 3,
    comment: 'Travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Artem'
    }
  },
  {
    id: 4,
    movieId: 4,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Muir'
    }
  },
  {
    id: 5,
    movieId: 5,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Ass'
    }
  },
  {
    id: 6,
    movieId: 6,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate Muir'
    }
  },
  {
    id: 7,
    movieId: 7,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate Muir'
    }
  },
  {
    id: 8,
    movieId: 8,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Mon Oct 24 2022 19:22:35 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate Muir'
    }
  },
];

export function getReviewsByMovieId(movieId:number): Review[] {
  return reviews.filter((review) => review.movieId === movieId);
}
