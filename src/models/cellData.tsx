import ViewMode from "./viewMode";

/**
 * 1マスの状態を管理する
 */
export default class CellData {

    /** 1マスを特定するためのid */
    id: number;

    /** 所属するグループのID */
    groupId:number;

    /** 1マスの値/可能性 表示モード */
    viewMode: ViewMode = ViewMode.Value;

    /** 確定した値(0は未確定) */
    value: number = 0;

    /** 取りうる可能性 */
    possibles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor(id: number, groupId:number){
        this.id = id;
        this.groupId = groupId;
    }

    /** 可能性を消す */
    erasePossible(n: number){
        this.possibles = this.possibles.filter( p => p !== n);
    }
}