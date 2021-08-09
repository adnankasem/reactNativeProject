import React from 'react';
import { Card, Button, Tile } from 'react-native-elements';
import { Text, StyleSheet, View } from 'react-native';
import { PLAYERS } from './shared/players';
import { ScrollView } from 'react-native';




export const Cards = (props) => {

    const { players } = props;

    const testing = players[0].image
{console.log(players[0].name)}
    return(
        <ScrollView>
       <View>
            <Tile
                title={players[0].name}
                caption={players[0].description}
                featured
                imageSrc={require('../assets/messi.jpg')}
                />
            <Tile
                title={players[1].name}
                caption={players[1].description}
                featured
                imageSrc={require('../assets/cristiano.jpeg')}
                />
            <Tile
            title={players[2].name}
            caption={players[2].description}
            featured
            imageSrc={require('../assets/neymar.jpg')}
            />
        </View>
        </ScrollView>
        
    )
/*        <Card>
            <Card.Title>{props.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/messi.jpg')}/>
                <Text style={styles.cardText}>
                    See all of Lionel Messi's career stats!
                </Text>
                <Button 
                    title='VIEW NOW' />
            
</Card>*/
}

const styles = StyleSheet.create ({
    cardText: {
        color: 'red',
        
    }
})