import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const InitialScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginRight: 300, marginBottom: 130 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <AntDesign name="book" size={120} color="white" />
      <View style={{ display: 'flex', gap: 20, width: '100%' }}>
        <Text style={styles.headerText}>Comic</Text>
        <View
          style={{
            justifyContent: 'space-between',
            padding: 30,
            display: 'flex',
            gap: 10,
          }}
        >
          <TouchableOpacity style={styles.box}>
            <MaterialIcons name="facebook" size={24} color="#4299E1" />
            <Text style={{ width: '100%', marginTop: 2, color: '#4299E1' }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="google" size={24} color="#E53E3E" />
            <Text style={{ width: '100%', marginTop: 2, color: '#E53E3E' }}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          gap: 20,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '80%',
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#E2E8F0',
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="facebook" size={30} color="#4299E1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#E2E8F0',
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="facebook" size={30} color="#4299E1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#E2E8F0',
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="facebook" size={30} color="#4299E1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#E2E8F0',
              borderRadius: 30,
            }}
            onPress={() => handleLogin()}
          >
            <MaterialIcons name="facebook" size={30} color="#4299E1" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            display: 'center',
            justifyContent: 'space-between',

            alignItems: 'center',
            padding: 10,
            gap: 10,
          }}
        >
          <View
            style={{
              width: 250,
              height: 1,
              backgroundColor: '#E2E8F0',
              marginTop: -25,
            }}
          ></View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={{ width: '30%' }}
            onPress={() => handleRegister()}
          >
            <Text
              style={{
                color: 'gray',
                marginTop: -20,
                color: '#EDF2F7',
              }}
            >
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  box: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#E2E8F0',
    borderRadius: 30,
    marginLeft: '15%',
    gap: 10,
  },
});

export default InitialScreen;
