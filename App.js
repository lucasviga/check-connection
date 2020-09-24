import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const App: () => React$Node = () => {
  const netInfo = useNetInfo();

  const CheckInternet = () => {
    return (
      <Text style={styles.text}>
        Hmmm... Voce está{' '}
        {netInfo.isConnected
          ? 'Conectado.'
          : 'Offline. Conecte-se a uma rede WiFi ou ative os dados móveis.'}
        Tipo de Conexão: {netInfo.type}
      </Text>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#391B4D" />

      <View style={styles.container}>
        <Text style={styles.header}>
          About this App {'\n\n'}
          Describes the current state of the network.
        </Text>
      </View>

      <View style={netInfo.isConnected ? styles.conectado : styles.offline}>
        {/* {!netInfo.isConnected && <CheckInternet />} */}
        <CheckInternet />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#7951c9',
  },
  header: {
    fontSize: 25,
    margin: 20,
    color: '#fff',
  },
  conectado: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#10E689',
  },
  offline: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#E35750',
  },
  text: {
    color: '#FFF',
  },
});

export default App;
