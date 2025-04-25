import Card from "@/app/components/Card";
import {ICard} from "@/app/types/cards";

export default function Deck(props: { card: ICard[] }) {

    return (
        <div className="deck">
            <div className="area-text">
                DECK
            </div>
            {/*{*/}
            {/*    props.card.length &&*/}
            {/*    <Card card={props.card[0]}/>*/}
            {/*}*/}
        </div>
    );
}