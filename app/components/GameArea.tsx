import LifeArea from "./LifeArea";
import DONDeck from "./DONDeck";
import CharacterArea from "./CharacterArea";
import StageArea from "./StageArea";
import LeaderArea from "./LeaderArea";
import CostArea from "./CostArea";
import TrashArea from "./TrashArea";
import Deck from "./Deck";
import {ICard} from "../types/cards";

export default function GameArea(props: {
    life: ICard[],
    characters: [ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined]
    leader: ICard | undefined,
    stage: ICard | undefined,
    deck: ICard[],
    donDeck: ICard[],
    costArea: ICard[],
    trash: ICard[]
}) {

    return (
        <div className="db-color w-full aspect-[60/35] flex flex-col justify-between p-[2.4%]">
            <div className="db-color flex w-full h-[65%] gap-[2.5%]">
                <LifeArea life={props.life}/>
                <div className="db-color flex flex-col justify-between flex-1">
                    <CharacterArea card={props.characters}/>
                    <div className="db-color flex gap-[4%] justify-end">
                        <LeaderArea card={props.leader}/>
                        <StageArea card={props.stage}/>
                        <Deck card={props.deck}/>
                    </div>
                </div>
            </div>
            <div className="db-color flex gap-[4%] justify-end">
                <DONDeck card={props.deck}/>
                <CostArea card={props.costArea}/>
                <TrashArea card={props.trash}/>
            </div>
        </div>
    )
}