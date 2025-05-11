import LifeArea from "./LifeArea";
import DONDeck from "./DONDeck";
import CharacterArea from "./CharacterArea";
import StageArea from "./StageArea";
import LeaderArea from "./LeaderArea";
import CostArea from "./CostArea";
import TrashArea from "./TrashArea";
import Deck from "./Deck";
import {ICard} from "../types/cards";
import {useEffect, useState} from "react";
import {fetchCardById} from "../../lib/services/cardService";

export default function GameArea(props: {
    life: ICard[],
    characters: [ICard | null, ICard | null, ICard | null, ICard | null, ICard | null]
    leader: ICard[],
    stage: ICard[],
    deck: ICard[],
    donDeck: ICard[],
    costArea: ICard[],
    trash: ICard[]
}) {
    const [cards, setCards] = useState<any[]>([]);
    const card_id : string = "ST02-002";
    // useEffect(() => {
    //     fetchCardById(card_id).then((data) => {
    //         // setCards(data.results);
    //         console.log(`Fetching Card: ${card_id}`, data)
    //     });
    // }, []);

    return (
        <div className="game-areas">
            <div className="life-character-leader-stage-deck">
                <LifeArea life={props.life}/>
                <div className="character-leader-stage-deck">
                    <CharacterArea card={props.characters}/>
                    <div className="leader-stage-deck">
                        <LeaderArea card={props.leader}/>
                        <StageArea card={props.stage}/>
                        <Deck card={props.deck}/>
                    </div>
                </div>
            </div>
            <div className="don-cost-trash">
                <DONDeck card={props.deck}/>
                <CostArea card={props.costArea}/>
                <TrashArea card={props.trash}/>
            </div>
        </div>
    )
}