import {ICard} from "../../app/types/cards";

export const fetchCardById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:8180/api/card/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching card:", err);
    }
};

export const fetchCardsByIds = async (ids: string[]) => {
    try {
        const res = await fetch(`http://localhost:8180/api/cards?id=${ids.join(',')}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching card:", err);
    }
};

export const fetchCardsByIdsOneByOne = async (ids: string[]) : Promise<ICard[]> => {
    try {
        const cardPromises = ids.map(id =>
            fetch(`http://localhost:8180/api/card/${id}`).then(res => res.json())
        );
        return Promise.all(cardPromises);
    } catch (err) {
        console.error("Error fetching card:", err);
        return [];
    }
};