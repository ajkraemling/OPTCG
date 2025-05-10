"use client"
import {useEffect, useState} from "react";
import { CardSizeContext } from "./CardSizeContext";
import {ICard} from "./types/cards";
import GameArea from "./components/GameArea";

export default function Home() {
    const [life, setLife] = useState<ICard[]>([]);
    const [characters, setCharacters] = useState<[ICard | null, ICard | null, ICard | null, ICard | null, ICard | null]>([null, null, null, null, null]);
    const [leader, setLeader] = useState<ICard[]>([]);
    const [stage, setStage] = useState<ICard[]>([]);
    const [deck, setDeck] = useState<ICard[]>([]);
    const [donDeck, setDonDeck] = useState<ICard[]>([]);
    const [costArea, setCostArea] = useState<ICard[]>([]);
    const [trash, setTrash] = useState<ICard[]>([]);
    
    useEffect(() => {
        fetch('/cards.json')
            .then(res => res.json())
            .then((data: ICard[]) => {
                setLife(data.slice(0, 4)); // Pick 5 life cards, for example
                setCharacters([data[1], null, data[1], data[1], data[1]]);
                setLeader([data[1]]);
                setStage([data[1]]);
                setDonDeck([data[1]]);
                setCostArea([data[1]]);
                setTrash([data[1]]);
                setDeck([data[1]]);
            });
    }, []);

    return (
        <div>
            <a
                href="/auth/login"
                tabIndex={0}>
                Log in
            </a>
            <CardSizeContext.Provider value={1}>
                <GameArea life={life} characters={characters} leader={leader} deck={deck} stage={stage} costArea={costArea} donDeck={donDeck} trash={trash}  />
            </CardSizeContext.Provider>
        </div>
    );
}
