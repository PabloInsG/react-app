import { Button } from "./ButtonFollowCard";


export function TwitterFollowCard({/*nombre*/children, span, isFollowing}) {
    
    const image = `https://unavatar.io/${span}`;
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
                <Button text={text}/>
            </aside>
        </article>
    )
}

