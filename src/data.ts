export const TOGGLE = "spec";

export type CommoditySpecsType = {
    propertyName: string;
    propertyId: string;
    sort: number;
    propertyValueList: Array<SpecModel>;
};

export type SpecCategoryType = {
    id: string;
    productItemNo: string;
    imageUrl: string;
    skuId: string;
    sort: number;
    price: number;
    propertyValueList: Array<SpecModel>;
};
export type SpecModel= {
    propertyValueId: string
    propertyValue: string
}
export type SpecStateType = {
    specList: Array<CommoditySpecsType>;
    specCombinationList: Array<SpecCategoryType>;
};

export const initialState: SpecStateType = {
    specList: [
        {
            "propertyId": "728569726901100544",
            "propertyName": "IntelCPU",
            "sort": 1,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                }
            ]
        },
        {
            "propertyId": "728570080774529024",
            "propertyName": "内存",
            "sort": 1,
            "propertyValueList": [
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                }
            ]
        },
        {
            "propertyId": "728570494353874944",
            "propertyName": "硬盘",
            "sort": 1,
            "propertyValueList": [
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                }
            ]
        },
        {
            "propertyId": "728987370519244800",
            "propertyName": "套餐",
            "sort": 1,
            "propertyValueList": [
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        }
    ],
    specCombinationList: [
        {
            "id": "728988875091587072",
            "productItemNo": "10001575_20002872",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702403702784",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId": "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId": "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875095781376",
            "productItemNo": "10001575_20002873",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702483394560",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId": "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId": "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875104169984",
            "productItemNo": "10001575_20002874",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702542114816",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId": "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                    "propertyValueId": "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875112558592",
            "productItemNo": "10001575_20002876",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702659555328",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId": "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                    "propertyValueId": "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875125141504",
            "productItemNo": "10001575_20002877",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702726664192",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId": "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId": "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875129335808",
            "productItemNo": "10001575_20002878",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702781190144",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId": "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId": "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875137724416",
            "productItemNo": "10001575_20002879",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702856687616",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                    "propertyValueId": "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId": "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                    "propertyValueId": "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875141918720",
            "productItemNo": "10001575_20002880",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702915407872",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875146113024",
            "productItemNo": "10001575_20002881",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988702999293952",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875158695936",
            "productItemNo": "10001575_20002883",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703112540160",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875162890240",
            "productItemNo": "10001575_20002884",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703167066112",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875175473152",
            "productItemNo": "10001575_20002886",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703326449664",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875179667456",
            "productItemNo": "10001575_20002887",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703385169920",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875183861760",
            "productItemNo": "10001575_20002888",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703443890176",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569882211983360",
                    "propertyValue": "i3"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875188056064",
            "productItemNo": "10001575_20002889",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703498416128",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875196444672",
            "productItemNo": "10001575_20002890",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703552942080",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875200638976",
            "productItemNo": "10001575_20002891",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703607468032",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875250970624",
            "productItemNo": "10001575_20002892",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703661993984",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875255164928",
            "productItemNo": "10001575_20002893",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703716519936",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875263553536",
            "productItemNo": "10001575_20002895",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988703850737664",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875280330752",
            "productItemNo": "10001575_20002898",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704039481344",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875284525056",
            "productItemNo": "10001575_20002899",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704094007296",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875288719360",
            "productItemNo": "10001575_20002900",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704152727552",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875297107968",
            "productItemNo": "10001575_20002901",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704215642112",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875301302272",
            "productItemNo": "10001575_20002902",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704282750976",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875305496576",
            "productItemNo": "10001575_20002903",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704345665536",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875309690880",
            "productItemNo": "10001575_20002904",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704404385792",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875313885184",
            "productItemNo": "10001575_20002905",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704475688960",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569945957015552",
                    "propertyValue": "i5"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875326468096",
            "productItemNo": "10001575_20002907",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704622489600",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875339051008",
            "productItemNo": "10001575_20002908",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704685404160",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875343245312",
            "productItemNo": "10001575_20002909",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704735735808",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875355828224",
            "productItemNo": "10001575_20002911",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988704844787712",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570368768024576",
                    "propertyValue": "8g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875368411136",
            "productItemNo": "10001575_20002914",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705004171264",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875376799744",
            "productItemNo": "10001575_20002915",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705054502912",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875380994048",
            "productItemNo": "10001575_20002916",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705109028864",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875385188352",
            "productItemNo": "10001575_20002917",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705163554816",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        },
        {
            "id": "728988875389382656",
            "productItemNo": "10001575_20002918",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705213886464",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570388661608448",
                    "propertyValue": "16g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875406159872",
            "productItemNo": "10001575_20002921",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705373270016",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570532350074880",
                    "propertyValue": "256G"
                },
                {
                   "propertyValueId":  "728987540145287168",
                    "propertyValue": "套餐3送显示器"
                }
            ]
        },
        {
            "id": "728988875414548480",
            "productItemNo": "10001575_20002922",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705431990272",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987422696386560",
                    "propertyValue": "基础套餐"
                }
            ]
        },
        {
            "id": "728988875418742784",
            "productItemNo": "10001575_20002923",
            "imageUrl": "/714930267504754688/726853317506592768.jpg",
            "skuId": "728988705482321920",
            "sort": 1,
            "price": 11100,
            "propertyValueList": [
                {
                    "propertyValueId": "728569973287100416",
                    "propertyValue": "i7"
                },
                {
                  "propertyValueId":  "728570416440483840",
                    "propertyValue": "32g"
                },
                {
                    "propertyValueId":  "728570559906652160",
                    "propertyValue": "512g"
                },
                {
                   "propertyValueId":  "728987479285936128",
                    "propertyValue": "套餐2"
                }
            ]
        }
    ]
};
