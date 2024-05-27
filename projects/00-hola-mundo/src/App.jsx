import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    /* No es lo optimo
    const pabloinsg = {isFollowing: true, span: 'PabloInsG'}
    const notsaam = {isFollowing: true, span: 'notsaam'}
    const jorgerojo = {isFollowing: true, span: 'JorgeRojo'}
    */

    const users = [
        {
            span: 'PabloInsG',
            nombre: 'Pablo Insua',
            initialIsFollowing: true
        },
        {
            span: 'JorgeRojo',
            nombre: 'Jorge Rojo',
            initialIsFollowing: true
        },
        {
            span: 'NotSaam',
            nombre: 'Samuel Fuentes',
            initialIsFollowing: false
        }
    ]

    return(
        <>
            <section>
                {
                    users.map(({span, nombre, initialIsFollowing}) => {
                        /*
                        Si usamos un mapa debemos usar "key" que debe ser algo unico un id un
                        username que sepamos que sea unico
                        */
                        return(
                            <TwitterFollowCard
                                key={span}
                                initialIsFollowing={initialIsFollowing}
                                nombre={nombre}
                                span={span}
                            >
                                {nombre}
                            </TwitterFollowCard>
                        )
                    })

                }
            </section>
            <TwitterFollowCard
                //{... pabloinsg} Esto por lo tanto tampoco
                /*Mejor */
                initialIsFollowing
                nombre={'Pablo Insua Gerpe'}
                span={'PabloInsG'}
            >Pablo Insua Gerpe</TwitterFollowCard>
            <TwitterFollowCard 
                //{... notsaam}
                initialIsFollowing
                nombre={'Samuel Fuentes Pazos'}
                span={'NotSaam'}
            >Samuel Fuentes Pazos</TwitterFollowCard>
            <TwitterFollowCard 
                //{... jorgerojo}
                nombre={'Jorge Rojo Gerpe'}
                span={'JorgeRojo'}
            >Jorge Rojo Gerpe
            </TwitterFollowCard>
        </>
    )
}
