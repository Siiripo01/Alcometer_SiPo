import { useState } from 'react';
import { Switch, Pressable, Text, TextInput, View, ScrollView, StatusBar } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { Styles } from './styles/Styles';

export default function App() {

  const [on, setOn] = useState(false);
  
  const [weight, setWeight] = useState(0);
  
  const [bottlesValue, setBottlesvalue] = useState(0);
  const [hoursValue, setHoursvalue] = useState(0);
  
  const [radiovalue, setRadiovalue] = useState('male');

  const [result, setResult] = useState(0);

    function RadioSelection({label, value}){
      return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value={value} color={'#c75f8a'}/>
          <Text>{label}</Text>
        </View>
      );
    };
    
    function calcAlc() {
      let litres = bottlesValue * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsLeft = grams - burning * hoursValue;

      if (radiovalue === 'male') {
        let endResult = gramsLeft / (weight * 0.7);
        setResult(endResult.toFixed(2));

        if (endResult < 0) {
          setResult(0);
        }

      }
      else {
        let endResult = gramsLeft / (weight * 0.6);
        setResult(endResult.toFixed(2));

        if (endResult < 0) {
          setResult(0);
        }  
      }

      if (weight === 0) {
        alert('Please add weight.')
        setResult(0);
      }
    };

    return (
      <ScrollView style={Styles.container}>
        <StatusBar/>
  
        <Switch
          value={on}
          onValueChange={() => setOn(!on) }
          thumbColor={Styles.mySwitchButtonColor}
          trackColor={Styles.myTrackColors}
        />
        
        <View style={Styles.center}>
          <Text style={Styles.header}>Alcometer</Text>
        </View>
  
        <Text style={Styles.margin}>Weight</Text>
        <TextInput
          style={Styles.textInput}
          value={weight}
          onChangeText={(w) => setWeight(w)}
          keyboardType='numeric'
          backgroundColor='white'
        />
  
        <Text style={Styles.margin}>Bottles</Text>
        <NumericInput
          value={bottlesValue}
          onChange={b => setBottlesvalue(b)}
  
          minValue={0}
  
          leftButtonBackgroundColor={Styles.numericButtonColors}
          rightButtonBackgroundColor={Styles.numericButtonColors}
          borderColor='white'
          iconStyle={{color: 'white'}}
          rounded
        />
  
        <Text style={Styles.margin}>Hours</Text>
        <NumericInput
          value={hoursValue}
          onChange={h => setHoursvalue(h)}
  
          minValue={0}
  
          leftButtonBackgroundColor={Styles.numericButtonColors}
          rightButtonBackgroundColor={Styles.numericButtonColors}
          borderColor='white'
          iconStyle={{color: 'white'}}
          rounded
        />
  
        <View style={Styles.margin}>
          <RadioButton.Group onValueChange={x => setRadiovalue(x)} value={radiovalue}>
            <RadioSelection label={'Male'} value={'male'}/>
            <RadioSelection label={'Female'} value={'female'}/>
          </RadioButton.Group>
        </View>
  
        <View style={Styles.center}>
          <Text style={Styles.result}>{result}</Text>
    
          <Pressable onPress={calcAlc} style={Styles.button}>
            <Text style={Styles.buttonText}>CALCULATE</Text>
          </Pressable>
        </View>
        
      </ScrollView>
    );
  };