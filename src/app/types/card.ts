export interface DON {
    card_number: string; //This is the ID
    card_category: "Leader" | "Character" | "Event" | "Stage" | "DON!!";
    card_name: string;
    illustration: string;
    rarity: string | undefined;
    block: string; // Block symbol. IDK
    illustrators_name: string | undefined;
}

export interface Card extends DON {
    color: ("red" | "green" | "yellow" | "blue" | "purple" | "black")[];
    type: string [];
    attribute: ("Slash" | "Strike" | "Ranged" | "Special" | "Wisdom")[];
    power: number;
    cost: number;
}

export interface Leader extends Card {
    life: number;
}

export interface Character extends Card {
    counter: number;
}