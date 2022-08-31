export const SIZE_X = 50
export const SIZE_Y = 50
export const CONSEQUENT_FIB = 5;

export type CellItem  = {
    row: number,
    column: number,
    value: number,
}

export type FIB_MATCH_SIZE = {
    start?: number,
    end?: number
}

export type FIB_MATCH = {
    row?: number,
    col?: number,
} & FIB_MATCH_SIZE

export type ROW = number
export type COLUMN = number
export type VALUE = number

