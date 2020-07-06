export const TOGGLE = "spec";

export type CommoditySpecsType = {
    title: string;
    list: Array<SpecModel>;
};

export type SpecCategoryType = {
    id: string;
    specs: Array<SpecModel>;
};
export type SpecModel = {
    title: string;
    id: string
}
export type SpecStateType = {
    specList: Array<CommoditySpecsType>;
    specCombinationList: Array<SpecCategoryType>;
};

export const initialState: SpecStateType = {
    specList: [
        {
            title: "IntelCPU",
            list: [
                {
                    id: "i3",
                    title: "i3",
                },
                {
                    id: "i5",
                    title: "i5",
                },
                {
                    id: "i7",
                    title: "i7",
                }
            ]
        },
        {

            title: "内存",

            list: [
                {

                    id: "8g",
                    title: "8g",

                },
                {

                    id: "16g",
                    title: "16g",

                },
                {

                    id: "32g",
                    title: "32g",

                }
            ]
        },
        {

            title: "硬盘",

            list: [
                {

                    id: "256G",
                    title: "256G",

                },
                {

                    id: "512g",
                    title: "512g",

                }
            ]
        },
        {

            title: "套餐",

            list: [
                {

                    id: "套餐2",
                    title: "套餐2",

                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器",

                },
                {

                    id: "基础套餐",
                    title: "基础套餐",

                }
            ]
        }
    ],
    specCombinationList: [
        {
            "id": "728988875091587072",
            specs: [
                {
                    id: "i3",
                    title: "i3"
                },
                {
                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875095781376",
            specs: [
                {
                    id: "i3",
                    title: "i3"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {
                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875104169984",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875112558592",
            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875125141504",
            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875129335808",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875137724416",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875141918720",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875146113024",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875158695936",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875162890240",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875175473152",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875179667456",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875183861760",





            specs: [
                {

                    id: "i3",
                    title: "i3"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875188056064",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875196444672",





            specs: [
                {
                    id: "i5",
                    title: "i5"
                },
                {
                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875200638976",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875250970624",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875255164928",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875263553536",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875280330752",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875284525056",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875288719360",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875297107968",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875301302272",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875305496576",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875309690880",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875313885184",





            specs: [
                {

                    id: "i5",
                    title: "i5"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875326468096",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875339051008",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875343245312",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875355828224",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "8g",
                    title: "8g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875368411136",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875376799744",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875380994048",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875385188352",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        },
        {
            "id": "728988875389382656",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "16g",
                    title: "16g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875406159872",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "256G",
                    title: "256G"
                },
                {

                    id: "套餐3送显示器",
                    title: "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875414548480",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "基础套餐",
                    title: "基础套餐"
                }
            ]
        },
        {
            "id": "728988875418742784",





            specs: [
                {

                    id: "i7",
                    title: "i7"
                },
                {

                    id: "32g",
                    title: "32g"
                },
                {

                    id: "512g",
                    title: "512g"
                },
                {

                    id: "套餐2",
                    title: "套餐2"
                }
            ]
        }
    ]
};
