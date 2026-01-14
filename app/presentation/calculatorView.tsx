import { ButtonCalc } from "@/components/buttonCalc";
import { colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { StyleSheet, Text, View } from "react-native";

export const CaculatorView = () => {


    const {value1, showValue, saludar} = useCalculator()


    // const result = saludar("brandon")


  return (
    <View style={styles.container}>

        <Text style={styles.value}>{value1}</Text>
        {/* <Text style={styles.value}>{result}</Text> */}
     
      <View style={styles.row}>
        <ButtonCalc func={()=>showValue("C")} text={"C"} color={colors.lightGray} colorText={colors.backgrpound} />
        <ButtonCalc func={()=>showValue("+/-")} text={"+/-"} color={colors.lightGray} colorText={colors.backgrpound} />
        <ButtonCalc func={()=>showValue("%")} text={"%"} color={colors.lightGray} colorText={colors.backgrpound} />
        <ButtonCalc func={()=>showValue("/")} text={"/"} color={colors.orange} />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={()=>showValue("7")} text={"7"}  />
        <ButtonCalc func={()=>showValue("8")} text={"8"} />
        <ButtonCalc func={()=>showValue("9")} text={"9"} />
        <ButtonCalc func={()=>showValue("*")} text={"*"} color={colors.orange} />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={()=>showValue("4")} text={"4"} />
        <ButtonCalc func={()=>showValue("5")} text={"5"} />
        <ButtonCalc func={()=>showValue("6")} text={"6"} />
        <ButtonCalc func={()=>showValue("-")} text={"-"} color={colors.orange} />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={()=>showValue("1")} text={"1"} />
        <ButtonCalc func={()=>showValue("2")} text={"2"} />
        <ButtonCalc func={()=>showValue("3")} text={"3"} />
        <ButtonCalc func={()=>showValue("+")} text={"+"} color={colors.orange} />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={()=>showValue("0")} text={"0"} size="lg" />
        <ButtonCalc func={()=>showValue(".")} text={"."} />
        <ButtonCalc func={()=>showValue("+")} text={"="} color={colors.orange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems:"center",
    justifyContent: "flex-end",
    paddingBottom:80,
    bottom: 0
  },

  row:{
    flexDirection: "row",
    gap: 20,
    marginTop:40
  },

  value:{
    fontSize: 80,
    color: colors.textPrmary
  }

});
