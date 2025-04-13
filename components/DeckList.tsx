import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';

import Decks from '../data/decks.json';


type Props = {
    type: 'kanji' | 'vocab';
};

type CardT = {
    id: string, 
    front: string,
    back: string
}

type DeckT = {
    id: string, 
    name: string, 
    cards: CardT []
}

export default function DeckList({type}: Props) {
    const [decks, setDecks] = useState<DeckT[]>([]);
    const router = useRouter();

    useEffect(() => {
        setDecks(Decks[type] || []);
    }, [type]);

    return (
        <View style={styles.container}>
        <Text style={styles.header}>
            {type === 'kanji' ? 'Kanji Decks' : 'Vocabulary Decks'}
        </Text>
        <View style={styles.list_container}>
            <FlatList
                data={decks}
                keyExtractor={(deck) => deck.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.deckButton} onPress={() => router.push(`/deck/${item.id}?type=${type}`)}>
                        <Text style={styles.deckText}>{item.name}</Text>
                    </TouchableOpacity>
                )} 
                numColumns={2} 
                columnWrapperStyle={styles.grid_row}

            />
        </View>
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
        height: 60,
        padding: 15,
        backgroundColor: '#6DC7D1',
        borderRadius: 10,
        marginBottom: 10,
    },
    deckText: {
        color: '#E2F3F4',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list_container: {
        flex: 1
    },
    grid_row: {
        gap: 10,
    }
});