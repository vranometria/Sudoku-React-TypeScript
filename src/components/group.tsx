import CellData from "../models/cellData";
import Cell from "./cell";
import NineTable from "./nineTable";
import "./group.css";
import React from "react";

/** Groupの型定義 */
type GroupProps = {

    /** 表示する各マスの情報 */
    cellDatas: CellData[];
}

/**
 * 1グループを表示する部品
 * @param props
 * @returns 
 */
export default class Group extends React.Component<GroupProps>{

    render() {
        /** 9マスを生成 */
        const cells = this.props.cellDatas.map(c => (
            <div className="cell">
                <Cell cellData={c}></Cell>
            </div>
         ));
    
        return (
            <div className="group">
                <NineTable components={cells}></NineTable>
            </div>
        );
    }


}