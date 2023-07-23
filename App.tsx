import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Numpad from './component/Numpad';

export default function App() {
  
  enum Operator {
    DIVIDE,
    MULTIPLY,
    ADD,
    SUBTRACT,
    NONE
  }

  const [screenValue, setScreenValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState(Operator.NONE);

  const numberPressed = (value: number) => {
    return () => {setScreenValue(screenValue*10 + value);}
  }

  const operatorPressed = (value: Operator) => {
    return () => {
      setPreviousValue(screenValue);
      setOperator(value);
      setScreenValue(0);
    }
  }

  const equalPressed = () => {
    switch(operator)
    {
      case Operator.DIVIDE:
        setScreenValue(previousValue / screenValue);
        break;
      case Operator.MULTIPLY:
        setScreenValue(previousValue * screenValue);
        break;
      case Operator.SUBTRACT:
        setScreenValue(previousValue - screenValue);
        break;
      case Operator.ADD:
        setScreenValue(previousValue + screenValue);
        break;
    }
  }

  const clearPressed = () => {
    setScreenValue(0)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.screen}>
        <Text style={styles.textScreen}>{screenValue}</Text>
      </View>
      <View style={styles.numPadRow}>
        <Numpad title='C' backgroundColor='#4A4A4A' onPress={clearPressed}/>
        <Numpad title='+/-' backgroundColor='#4A4A4A'/>
        <Numpad title='√' backgroundColor='#4A4A4A'/>
        <Numpad title='÷' backgroundColor='#C0751B' color='black' onPress={operatorPressed(Operator.DIVIDE)}/>
      </View>
      <View style={styles.numPadRow}>
        <Numpad title='7' backgroundColor='#5C5C5C' onPress={numberPressed(7)}/>
        <Numpad title='8' backgroundColor='#5C5C5C' onPress={numberPressed(8)}/>
        <Numpad title='9' backgroundColor='#5C5C5C' onPress={numberPressed(9)}/>
        <Numpad title='×' backgroundColor='#C0751B' color='black' onPress={operatorPressed(Operator.MULTIPLY)}/>
      </View>
      <View style={styles.numPadRow}>
        <Numpad title='4' backgroundColor='#5C5C5C' onPress={numberPressed(4)}/>
        <Numpad title='5' backgroundColor='#5C5C5C' onPress={numberPressed(5)}/>
        <Numpad title='6' backgroundColor='#5C5C5C' onPress={numberPressed(6)}/>
        <Numpad title='-' backgroundColor='#C0751B' color='black' onPress={operatorPressed(Operator.SUBTRACT)}/>
      </View>
      <View style={styles.numPadRow}>
        <Numpad title='1' backgroundColor='#5C5C5C' onPress={numberPressed(1)}/>
        <Numpad title='2' backgroundColor='#5C5C5C' onPress={numberPressed(2)}/>
        <Numpad title='3' backgroundColor='#5C5C5C' onPress={numberPressed(3)}/>
        <Numpad title='+' backgroundColor='#C0751B' color='black' onPress={operatorPressed(Operator.ADD)}/>
      </View>
      <View style={styles.numPadRow}>
        <Numpad title='x²' backgroundColor='#4A4A4A'/>
        <Numpad title='0' backgroundColor='#5C5C5C' onPress={numberPressed(0)}/>
        <Numpad title='.' backgroundColor='#4A4A4A'/>
        <Numpad title='=' backgroundColor='#C0751B' color='black' onPress={equalPressed}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen: {
    height: '20%',
    width: '100%',
    backgroundColor: '#212121',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },

  numPadRow: {
    height: '16%',
    width: '100%',
    flexDirection: 'row',
  },

  textScreen: {
    color: '#BFBFBF',
    fontSize: 50,
  }
});
