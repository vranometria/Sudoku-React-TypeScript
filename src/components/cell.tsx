import React from "react";
import CellData from "../models/cellData";
import ViewMode from "../models/viewMode";
import NineTable from "./nineTable"
import './cell.css'

/** Cellのprops型定義 */
type CellProps = {
    /** Cellに表示する1マス内の状態 */
    cellData: CellData;
};

/**
 * 1マスを表示する部品
 */
export default class Cell extends React.Component<CellProps>{

    nineValues:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    /** 
     * CellDataの内容を表示
     * ViewModeによって表示を切り替え
     */
    render() {
        const cellData: CellData = this.props.cellData;
        return (
            <div className="cell-content">
                { cellData.viewMode === ViewMode.Value ? this.showValue() : this.showPossibles()}
            </div>
        );

    }

    /** 確定値を表示 */
    private showValue = () => {
        return (
            <div className="cell-value">
                {this.props.cellData.value}
            </div>
        );
    }

    /** まだ残っている可能性の表示 */
    private showPossibles = () => {

        const components = this.nineValues.map( n => 
            <span className="possible-value">{ this.props.cellData.possibles.includes(n) ? n : null }</span>
        );

        return(
            <NineTable components={components} ></NineTable>
        );
    }
}