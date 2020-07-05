export const TOGGLE = "spec";

export type CommoditySpecsType = {
    title: string;
    list: Array<SpecModel>;
};

export type SpecCategoryType = {
    id: string;
    specs: Array<SpecModel>;
};
export type SpecModel={
    title:string;
    id:string
}
export type SpecStateType = {
    specList: Array<CommoditySpecsType>;
    specCombinationList: Array<SpecCategoryType>;
};

export const initialState: SpecStateType = {
    specList: [
        { title: "颜色", list: [{id:"红色",title:"红色"}, {id:"紫色",title:"紫色"}] },
        { title: "套餐", list: [{title: "套餐一",id: "套餐一"}, {id: "套餐二",title: "套餐二"}] },
        { title: "内存", list: [{id: "64G",title: "64G"}, {id: "128G",title: "128G"}] },
        { title: "运营商", list: [{id:"电信",title: "电信"}, {id: "联通",title: "联通"}, {id: "移动",title: "移动"}] }
    ],
    specCombinationList: [
        // { id: "1", specs: ["紫色", "套餐一", "64G",'电信'] },
        { id: "1", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"64G",title:"64G"},{id:'电信',title:'电信'}] },
        { id: "2", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"64G",title:"64G"},{id:'联通',title:'联通'}] },
        { id: "3", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"64G",title:"64G"},{id:'移动',title:'移动'}] },
        { id: "4", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"128G",title:"128G"},{id:'电信',title:'电信'}] },
        { id: "5", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"128G",title:"128G"},{id:'联通',title:'联通'}] },
        { id: "6", specs: [{id:"紫色",title:"紫色"},{id: "套餐一",title: "套餐一"}, {id:"128G",title:"128G"},{id:'移动',title:'移动'}] },

        // { id: "2", specs: ["紫色", "套餐一", "128G",'电信'] },
        // { id: "3", specs: ["紫色", "套餐二", "128G",'电信'] },
        // { id: "4", specs: ["黑色", "套餐一", "64G",'电信'] },
        // { id: "5", specs: ["黑色", "套餐三", "256G",'电信'] },
        // { id: "6", specs: ["白色", "套餐三", "256G",'电信'] },
        // { id: "7", specs: ["红色", "套餐一", "64G",'电信'] },
        // { id: "8", specs: ["红色", "套餐一", "64G",'联通'] },
        { id: "8", specs: [{id:"红色",title:"红色"},{id: "套餐一",title: "套餐一"}, {id:"128G",title:"128G"},{id:'联通',title:'联通'}] },
        { id: "9", specs: [{id:"红色",title:"红色"},{id: "套餐一",title: "套餐一"}, {id:"128G",title:"128G"},{id:'电信',title:'电信'}] },
        { id: "10", specs: [{id:"红色",title:"红色"},{id: "套餐一",title: "套餐一"}, {id:"64G",title:"64G"},{id:'移动',title:'移动'}] },
        { id: "11", specs: [{id:"红色",title:"红色"},{id: "套餐二",title: "套餐二"}, {id:"64G",title:"64G"},{id:'移动',title:'移动'}] },
    ]
};
