import Image from 'next/image';
import card from '@/app/assets/all_cards/Cards/Cards/OP01/OP01-001.png';


export default function Card () {
    return (
        <div>
            <Image
                src={card}
                alt="Alt"
                fill
                style={{ objectFit: 'fill' }}

                className="card"
            />
        </div>
    )
}