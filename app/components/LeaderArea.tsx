import {ICard} from "../types/cards";
import Card from "./Card";

export default function LeaderArea(props: { card: ICard[] }) {

    return (
        <div className="leader-area">
            <div className="area-text">
                LEADER
            </div>
            {props.card.length &&
                <Card card={props.card[0] }/>
            }
        </div>
    );
}