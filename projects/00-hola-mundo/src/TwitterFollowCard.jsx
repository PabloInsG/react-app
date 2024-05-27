
import { useState } from "react";

export function TwitterFollowCard({/*nombre*/children, span, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const image = `https://unavatar.io/${span}`;

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={image} alt="El avatar de "  className="tw-followCard-avatar"/>
                <div>
                    <strong>{children}</strong>
                    <span className="tw-followCard-span">@{span}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">
                        {text}    
                    </span>
                    <span className="tw-followCard-stop-follow">
                        Dejar de Seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}

