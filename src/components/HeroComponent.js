import React from 'react'

export default function HeroComponent({heroName}) {
    if(heroName==='jocker'){
        throw new Error('Not a hero..!');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
