import Image from 'next/image';
import {ICard} from "@/app/types/cards";
import {useCardSize} from "@/app/CardSizeContext";

export default function Card(props: { card?: ICard, size?: number, back? : boolean }) {
    const contextSize = useCardSize();
    const size: number = props.size == undefined || props.size < 1 ? contextSize : props.size * contextSize;
    const back: string = props.card?.card_category == "DON!!" ? "/all_cards/Card Backs/Don(Back).png" : props.card?.card_category == "Leader" ? "/all_cards/Card Backs/Leader(Back).png" : "/all_cards/Card Backs/Card(Back).png";

    // if (!props.card || props.card.card_number === undefined || props.card.card_number === "xxx") {
    //     return <div className="card-wrapper" style={{ width: `${size * 11.24}vw`}} />;
    // }

    console.log(props.card)
    return (
        <div className="card-wrapper"
             style={{width: `${size * 11.24}vw`}}>
            {props.card?.illustration &&
                <Image
                    src={props.back ? back : props.card?.illustration}
                    alt={props.card?.card_name ? props.card?.card_name : 'empty'}
                    fill
                    sizes={`${size * 11.24}vw`}
                    className="card"
                />
            }
        </div>
    );
}
