import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fac9e4',
  },

  mySwitchButtonColor: '#f7a9d6',

  myTrackColors: {
    false: '#f0eaea', 
    true: '#a5789a'
  },

  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: '#b469a4'
  },

  margin: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20
  },

  center: {
    width:'100%',
    alignItems: 'center',
  },

  textInput: {
    width: '100%',
    padding: 5,
  },

  numericButtonColors: '#df8bb5',

  buttonText: {
    fontSize: 20
  },

  button: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 30
  },

  result: {
    marginTop: 20,
    fontSize: 30,
    color: '#b469a4',
    fontWeight: "bold"
  }
});

export {Styles};