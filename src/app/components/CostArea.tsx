import Card from "@/app/components/Card";
import {ICard} from "@/app/types/cards";

export default function CostArea(props: { card: ICard[] }) {

    return (
        <div className="cost-area">
            <div className="area-text">
                COST{"\n"}
                AREA
            </div>
            {/*{(props.card.map((don, i) => (*/}
            {/*    <div key={i}>*/}
            {/*        <Card card={don}/>*/}
            {/*    </div>*/}
            {/*)))}*/}
        </div>
    );
}