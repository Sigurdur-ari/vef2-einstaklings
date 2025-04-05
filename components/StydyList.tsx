import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';

type CardT = {
    id: string, 
    front: string,
    back: string
};

type DeckT = {
    id: string, 
    name: string, 
    cards: CardT[]
};

type Props = {
    deck: DeckT;
};

export default function StudyList({ deck }: Props) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0); 
    const [isFlipped, setIsFlipped] = useState(false); 

    const currentCard = deck.cards[currentCardIndex];

    const handleFlip = () => {
        setIsFlipped(!isFlipped); 
    };

    const handleNextCard = () => {
        if (currentCardIndex < deck.cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setIsFlipped(false); 
        }
    };

    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setIsFlipped(false); 
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>{deck.name}</Text>
            </View>

            <TouchableOpacity onPress={handleFlip}>
                <View style={styles.card}>
                        <Text style={isFlipped ? styles.back: styles.front}>{isFlipped ? currentCard.back : currentCard.front}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.navigation}>
                <Button title="Back" onPress={handlePreviousCard} disabled={currentCardIndex === 0} />
                <Text>Card {currentCardIndex + 1} of {deck.cards.length}</Text>
                <Button title="Next" onPress={handleNextCard} disabled={currentCardIndex === deck.cards.length - 1} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20, 
    },
    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
    },
    header_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 200,
        width: '100%',
        maxWidth: 400,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    front: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'center'
    },
    back: {
        fontSize: 24,
        color: 'gray',
        width: '90%',
        textAlign: 'center'
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        marginTop: 20,
    },
});