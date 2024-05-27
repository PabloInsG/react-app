import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    /* Meh
    const pabloinsg = {isFollowing: true, span: 'PabloInsG'}
    const notsaam = {isFollowing: true, span: 'notsaam'}
    const jorgerojo = {isFollowing: true, span: 'JorgeRojo'}
    */
    return(
        <>
            <TwitterFollowCard
                //{... pabloinsg}
                /*Mejor */
                isFollowing
                nombre={'Pablo Insua Gerpe'}
                span={'PabloInsG'}
            >Pablo Insua Gerpe</TwitterFollowCard>
            <TwitterFollowCard 
                //{... notsaam}
                isFollowing
                nombre={'Samuel Fuentes Pazos'}
                span={'NotSaam'}
            >Samuel Fuentes Pazos</TwitterFollowCard>
            <TwitterFollowCard 
                //{... jorgerojo}
                isFollowing={false}
                nombre={'Jorge Rojo Gerpe'}
                span={'JorgeRojo'}
            >Jorge Rojo Gerpe
            </TwitterFollowCard>
        </>
    )
}
