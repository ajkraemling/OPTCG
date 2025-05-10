import {ICard} from "../types/cards";
import Card from "./Card";

export default function LifeArea(props: { life: ICard[] }) {

    console.log(props.life)

    return (
        <div className="life-area">
            <div className="area-text">
                LIFE
            </div>
            <div
                style={{
                    position: 'relative',
                    width: '8.8vw',
                    height: `${8.8 + (props.life.length) * 2}vw`
                }}
            >
                {(props.life.map((card, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: `${i * 2}vw`, // controls how much overlap (adjust as needed)
                            left: '50%',
                            transform: 'translateX(-50%) rotate(90deg)',
                            zIndex: props.life.length - i,
                        }}
                    >
                        <Card card={card} back={true}/>
                    </div>
                )))}
            </div>
        </div>
    );
}