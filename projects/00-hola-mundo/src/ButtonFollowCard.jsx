import './App.css'

export function Button ({text}) {
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    return (
            <button className={buttonClassName}>
                {text}
            </button>
    )
}