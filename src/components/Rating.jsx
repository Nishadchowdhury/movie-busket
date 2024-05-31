import Star from '../assets/star.svg'



export default function Rating({ value }) {

    const stars = Array(value).fill(Star)

    return (
        stars.map((src, i) => <img key={i} src={src} width="14" height="14" alt="star" />)
    )
}
