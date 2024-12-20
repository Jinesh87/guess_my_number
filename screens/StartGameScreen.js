import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
  
    function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);
    }
  
    function resetInputHandler() {
      setEnteredNumber('');
    }
  
    function confirmInputHandler() {
      const chosenNumber = parseInt(enteredNumber);
  
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
          'Invalid number!',
          'Number has to be a number between 1 and 99.',
          [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
        return;
      } 
      onPickNumber(chosenNumber);
    }
return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber} onChangeText={numberInputHandler} />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonConainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonConainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>

        </View>

    </View>
);
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 70,
        width: 70,
        fontSize: 35,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 3,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonConainer: {
        flex: 1
    }
});