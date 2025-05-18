import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function CharacterArea(props: {
    card: [ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined, ICard | undefined],
}) {

    return (
        <div className="db-color flex justify-between relative">
            <AreaText text={"CHARACTER AREA"}/>
            {(props.card.map((character, i) => (
                <div key={i}>
                    <Card card={character}/>
                </div>
            )))}
        </div>
    );
}