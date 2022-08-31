import { CONSEQUENT_FIB, FIB_MATCH, FIB_MATCH_SIZE, SIZE_X, SIZE_Y, VALUE } from "./const"


export const findFibInRow = (array: VALUE[], row:number, rowSize:number): FIB_MATCH_SIZE | boolean => {
    const startPos = row*rowSize
    let consequent = 0
    let start = -1
    let end = -1

    for(let i = startPos + 2; i < startPos + rowSize; i++){
        const cur = array[i]
        const cur1 = array[i-1]
        const cur2 = array[i-2]
        if(cur && cur1 && cur2 && cur === cur1 + cur2) {
            consequent++;
            end = i - startPos
            if(start === -1) start = i - startPos - 2
        } else if(consequent > 0){
            // we have consequent fibonacci row
            if(consequent > CONSEQUENT_FIB - 2) return {
                start, end
            }
            
            consequent = 0;
            start = -1
            end = -1
        } 
    }

    // for case the last fig nuber was last item in array
    return consequent > CONSEQUENT_FIB - 2 && {
        start, end
    }
}

export const findFibInCol = (array: VALUE[], column:number, numColumns:number, numRows:number): FIB_MATCH_SIZE | boolean => {
    let consequent = 0
    let start = -1
    let end = -1

    for(let i = 2; i < numRows; i++){
        const cur = array[i*numColumns + column]
        const cur1 = array[(i-1)*numColumns + column]
        const cur2 = array[(i-2)*numColumns + column]
        
        if(cur && cur1 && cur2 && cur === cur1 + cur2) {
            consequent++;
            end = i
            if(start === -1) start = i - 2
        } else if(consequent > 0){
            // we have consequent fibonacci column
            if(consequent > CONSEQUENT_FIB - 2) return {
                start, end
            }
            
            consequent = 0;
            start = -1
            end = -1
        } 
    }

    // for case the last fig nuber was last item in array
    return consequent > CONSEQUENT_FIB - 2 && {
        start, end
    }
}

export const itemMatchAFib = (row:number, column:number, fibs:FIB_MATCH[]) => fibs.some((fib) =>
            (fib?.row === row && column >= (fib?.start || 0) && column <= (fib?.end || 0)) || 
            (fib?.col === column && row >= (fib?.start || 0) && row <= (fib?.end || 0)))

export const visualizeAndCleanAllFibs = (fibs:FIB_MATCH[], setFib:(fib:FIB_MATCH[])=>void, setItems:(fn:(items:VALUE[])=>VALUE[])=>void) => {
    setFib(fibs);
    setTimeout(() => {
        setFib([]);
        setItems((items:VALUE[]) => items.map((item, index) => {
            const arrayCol = index % SIZE_X;
            const arrayRow = Math.round(index / SIZE_X);
            return itemMatchAFib(arrayRow, arrayCol, fibs) ? 0 : item;
        }));
    }, 500);
}

export const matchAllFibs = (items: VALUE[]) => {
    let fibs:FIB_MATCH[] = []
    let checkRow = SIZE_X, checkCol = SIZE_Y;
    while(checkRow > -1) {
        const foundFib = findFibInRow(items, --checkRow, SIZE_X)
        if(foundFib) {
            fibs.push({row: checkRow, ...(foundFib as FIB_MATCH_SIZE)})
        }
    }
    
    while(checkCol > -1) {
        const foundFib = findFibInCol(items, --checkCol, SIZE_X, SIZE_Y)
        if(foundFib) {
            fibs.push({col: checkCol, ...(foundFib as FIB_MATCH_SIZE)})
        }
    }

    return fibs;
}

export const updateAffectedItems = (row:number, col:number, items:VALUE[]) => items.map((item, index) => {
    const arrayCol = index % SIZE_X
    const arrayRow = Math.floor(index / SIZE_X)
    if(arrayRow === row || arrayCol === col) {
        return item + 1
    }
    return item
})