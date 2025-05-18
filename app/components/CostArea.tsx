import {ICard} from "../types/cards";
import Card from "./Card";

export default function CostArea(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-start flex-1">
            <div className="area-text">
                COST<br/>
                AREA
            </div>
            {(props.card.map((don, i) => (
                <div key={i}>
                    <Card card={don}/>
                </div>
            )))}
        </div>
    );
}