import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

type Props = {
    type: 'kanji' | 'vocab';
    onSelectDeck: (deck: {id: string, name: string}) => void;
};

type card = {
    id: string, 
    front: string,
    back: string
}

type deck = {
    id: string, 
    name: string, 
    cards: card []
}

const testDecks = require('../data/decks.json')

export default function DeckList({type, onSelectDeck}: Props) {
    const [decks, setDecks] = useState<deck[]>([])

    useEffect(() => {
        setDecks(testDecks[type] || []);
    }, [type]);

    return (
        <View style={styles.container}>
        <Text style={styles.header}>
            {type === 'kanji' ? 'Kanji Decks' : 'Vocabulary Decks'}
        </Text>
        <FlatList
            data={decks}
            keyExtractor={(deck) => deck.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.deckButton} onPress={() => onSelectDeck(item)}>
                    <Text style={styles.deckText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    deckButton: {
        padding: 15,
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginBottom: 10,
    },
    deckText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});