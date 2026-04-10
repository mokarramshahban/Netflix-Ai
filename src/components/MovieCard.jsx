import { TDMA_CDN_IMG_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={TDMA_CDN_IMG_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard