import Card from "@/app/components/Card";
import {ICard} from "@/app/types/cards";

export default function CharacterArea(props: { card: [ICard | null, ICard | null, ICard | null, ICard | null, ICard | null],  }) {

    return (
        <div className="character-area">
            <div className="area-text">
                CHARACTER<br/>
                AREA
            </div>
            {(props.card.map((character, i) => (
                <div key={i}>
                    {character != null ?
                    <Card card={character}/>
                        :
                    <Card card ={undefined}/>
                    }
                </div>
            )))}
        </div>
    );
}