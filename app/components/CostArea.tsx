import {ICard} from "../types/cards";
import Card from "./Card";

export default function CostArea(props: { card: ICard[] }) {

    return (
        <div className="cost-area">
            <div className="area-text">
                COST<br/>
                AREA
            </div>
            {(props.card.map((don, i) => (
                <div key={i}>
                    {don != null ?
                        <Card card={don}/>
                        :
                        <Card card ={undefined}/>
                    }
                </div>
            )))}
        </div>
    );
}