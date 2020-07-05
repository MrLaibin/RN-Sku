export const TOGGLE = "spec";

export type CommoditySpecsType = {
    title: string;
    list: Array<string>;
};

export type SpecCategoryType = {
    id: string;
    specs: Array<string>;
};
export type Model={
    title:string;
    id:string
}
export type SpecStateType = {
    specList: Array<CommoditySpecsType>;
    specCombinationList: Array<SpecCategoryType>;
};

export const initialState: SpecStateType = {
    specList: [
        { title: "颜色", list: ["红色", "紫色", "白色", "黑色"] },
        { title: "套餐", list: ["套餐一", "套餐二", "套餐三", "套餐四"] },
        { title: "内存", list: ["64G", "128G", "256G"] },
        { title: "运营商", list: ["电信", "联通", "移动"] }
    ],
    specCombinationList: [
        { id: "1", specs: ["紫色", "套餐一", "64G",'电信'] },
        { id: "2", specs: ["紫色", "套餐一", "128G",'电信'] },
        { id: "3", specs: ["紫色", "套餐二", "128G",'电信'] },
        { id: "4", specs: ["黑色", "套餐一", "64G",'电信'] },
        { id: "5", specs: ["黑色", "套餐三", "256G",'电信'] },
        { id: "6", specs: ["白色", "套餐三", "256G",'电信'] },
        { id: "7", specs: ["红色", "套餐一", "64G",'电信'] },
        { id: "8", specs: ["红色", "套餐一", "64G",'联通'] },
        { id: "9", specs: ["红色", "套餐一", "64G",'移动'] },
        { id: "10", specs: ["红色", "套餐一", "64G",'移动'] },
        { id: "11", specs: ["红色", "套餐一", "256G",'移动'] }
    ]
};
