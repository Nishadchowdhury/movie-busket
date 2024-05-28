import Star from '../assets/star.svg'



export default function Rating({ value }) {

    const stars = Array(value).fill(Star)

    return (
        stars.map((src) => <img key={src} src={src} width="14" height="14" alt="star" />)
    )
}
