import Image from 'next/image';
import placeholder from '@/app/Card Art/Cards/Cards/OP01/OP01-001.png';
export default function Card () {
    return (
        <div className={"card"}>
            <Image
                src={placeholder}
                alt="Alt"
                fill
                style={{ objectFit: 'fill' }}

                className="card"
            />
        </div>
    )
}