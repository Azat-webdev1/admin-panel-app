import { IMovie } from "./movie.interfaces";
import { IUser } from "./user.interfaces";

export interface IReview {
  it: number
  user: IUser
  movie: IMovie
  description: string
  
}