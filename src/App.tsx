import './App.css';
import NineTable from './components/nineTable';
import CellData from './models/cellData';
import Group from './components/group';
import React from 'react';
import ViewMode from './models/viewMode';

export default class App extends React.Component < {}, {cellDatas: CellData[]}> {

  nineValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(props: any){
    super(props);
    //作成したダミーのCellDataを保持
    this.state = { cellDatas: this.createDummyCellDatas() }
  }

  render() {

    //groupId毎にGroupを生成
    let groups = this.nineValue.map( n => this.state.cellDatas.filter(c=> c.groupId === n))
    .map( cells => <Group cellDatas={cells} />);

    return (
      <div className="App">
        <NineTable components={groups} />

        <div>
          <input type="file" onChange={this.selectFile}></input>
        </div>

        <div className="controller">
          <button onClick={this.changeViewMode} className="control-button">Change</button>
          <button onClick={this.executeNext}  className="control-button">Execute</button>
        </div>

      </div>
    );
  }

  /**
   * 1マスの表示切替
   */
  private changeViewMode = () => {
    let cellDatas: CellData[] = this.state.cellDatas;
    cellDatas.forEach( c => c.viewMode = c.viewMode === ViewMode.Value ? ViewMode.Possibles : ViewMode.Value);
    this.setState({cellDatas: cellDatas});
  }

  /** 適当にダミーのCellDataを81個作る */
  private createDummyCellDatas = (): CellData[] => {
    let value = 1;
    return Array.from(Array(81), (_,k) => k).map( i => {
      let groupId = Math.floor(i/9) + 1;
      let cellData = new CellData(i+1, groupId);
      cellData.value = value;
      cellData.erasePossible(value);
      value = value === 9 ? 1 : value+1;
      return cellData;
    });
  }

  /**
   * ファイルを読み込む
   */
  private selectFile = (): void => {
  }

  /**
   * 確定値の探索
   * データ処理編で実装する
   */
  private executeNext = () : void => {

  }

}
