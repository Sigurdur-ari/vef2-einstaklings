import Deck from '@/components/Deck';
import { useLocalSearchParams } from 'expo-router';
import { Text, StyleSheet } from 'react-native';

const Decks = require('../../data/decks.json');

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

type DeckTypes = {

}

export default function DeckScreen() {
    const { id, type } = useLocalSearchParams();

    if (!type || typeof type !== 'string' || !Decks[type]) {
        return <Text style={styles.error}>Invalid deck type</Text>;
    }

    const deck = Decks[type].find((d: DeckT) => d.id === id);

    if (!deck) {
        return <Text style={styles.error}>Deck not found</Text>;
    }

    return <Deck deck={deck} />;
}

const styles = StyleSheet.create({
    error: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
});