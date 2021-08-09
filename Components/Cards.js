import React from 'react';
import { Card, Button, } from 'react-native-elements';
import { Text, StyleSheet } from 'react-native';

export const Cards = () => {
    return(
        <Card>
            <Card.Title>Messi Stats</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/messi.jpg')}/>
                <Text style={styles.cardText}>
                    See all of Lionel Messi's career stats!
                </Text>
                <Button 
                    title='VIEW NOW' />
            
        </Card>
    )
}

const styles = StyleSheet.create ({
    cardText: {
        color: 'red',
        
    }
})