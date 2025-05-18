import Image from 'next/image';
import {useCardSize} from "@contexts/CardSizeContext";
import {ICard} from "@custom-types/cards";

export default function Card(props: { card?: ICard, size?: number, back? : boolean }) {
    const contextSize = useCardSize();
    const size: number = props.size == undefined || props.size < 1 ? contextSize : props.size * contextSize;
    const back: string = props.card?.card_category == "DON!!" ? "/all_cards/Card Backs/Don(Back).png" : props.card?.card_category == "LEADER" ? "/all_cards/Card Backs/Leader(Back).png" : "/all_cards/Card Backs/Card(Back).png";

    return (
        <div className="card-wrapper"
             style={{width: `${size * 11.24}vw`}}>
            {props.card?.illustration &&
                <Image
                    src={props.back ? back : `/all_cards/Cards/Cards/${props.card?.card_number.split('-')[0]}/${props.card?.card_number}.png`}
                    alt={props.card?.card_name ? props.card?.card_name : 'empty'}
                    fill
                    sizes={`${size * 11.24}vw`}
                    className="card"
                />
            }
        </div>
    );
}
