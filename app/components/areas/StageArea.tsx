import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function StageArea(props: { card: ICard | undefined }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <AreaText text={"STAGE"}/>
            <Card card={props.card}/>
        </div>
    );
}