import "./nine-talbe.css"

/** propsの型定義 */
type NineTableProps = {
    /** 並べたい部品 */
    components: JSX.Element[];
};

/**
 * 9か所に部品を配置する部品
 * @param props 配置する９つのコンポーネント
 * @returns 
 */
export default function NineTable(props: NineTableProps) {
    const components = props.components;
    return (
        <div className="nine-table">
            <div className="nine-table-row">
                <div className={"one nine-table-item"}>
                    {components[0]}
                </div>
                <div className={"two nine-table-item"}>
                    {components[1]}
                </div>
                <div className={"three nine-table-item"}>
                    {components[2]}
                </div>
            </div>
            <div className="nine-table-row">
                <div className={"four nine-table-item"}>
                    {components[3]}
                </div>
                <div className={"five nine-table-item"}>
                    {components[4]}
                </div>
                <div className={"six nine-table-item"}>
                    {components[5]}
                </div>
            </div>

            <div className="nine-table-row">
                <div className={"seven nine-table-item"}>
                    {components[6]}
                </div>
                <div className={"eight nine-table-item"}>
                    {components[7]}
                </div>
                <div className={"nine nine-table-item"}>
                    {components[8]}
                </div>
            </div>
        </div>

    );
}