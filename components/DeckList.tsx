import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

type Props = {
    type: 'kanji' | 'vocab';
    onSelectDeck: (deck: {id: string, name: string}) => void;
};

const testDecks = {
    kanji: [
        {id: '1', name: 'JLPT N5 Kanji'},
        {id: '2', name: 'JLPT N4 Kanji'},
        {id: '3', name: 'JLPT N3 Kanji'},
        {id: '4', name: 'JLPT N2 Kanji'},
        {id: '5', name: 'JLPT N1 Kanji'}
    ], 
    vocab: [
        {id: '6', name: 'JLPT N5 vocab'},
        {id: '7', name: 'JLPT N4 vocab'},
        {id: '8', name: 'JLPT N3 vocab'},
        {id: '9', name: 'JLPT N2 vocab'},
        {id: '10', name: 'JLPT N1 vocab'}
    ]
}

export default function DeckList({type, onSelectDeck}: Props) {
    const decks = testDecks[type] || [];

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