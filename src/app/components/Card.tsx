import Image from 'next/image';
import {ICard} from "@/app/types/cards";
import {useCardSize} from "@/app/CardSizeContext";

export default function Card(props: { card?: ICard, size?: number }) {
    const contextSize = useCardSize();
    console.log(contextSize)
    const size: number = props.size == undefined || props.size < 1 ? contextSize : props.size * contextSize;

    // if (!props.card || props.card.card_number === undefined || props.card.card_number === "xxx") {
    //     return <div className="card-wrapper" style={{ width: `${size * 11.24}vw`}} />;
    // }

    return (
        <div className="card-wrapper"
             style={{width: `${size * 11.24}vw`}}>
            <Image
                src={props.card?.illustration}
                alt={props.card?.card_name}
                fill
                style={{objectFit: 'fill'}}
                className="card"
            />
        </div>
    );
}
