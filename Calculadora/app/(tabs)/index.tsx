import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  var [input, setInput] = useState('');
  var [result, setResult] = useState(null);

  // Funções de operações básicas
  var handlePress = (value) => {
    setInput(input + value);
  };

  var calcularResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Erro");
    }
  };

  // Função de raiz quadrada
  var handleSqrt = () => {
    try {
      setResult(Math.sqrt(eval(input)));
    } catch (error) {
      setResult("Erro");
    }
  };

  // Função de seno e cosseno
  var handleSine = () => {
    try {
      setResult(Math.sin((eval(input) * Math.PI) / 180));
    } catch (error) {
      setResult("Erro");
    }
  };

  var handleCosine = () => {
    try {
      setResult(Math.cos((eval(input) * Math.PI) / 180));
    } catch (error) {
      setResult("Erro");
    }
  };

  // Conversão de temperatura
  var converteCelsius = () => {
    try {
      setResult(((eval(input) - 32) * 5) / 9);
    } catch (error) {
      setResult("Erro");
    }
  };

  var converteFahrenheit = () => {
    try {
      setResult((eval(input) * 9) / 5 + 32);
    } catch (error) {
      setResult("Erro");
    }
  };

  // Função de limpar a entrada e o resultado
  var clearInput = () => {
    setInput('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        placeholder="Digite o valor"
      />
      <Text style={styles.result}>{result !== null ? `Resultado: ${result} ` : ''}</Text>

      <View style={styles.row}>
        <Button label="1" onPress={() => handlePress('1')} />
        <Button label="2" onPress={() => handlePress('2')} />
        <Button label="3" onPress={() => handlePress('3')} />
        <Button label="+" onPress={() => handlePress('+')} />
      </View>

      <View style={styles.row}>
        <Button label="4" onPress={() => handlePress('4')} />
        <Button label="5" onPress={() => handlePress('5')} />
        <Button label="6" onPress={() => handlePress('6')} />
        <Button label="-" onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <Button label="7" onPress={() => handlePress('7')} />
        <Button label="8" onPress={() => handlePress('8')} />
        <Button label="9" onPress={() => handlePress('9')} />
        <Button label="" onPress={() => handlePress('')} />
      </View>

      <View style={styles.row}>
        <Button label="C" onPress={clearInput} />
        <Button label="0" onPress={() => handlePress('0')} />
        <Button label="=" onPress={calcularResult} />
        <Button label="/" onPress={() => handlePress('/')} />
      </View>

      <View style={styles.row}>
        <Button label="Raiz" onPress={handleSqrt} />
        <Button label="Seno" onPress={handleSine} />
        <Button label="Cos" onPress={handleCosine} />
      </View>

      <View style={styles.row}>
        <Button label="°F Para °C" onPress={converteCelsius} />
        <Button label="°C Para °F" onPress={converteFahrenheit} />
      </View>
    </View>
  );
}

// botão personalizado
var Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});