import {ICard} from "../types/cards";
import Card from "./Card";

export default function StageArea(props: { card: ICard | undefined }) {

    return (
        <div className="db-color relative flex items-center justify-center">
            <div className="area-text">
                STAGE
            </div>
            <Card card={props.card}/>
        </div>
    );
}