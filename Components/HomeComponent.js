import React, { useState } from 'react';
import { PLAYERS } from './shared/players';
import { Cards } from './Cards'

export const Home = () => {
    const [state, setState] = useState(PLAYERS)

    return(
        <Cards players={PLAYERS}/>
    )
}
