import Button from '@/components/Button';
import CardList from '@/components/CardList';
import StudyList from '@/components/StydyList';
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, StyleSheet, View, useWindowDimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/contexts/AuthContext';
import UserHeader from '@/components/UserHeader';

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


export default function DeckScreen() {
    const [showStudyList, setShowStudyList] = useState<boolean>(false);
    const [showCardList, setShowCardList] = useState<boolean>(false);

    const { id, type } = useLocalSearchParams();
    const router = useRouter();
    const navigation = useNavigation();

    const { user, loading } = useAuth();

    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';
    const isLargeScreen = width >= 800;
      
    if (loading) return <Text>Loading...</Text>;
    if (!user) return <Redirect href="../login" />;

    if (!type || typeof type !== 'string' || !Decks[type]) {
        return <Text style={styles.error}>Invalid deck type</Text>;
    }

    const deck = Decks[type].find((d: DeckT) => d.id === id);

    if (!deck) {
        return <Text style={styles.error}>Deck not found</Text>;
    }

    const handleStudy = () => {
        setShowCardList(false);
        setShowStudyList(true);
    };

    const handleList = () => {
        setShowStudyList(false);
        setShowCardList(true);
    };

    return (
        <View style={styles.wrapper}>
            {(!isWeb || !isLargeScreen) && <UserHeader />}
            <View style={styles.gap}></View>
            {/* Sýna manual back takka ef navigation stack hverfur við refresh á web */}
            { !navigation.canGoBack()&& (type === 'kanji' || type === 'vocab') && (
                <View style={styles.backWrapper}>
                    <Button label="⬅ Back to Decks" onPress={() => router.replace(`/(tabs)/${type}`)} />
                </View>
            )}

            <Text style={styles.heading}>Do you want to study the cards or see a list of all cards?</Text>
            <View style={styles.buttons}>
                <Button label="Study" onPress={handleStudy} />
                <Button label="See list" onPress={handleList}/>
            </View>

            {showStudyList && <StudyList deck={deck}/>}
            {showCardList && <CardList deck={deck}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    error: { 
        fontSize: 18, 
        color: 'red', 
        textAlign: 'center', 
        marginTop: 20 
    },
    wrapper: { 
        flex: 1,
        padding: 20,
        backgroundColor: '#E2F3F4'
    },
    backWrapper: {
        marginBottom: 15,
        alignSelf: 'flex-start'
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20,
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    gap: {
        marginBottom: 20,
      }

});