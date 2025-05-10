import {ICard} from "../types/cards";
import Card from "./Card";

export default function Deck(props: { card: ICard[] }) {

    return (
        <div className="deck">
            <div className="area-text">
                DECK
            </div>
            {
                props.card.length &&
                <Card card={props.card[0]} back={true}/>
            }
        </div>
    );
}