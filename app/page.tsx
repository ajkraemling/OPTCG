"use client"
import {useEffect, useState} from "react";
import {CardSizeContext} from "@contexts/CardSizeContext";
import {ICard, IDeck} from "./types/cards";
import GameArea from "@components/areas/GameArea";
import {shuffle} from "@utils/shuffle";
import {fetchCardById, fetchCardsByIdsOneByOne} from "@services/cardService";
import mapToCard from "@lib/utils/mapping";

export default function Home() {
    const [life, setLife] = useState<ICard[]>([]);
    const [characters, setCharacters] = useState<[ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined]>([undefined, undefined, undefined, undefined, undefined]);
    const [leader, setLeader] = useState<ICard | undefined>(undefined);
    const [stage, setStage] = useState<ICard | undefined>(undefined);
    const [deck, setDeck] = useState<ICard[]>([]);
    const [donDeck, setDonDeck] = useState<ICard[]>([]);
    const [costArea, setCostArea] = useState<ICard[]>([]);
    const [trash, setTrash] = useState<ICard[]>([]);
    const [hand, setHand] = useState<ICard[]>([]);

    useEffect(() => {
        async function loadDeck() {
            const res = await fetch('/starterDecks.json');
            const starterDecks: IDeck[] = await res.json();

            const shuffledDeck = shuffle(starterDecks[0].cardID);

            const leaderDetails = await fetchCardById(starterDecks[0].leaderID);
            const cardDetails = await fetchCardsByIdsOneByOne(shuffledDeck);

            const leader = mapToCard(leaderDetails);
            const deck = cardDetails.map((card: any) => mapToCard(card));

            console.log(deck);

            setLeader(leader);
            setHand(deck.splice(0, 4));
            setLife(deck.splice(0, 4)); // Pick 5 life cards, for example
            setCharacters([undefined, undefined, undefined, undefined, undefined]);
            setStage(undefined);
            setDonDeck([]);
            setCostArea([]);
            setTrash([]);
            setDeck(deck);
        }

        loadDeck();
    }, []);

    return (
        <div>
            {/*<a*/}
            {/*    href="/auth/login"*/}
            {/*    tabIndex={0}*/}
            {/*>*/}
            {/*    Log in*/}
            {/*</a>*/}
            <CardSizeContext.Provider value={1}>
                <GameArea life={life} characters={characters} leader={leader} deck={deck} stage={stage}
                          costArea={costArea} donDeck={donDeck} trash={trash}/>
            </CardSizeContext.Provider>
        </div>
    );
}
