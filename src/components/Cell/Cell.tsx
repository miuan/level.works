import React, { useCallback, useMemo } from 'react'
import { CellItem } from '../../const';
import './Cell.css';

export type CellOnClickProps = {
    row: number,
    column: number,
    value: number,
    selected: boolean,
    fib?: boolean
}


export type CellParams = CellOnClickProps & {
    onClick: (row: CellOnClickProps["row"],  column: CellOnClickProps["column"], value: CellOnClickProps["value"]) => void
}

export const Cell : React.FC<CellParams> = ({row, column, value, onClick, selected, fib}) => {
    const className = useMemo(()=>`Cell ${selected ? 'CellSelected' : ''} ${fib ? 'CellFib' : ''}`,[selected, fib] )

    const handleClick = useCallback(()=>{
        onClick(row, column, value)
    }, [row, column, value, onClick])
    
    return <div className={className} onClick={handleClick}>
        <div className="CellText">{value > 0 && value}</div>
    </div>
}

export default Cell