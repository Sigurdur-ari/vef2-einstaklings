import { Text, StyleSheet, View, FlatList } from 'react-native';

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

export default function CardList({ deck }: Props) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{deck.name}</Text>
            <FlatList
                data={deck.cards}
                keyExtractor={(card) => card.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.front}>{item.front}</Text>
                        <Text style={styles.back}>{item.back}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },
    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    card: { 
        padding: 15, 
        borderBottomWidth: 1 
    },
    front: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    back: { 
        fontSize: 16, 
        color: 'gray' 
    },
});