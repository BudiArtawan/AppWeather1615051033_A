import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, TextInput, View } from 'react-native';
//ad8d4dff75b61421b2b28938918bcf97
export default class RamalanCuaca extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      forecast:{
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () =>{
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=ad8d4dff75b61421b2b28938918bcf97&units=metric';
  fetch (url)
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}


  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#E8F5E9',fontWeight: 'bold'}} >Ramalan Cuaca</Text>
      </View>

      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20 , color: '#E8F5E9'}}>Masukan Nama Kota</Text>

          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 50}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({city})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#BBDEFB"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>


      <View style={styles.box3}>
        <Text style = {{padding: 10, fontSize: 20}} >
          Kota = {this.state.city} {"\n"}
          Cuaca = {this.state.forecast.main} {"\n"}
          Description = {this.state.forecast.description} {"\n"}
          Temp = {this.state.forecast.temp} {"'Celcius"}
        </Text>
      </View>

      <View style={styles.box4}>
          <Text style={{ textAlign: 'center', padding: 18, fontSize: 14, color: '#E8F5E9'}} >Copy Right @Budi_Artawan</Text>
      </View>

</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box4: {
    height: 60,
    backgroundColor: '#0D47A1',
  },
  box1: {
    height: 80,
    backgroundColor: '#0D47A1',
  },
  box2: {
    flex: 0.7,
    backgroundColor: '#42A5F5',
    margin: 10
  },
  box3: {
    flex: 1,
    backgroundColor: '#42A5F5',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#BBDEFB'
  }

});
