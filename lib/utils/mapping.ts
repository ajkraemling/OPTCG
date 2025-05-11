import {Effect, ICard} from "../../app/types/cards";

export default function mapToCard (raw : any) :  ICard{
    return {
        card_number: raw.data.id,
        card_category: raw.data.type,
        card_name: raw.data.name,
        illustration: raw.data.images.large ? raw.data.images.large : undefined,
        illustrators_name: undefined,
        block: undefined,
        color: raw.data.color,
        type: [], // type: raw.data.family,
        rarity: raw.data.rarity,
        attribute: raw.data.attribute.name ? raw.data.attribute.name : undefined,
        power: raw.data.power ? raw.data.power : null,
        cost: raw.data.cost,
        effects: [], // effects: raw.data.ability,
        trigger: raw.data.trigger,
        counter: raw.data.counter,
        life: raw.data.life ? raw.data.life : null,
    }
}