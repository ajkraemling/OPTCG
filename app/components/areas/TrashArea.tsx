import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function TrashArea(props: { card: ICard[] }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <AreaText text={"TRASH"}/>
            <Card card={props.card[0]}/>
        </div>
    );
}