import { ButtonCalc } from "@/components/buttonCalc";
import { colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { StyleSheet, Text, View } from "react-native";

export const CaculatorView = () => {
  const { buildNumber, resetValue, handleOperator, calculate, getOperation, result } = useCalculator();



  return (
    <View style={styles.container}>

      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.operation}>{getOperation()}</Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.value}>{result === "0" ? "" : result}</Text>

      <View style={styles.row}>
        <ButtonCalc
          func={() => resetValue()}
          text={"C"}
          color={colors.lightGray}
          colorText={colors.backgrpound}
        />
        <ButtonCalc
          func={() => buildNumber("+/-")}
          text={"+/-"}
          color={colors.lightGray}
          colorText={colors.backgrpound}
        />
        <ButtonCalc
          func={() => buildNumber("%")}
          text={"%"}
          color={colors.lightGray}
          colorText={colors.backgrpound}
        />
        <ButtonCalc
          func={() => handleOperator("/")}
          text={"/"}
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={() => buildNumber("7")} text={"7"} />
        <ButtonCalc func={() => buildNumber("8")} text={"8"} />
        <ButtonCalc func={() => buildNumber("9")} text={"9"} />
        <ButtonCalc
          func={() => handleOperator("*")}
          text={"*"}
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={() => buildNumber("4")} text={"4"} />
        <ButtonCalc func={() => buildNumber("5")} text={"5"} />
        <ButtonCalc func={() => buildNumber("6")} text={"6"} />
        <ButtonCalc
          func={() => handleOperator("-")}
          text={"-"}
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={() => buildNumber("1")} text={"1"} />
        <ButtonCalc func={() => buildNumber("2")} text={"2"} />
        <ButtonCalc func={() => buildNumber("3")} text={"3"} />
        <ButtonCalc
          func={() => handleOperator("+")}
          text={"+"}
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc func={() => buildNumber("0")} text={"0"} size="lg" />
        <ButtonCalc func={() => buildNumber(".")} text={"."} />
        <ButtonCalc
          func={() => calculate()}
          text={"="}
          color={colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 80,
    bottom: 0,
  },

  row: {
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
  },

  value: {
    fontSize: 80,
    color: colors.textPrmary,
    alignSelf: "flex-end",
    marginRight: 60
  },

  operation: {
    fontSize: 40,
    color: colors.textPrmary,
    alignSelf: "flex-end",
    marginRight: 60,
    opacity: 0.5,
  },
});
