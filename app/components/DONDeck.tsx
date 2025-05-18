import {ICard} from "../types/cards";
import Card from "./Card";

export default function DONDeck(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <div className="area-text">
                DON
            </div>
            <Card card={props.card[0]} back={true}/>
        </div>
    );
}