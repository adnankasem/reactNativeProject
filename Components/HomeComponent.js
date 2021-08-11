import React, { useState } from 'react';
import { PLAYERS } from './shared/players';
import { Cards } from './Cards'
import Header from './HeaderComponent';

export const Home = () => {
    const [state, setState] = useState(PLAYERS)

    return(
        <>
            <Header />
            <Cards players={PLAYERS}/>
        </>
    )
}
