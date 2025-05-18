import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function CostArea(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-start flex-1">
            <AreaText text={"COST AREA"}/>
            {(props.card.map((don, i) => (
                <div key={i}>
                    <Card card={don}/>
                </div>
            )))}
        </div>
    );
}