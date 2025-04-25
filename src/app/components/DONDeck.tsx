import Card from "@/app/components/Card";
import {ICard} from "@/app/types/cards";

export default function DONDeck(props: { card: ICard[] }) {

    return (
        <div className="don-deck">
            <div className="area-text">
                DON{"\n"}
                DECK
            </div>
            {/*{*/}
            {/*    props.card.length &&*/}
            {/*    <Card card={props.card[0]}/>*/}
            {/*}*/}
        </div>
    );
}