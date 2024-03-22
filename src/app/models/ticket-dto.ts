export interface TicketDTO {
    
    id: number;
    title: string;
    description: string;
    name: string;
    resolution: string;
    resolver: string | null;
    completed: boolean | null;
    
}
