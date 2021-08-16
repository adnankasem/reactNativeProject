import React, { useState } from 'react';
import { PLAYERS } from './shared/players';
import Header from './HeaderComponent';
import { Button, Tile } from 'react-native-elements';
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';



export default function Messi({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ color: 'black' }}>Messi Component</Text>
                <Button 
                    title='click here'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            </SafeAreaView>
    )
}




export const Cards = (props) => {
    const navigation = useNavigation()
    const { players } = props;

    const testing = players[0].image
{console.log(players[0].name)}
console.log(players.name)
const neymarImage = `../assets/neymar.jpg`

    return(
        <ScrollView>
            <View>
                {players.map((player) => ( 
                <Tile
                key={player.id}
                title={player.name}
                caption={player.description}
                featured
                imageSrc={player.image}
                onPress={() => navigation.navigate('Messi') }
                /> 
                ))}
            </View>
        </ScrollView>
    )
}


export const Home = ({ navigation }) => {
    const [state, setState] = useState(PLAYERS)

    return(
        <>
            <Header />
            <Cards players={PLAYERS}/>
        </>
    )
}


