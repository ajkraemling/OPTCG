import Image from 'next/image';
import mat from '@/app/assets/play_mats/playmattemplate.webp';
export default function PlayMat () {
    return (
        <div className="game-area">
            <div>
                <div className="life-area">Life Area</div>
                <div className="don-deck">Don Deck</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="character-area">Character Area</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="leader-area">Leader Area</div>
                    <div className="stage-area">Stage Area</div>
                    <div className="deck-area">Deck Area</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="cost-area">Cost</div>
                    <div className="trash-area">Trash</div>
                </div>
            </div>
        </div>
    )
}