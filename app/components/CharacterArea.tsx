import {ICard} from "../types/cards";
import Card from "./Card";

export default function CharacterArea(props: {
    card: [ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined],
}) {

    return (
        <div className="db-color flex justify-between">
            <div className="area-text">
                CHARACTER<br/>
                AREA
            </div>
            {(props.card.map((character, i) => (
                <div key={i}>
                    <Card card={character}/>
                </div>
            )))}
        </div>
    );
}