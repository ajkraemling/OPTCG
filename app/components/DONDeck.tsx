import {ICard} from "../types/cards";
import Card from "./Card";

export default function DONDeck(props: { card: ICard[] }) {

    return (
        <div className="don-deck">
            <div className="area-text">
                DON
            </div>
            {
                props.card.length &&
                <Card card={props.card[0]} back={true}/>
            }
        </div>
    );
}