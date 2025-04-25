import {ICard} from "@/app/types/cards";
import LifeArea from "@/app/components/LifeArea";
import DONDeck from "@/app/components/DONDeck";
import CharacterArea from "@/app/components/CharacterArea";
import StageArea from "@/app/components/StageArea";
import LeaderArea from "@/app/components/LeaderArea";
import CostArea from "@/app/components/CostArea";
import TrashArea from "@/app/components/TrashArea";
import Deck from "@/app/components/Deck";

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