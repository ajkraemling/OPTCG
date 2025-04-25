import Card from "@/app/components/Card";
import {ICard} from "@/app/types/cards";

export default function TrashArea(props: { card: ICard[] }) {

    return (
        <div className="trash-area">
            <div className="area-text">
                TRASH
            </div>
            {props.card.length &&
            <Card card={props.card[0]}/>
            }
        </div>
    );
}