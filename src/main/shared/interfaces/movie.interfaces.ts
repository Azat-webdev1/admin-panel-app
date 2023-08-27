import { IReview } from './review.interfaces'

export interface IMovie {
  name: string
  rating: number
  poster: string
  views: number
  reviews?: IReview[]
  fees: number
}
