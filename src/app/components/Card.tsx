import Image from 'next/image';
import { ICard } from "@/app/types/cards";

interface CardProps {
    card?: ICard;
}

export default function Card({ card }: CardProps) {
    if (!card || card.card_number === undefined || card.card_number === "xxx") {
        return <div className="card-wrapper" />;
    }

    return (
        <div className="card-wrapper">
            <Image
                src={card.illustration}
                alt={card.illustration}
                fill
                style={{ objectFit: 'fill' }}
                className="card"
            />
        </div>
    );
}
