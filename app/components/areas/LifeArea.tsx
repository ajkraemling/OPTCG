import {ICard} from "@custom-types/cards";
import Card from "../Card";
import AreaText from "@components/AreaText";

export default function LifeArea(props: { life: ICard[] }) {

    // console.log(props.life)

    return (
        <div className="db-color rounded-[0.67vw] relative w-[17.17%] flex justify-center items-center">
            <AreaText text={"LIFE AREA"}/>
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