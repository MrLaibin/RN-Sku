import {SpecModel} from "../data";

export type AdjoinType = Array<SpecModel>;

export default class AdjoinMatrix {
    vertex: AdjoinType; // 顶点数组
    quantity: number; // 矩阵长度
    adjoinArray: Array<number>; // 矩阵数组

    constructor(vertx: AdjoinType) {
        this.vertex = vertx;
        this.quantity = this.vertex.length;
        this.adjoinArray = [];
        this.init();
    }
    // 初始化数组
    init() {
        this.adjoinArray = Array(this.quantity * this.quantity).fill(0);
    }

    /*
     * @param id string
     * @param sides Array<string>
     *  传入一个顶点，和当前顶点可达的顶点数组，将对应位置置为1
     */
    setAdjoinVertexs(id: SpecModel, sides: AdjoinType) {
        const pIndex = this.vertex.findIndex(value => value.propertyValueId=== id.propertyValueId);
        sides.forEach(item => {
            const index = this.vertex.findIndex(value => value.propertyValueId===item.propertyValueId);
            // console.log("setAdjoinVertexs forEach "+JSON.stringify(index))
            this.adjoinArray[pIndex * this.quantity + index] = 1;
        });
        // console.log("setAdjoinVertexs "+JSON.stringify(pIndex))
    }

    /*
     * @param id string
     * 传入顶点的值，获取该顶点的列
     */
    getVertexCol(id: string) {
        const index = this.vertex.findIndex(value => value.propertyValueId=== id);
        // console.log("getVertexCol  "+index)

        const col: Array<number> = [];
        this.vertex.forEach((item, pIndex) => {
            col.push(this.adjoinArray[index + this.quantity * pIndex]);
        });
        // console.log("getVertexCol  "+JSON.stringify(this.vertex))
        return col;
    }

    /*
     * @param params Array<string>
     * 传入一个顶点数组，求出该数组所有顶点的列的合
     */
    getColSum(params: AdjoinType) {
        const paramsVertex = params.map(id => this.getVertexCol(id.propertyValueId));
        console.log(JSON.stringify(paramsVertex))
        const paramsVertexSum: Array<number> = [];
        this.vertex.forEach((item, index) => {
            const rowtotal = paramsVertex
                .map(value => value[index])
                .reduce((total, current) => {
                    total += current || 0;
                    return total;
                }, 0);
            paramsVertexSum.push(rowtotal);
        });

        return paramsVertexSum;
    }

    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出并集
     */
    getCollection(params: AdjoinType) {
        const paramsColSum = this.getColSum(params);
        let collections: AdjoinType = [];
        paramsColSum.forEach((item, index) => {
            if (item && this.vertex[index]) collections.push(this.vertex[index]);
        });
        return collections;
    }

    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出交集
     */
    getUnions(params: AdjoinType) {
        const paramsColSum = this.getColSum(params);

        let unions: AdjoinType = [];
        paramsColSum.forEach((item, index) => {
            if (item >= params.length && this.vertex[index])
                unions.push(this.vertex[index]);
        });
        return unions;
    }
}
