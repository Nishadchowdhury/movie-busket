/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { getImgUrl } from '../utils/cine-utility'
import Rating from './Rating'
import MovieDetailsModal from './MovieDetailsModal'
import { MovieContext } from '../contexts'

export default function MovieCard({ movie }) {

    const [modal, setModal] = useState(false)
    const [movieSelected, setMovieSelected] = useState(null, false)

    const { cartData, setCartData } = useContext(MovieContext)

    const handleAddToCart = (e) => {
        e.stopPropagation();

        const found = cartData.find(item => {
            return item.id === movie.id
        })

        if (!found) {
            return setCartData([...cartData, movie])
        } else {
            return console.log(`The movie ${movie.title} has been added to the cart already!`);
        }


    }

    const handleModalClose = () => {
        setModal(false)
        setMovieSelected(null)
    }

    const handleSelectedMovie = () => {
        setModal(true)
        setMovieSelected(movie)
    }

    return (
        <>
            {modal &&
                <MovieDetailsModal
                    movie={movieSelected}
                    onClose={handleModalClose}
                    onAddToCart={handleAddToCart}
                />
            }

            <figure key={movie.id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a
                    onClick={handleSelectedMovie}
                >
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            onClick={e => handleAddToCart(e)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>{movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a >
            </figure >
        </>
    )
}
