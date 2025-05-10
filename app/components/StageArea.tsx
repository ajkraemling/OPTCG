import {ICard} from "../types/cards";
import Card from "./Card";

export default function StageArea(props: { card: ICard[] }) {

    return (
        <div className="stage-area">
            <div className="area-text">
                STAGE
            </div>
            {props.card.length &&
                <Card card={props.card[0]}/>
            }
        </div>
    );
}