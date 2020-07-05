import React, { useState, useMemo } from "react";
import SpecAdjoinMatrix from "./utils/spec-adjoin-martix";
import {initialState} from "./data";
import {StyleSheet, Text, View} from "react-native";


const Spec: React.FC = () => {
    // const { specList, specCombinationList } = useSelector(
    //     (state: RootState) => state.spec
    // );

    const {specList,specCombinationList}=initialState;
    // 已选择的规格，长度为规格列表的长度
    const [specsS, setSpecsS] = useState(Array(specList.length).fill(""));

    // 创建一个规格矩阵
    const specAdjoinMatrix = useMemo(
        () => new SpecAdjoinMatrix(specList, specCombinationList),
        [specList, specCombinationList]
    );
    // 获得可选项表
    const optionSpecs = specAdjoinMatrix.getSpecscOptions(specsS);

    const handleClick = function(bool: boolean, text: string, index: number) {
        // 排除可选规格里面没有的规格
        if (specsS[index] !== text && !bool){
            console.log("return "+ text)
            return;
        }
        // 根据text判断是否已经被选中了
        specsS[index] = specsS[index] === text ? "" : text;
        console.log(Date.now()+'===='+JSON.stringify(specsS))
        setSpecsS(specsS.slice());
    };

    return (
        <View style={styles.container}>
            {specList.map(({ title, list }, index) => (
                <View key={index}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.specBox}>
                        {list.map((value, i) => {
                            const isOption = optionSpecs.includes(value); // 当前规格是否可选
                            const isActive = specsS.includes(value); // 当前规格是否被选
                            return (
                                <Text
                                    key={i}
                                    style={[
                                        isOption?styles.specOption:null,
                                        isActive?styles.specAction:null,
                                        isOption?null:styles.specDisabled,{
                                        paddingHorizontal:10,paddingVertical:8
                                        }
                                    ]}

                                    onPress={() => handleClick(isOption, value, index)}
                                >
                  {JSON.stringify(value)}
                </Text>
                            );
                        })}
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Spec;
const styles=StyleSheet.create({
    container :{
    width: '100%',
    height: '100%',
        paddingHorizontal:20,
    borderColor:'gray',
        justifyContent:"center",
        alignContent:"center"
},
title:{
    fontSize: 16,
    lineHeight: 24,
    color: '#262626',
},
specBox :{
    margin: 5,
    flexWrap:"wrap",
    flexDirection:"row"
},
specOption: {
    marginLeft: 20,
    backgroundColor: '#f3f3f3',
    color: '#505257',
},
specAction: {
    marginLeft: 20,
    backgroundColor: '#fef6f4',
    color: '#e34a40',
},
specDisabled: {
    marginLeft: 20,
    backgroundColor: '#f3f3f3',
    color: '#bebebe'
}
})
