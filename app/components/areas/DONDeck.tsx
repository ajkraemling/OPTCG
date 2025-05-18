import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function DONDeck(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <AreaText text={"DON"}/>
            <Card card={props.card[0]} back={true}/>
        </div>
    );
}