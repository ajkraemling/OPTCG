export interface Effect {
    description: string;
    timing?: "Activate: Main" | "Trigger" | "On Play" | "When Attacking" | "On KO";
}

export interface ICard {
    card_number: string; // This is the ID
    card_category?: "Leader" | "Character" | "Event" | "Stage" | "DON!!" | "";
    card_name?: string;
    illustration?: string;
    illustrators_name?: string;
    block?: string; // Block symbol. IDK
    color?: ("red" | "green" | "yellow" | "blue" | "purple" | "black")[];
    type?: string[]; // This is "Straw Hat Pirates" or "Film"
    rarity? :  "C" | "UC" | "R" | "SR" | "L" | "SEC" | "P" | "SP" | string; // Maybe in DON, idk if DON has
    attribute?: ("Slash" | "Strike" | "Ranged" | "Special" | "Wisdom")[];
    power?: number;
    cost?: number;
    effects? : Effect[];
    trigger?: string;
    counter? : number;
    life? : number;
}