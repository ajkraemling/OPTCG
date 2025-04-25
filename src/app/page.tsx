"use client"
import {ICard} from "@/app/types/cards";
import {useEffect, useState} from "react";
import GameArea from "@/app/components/GameArea";
import Card from "@/app/components/Card";

export default function Home() {
    const [life, setLife] = useState<ICard[]>([]);
    const [characters, setCharacters] = useState<[ICard | null, ICard | null, ICard | null, ICard | null, ICard | null]>([null, null, null, null, null]);
    const [leader, setLeader] = useState<ICard[]>([]);
    const [stage, setStage] = useState<ICard[]>([]);
    const [deck, setDeck] = useState<ICard[]>([]);
    const [donDeck, setDonDeck] = useState<ICard[]>([]);
    const [costArea, setCostArea] = useState<ICard[]>([]);
    const [trash, setTrash] = useState<ICard[]>([]);

    const emptyCardSlot : ICard = {
            "card_number": "xxx",
        };
    
    useEffect(() => {
        fetch('/cards.json')
            .then(res => res.json())
            .then((data: ICard[]) => {
                setLife(data.slice(1, 3)); // Pick 5 life cards, for example
                setCharacters([data[1], data[1], data[1], data[1], data[1]]);
                setLeader([data[1]]);
                setStage([emptyCardSlot]);
                setDonDeck([emptyCardSlot]);
                setCostArea([emptyCardSlot]);
                setTrash([emptyCardSlot]);
                setDeck([emptyCardSlot]);
            });
    }, []);

    return (
        <div>
            {/*<Card  card={leader[0]}/>*/}
            <GameArea life={[life[0]]} characters={characters} leader={leader} deck={deck} stage={stage} costArea={costArea} donDeck={donDeck} trash={trash}  />
        </div>
    );
}
