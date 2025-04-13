import { useRef, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, Animated } from 'react-native';

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
    const rotation = useRef(new Animated.Value(0)).current;

    const currentCard = deck.cards[currentCardIndex];

    const handleFlip = () => {
        Animated.timing(rotation, {
            toValue: isFlipped ? 0 : 180,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped);
        }) 
    };

    const rotateFront = rotation.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });
    
    const rotateBack = rotation.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const handleNextCard = () => {
        if (currentCardIndex < deck.cards.length - 1) {
            setIsFlipped(false);
            rotation.setValue(0);
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };
    
    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
            setIsFlipped(false);
            rotation.setValue(0);
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>{deck.name}</Text>
            </View>

            <TouchableOpacity onPress={handleFlip} activeOpacity={1}>
                <View style={styles.card_container}>
                    <Animated.View style={[styles.card, styles.card_front, { transform: [{ rotateY: rotateFront }] }]}>
                        <Text style={styles.front_text}>{currentCard.front}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.card, styles.card_back, { transform: [{ rotateY: rotateBack }] }]}>
                        <Text style={styles.back_text}>{currentCard.back}</Text>
                    </Animated.View>
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
        backgroundColor: '#6DC7D1',
        backfaceVisibility: 'hidden',
    },
    front_text: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'center',
    },
    back_text: {
        fontSize: 24,
        color: 'gray',
        width: '90%',
        textAlign: 'center',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        marginTop: 20,
    },
    card_container: {
        width: '100%',
        maxWidth: 400,
        height: 200,
        alignSelf: 'center',
    },
    card_front: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    card_back: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: 0,
    },
});