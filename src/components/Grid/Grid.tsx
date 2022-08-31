import { useCallback, useState } from 'react';
import { COLUMN, FIB_MATCH, ROW, SIZE_X, SIZE_Y, VALUE } from '../../const';
import { visualizeAndCleanAllFibs, itemMatchAFib, matchAllFibs, updateAffectedItems } from '../../fib-utils';
import Cell from '../Cell/Cell';
import './Grid.css';

const INIT_SELECTED = {row:-1, column: -1}
const INITIAL_ARRAY = Array.from({length: SIZE_X * SIZE_Y}, () => 0)
const index = (row: ROW, column : COLUMN) => row * SIZE_X + column
const item = (items:VALUE[], row: ROW, column : COLUMN) => items[index(row, column)]


export const Grid = () => {
    const [items, setItems] = useState(INITIAL_ARRAY)
    const [selected, setSelected] = useState(INIT_SELECTED)
    const [fib, setFib] = useState<FIB_MATCH[]>([])

    const onClick = useCallback((row:any, column: any, value: number)=>{
        // show yellow higlight
        setSelected({row, column})
        setTimeout(()=>{
            setSelected(INIT_SELECTED)
        }, 500)

        // update items 
        const updatedItems = updateAffectedItems(row, column, items)
        const fibs = matchAllFibs(updatedItems)
        visualizeAndCleanAllFibs(fibs, setFib, setItems);
        setItems(updatedItems)
    }, [items, setItems, setFib, setSelected])
    
    
    return <div className="Grid">
        {Array.from({length: SIZE_X}, (_, row) => (
            <div className="GridRow" key={`row-${row}`} >
                {Array.from({length: SIZE_Y},(_, column)=>
                <div key={`${row}x${column}`}>
                    <Cell {...{
                        row, 
                        column, 
                        onClick, 
                        value: item(items, row, column),
                        selected: selected?.row === row && selected?.column === column,
                        fib: itemMatchAFib(row, column, fib)
                        }} />
                </div>)}
            </div>))}
    </div>
}

export default Grid
