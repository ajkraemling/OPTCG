import {ICard} from "../types/cards";
import Card from "./Card";

export default function TrashArea(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <div className="area-text">
                TRASH
            </div>
            <Card card={props.card[0]}/>
        </div>
    );
}