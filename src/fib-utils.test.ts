import { findFibInCol, findFibInRow } from "./fib-utils"

describe('utils', ()=>{
    it('row', ()=>{
        //expect(fibonaciRow([1,1,2,3,5,8,0,0,0,0,0,0,0], 0, 10)).toEqual({start:0, end: 5})
        expect(findFibInRow([0,0,0,0,0,0,0,0,0,0], 0, 10)).toEqual(false)
        
        expect(findFibInRow([0,5,1,1,2,3,5,8,13,21,0,0,0], 0, 10)).toEqual({start:2, end: 9})
        expect(findFibInRow([
            1,2,3,4,5,6,7,8,9,0,
            0,0,1,1,2,3,5,8,13,10,
            1,0,0,1,2,3,3,6,0,0,0
        ], 1, 10)).toEqual({start:2, end: 8})
        expect(findFibInRow([
            1,2,3,4,5,6,7,8,9,0,
            0,5,3,1,1,2,3,5,8,0,
            21,0,0,1,2,3,3,0,0,0
        ], 1, 10)).toEqual({start:3, end: 8})

    })

    it('column', ()=>{
        expect(findFibInCol([0,1,1,2,3,5,8,13,21], 0, 1, 8)).toEqual({start:1, end: 7})
        expect(findFibInCol([
            1,2,3,4,5,6,6,7,8,
            1,2,3,4,5,6,6,7,8,
            2,2,3,4,5,6,6,7,8,
            3,2,3,4,5,6,6,7,8,
            5,2,3,4,5,6,6,7,8,
            8,2,3,4,5,6,6,7,8,
            1,2,3,4,5,6,6,7,8
        ], 0, 9, 8)).toEqual({ start:0, end: 5})
        expect(findFibInCol([
            0,1,2,3,4,5,6,6,7,8,
            0,1,2,3,4,5,6,6,7,8,
            0,1,2,3,4,5,6,6,7,8,
            0,2,2,3,4,5,6,6,7,8,
            0,3,2,3,4,5,6,6,7,8,
            0,5,2,3,4,5,6,6,7,8,
            0,8,2,3,4,5,6,6,7,8,
        ], 1, 10, 9)).toEqual({start:1, end: 6})
        expect(findFibInCol([
            1,0,1,2,3,4,5,6,6,7,8,
            2,0,2,2,3,4,5,6,6,7,8,
            3,0,3,2,3,4,5,6,6,7,8,
            4,0,5,2,3,4,5,6,6,7,8,
            5,0,8,2,3,4,5,6,6,7,8,
            6,0,13,2,3,4,5,6,6,7,8,
            7,0,8,2,3,4,5,6,6,7,8,
        ], 2, 11, 9)).toEqual({start:0, end: 5})
    })
})