import {ICard} from "../types/cards";
import Card from "./Card";

export default function LeaderArea(props: { card: ICard | undefined }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <div className="area-text">
                LEADER
            </div>
            <Card card={props.card}/>
        </div>
    );
}