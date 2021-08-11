import React from 'react'
import { Header } from 'react-native-elements'

const HeaderComponent = () => {
    return(
        <Header
            
            placement="center"
            backgroundColor='black'
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => console.log('left component clicked') }}
            centerComponent={{ text: 'MCN STATS', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default HeaderComponent;