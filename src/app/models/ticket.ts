import { Favorite } from "./favorite";

export interface Ticket {
    id: number;
    title: string;
    description: string;
    name: string;
    resolution: string;
    resolver: string | null;
    completed: boolean | null;
    favorites: Favorite[];
}