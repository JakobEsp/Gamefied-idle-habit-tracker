
export type effort = 1 | 2 | 3
export type frequency = 'daily' | 'weekly'

export interface IHabit {
    id: number,
    name: string,
    effort: effort
    frequency: frequency
    created_at: string
    updated_at: string
    completed: boolean
}