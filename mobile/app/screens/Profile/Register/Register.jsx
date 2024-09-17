import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import getRegister from '../../../router/RegisterRoute';
const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userData = await getRegister(email, password);

      console.log('User registered successfully', userData);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          style={{ margin: 30 }}
          name="arrow-back"
          size={24}
          color="white"
        />
      </TouchableOpacity>

      <View style={{ marginLeft: 30, flexDirection: 'row' }}>
        <AntDesign name="book" size={50} color="white" />
        <Text style={{ color: 'white', fontSize: 40 }}>Welcome back :D</Text>
      </View>
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            padding: 10,
            paddingBottom: 0,
          }}
        >
          Create account
        </Text>
        <Text style={{ color: 'white', padding: 20 }}>Email</Text>
        <TextInput
          color="white"
          style={{
            borderRadius: 20,
            height: 50,
            borderWidth: 2,
            borderColor: 'white',
            paddingLeft: 50,
            marginVertical: -10,
          }}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter email here"
          placeholderTextColor={'white'}
        />
        <Text style={{ color: 'white', padding: 20 }}>Password</Text>
        <TextInput
          color="white"
          style={{
            borderRadius: 20,
            height: 50,
            borderWidth: 2,
            borderColor: 'white',
            paddingLeft: 50,
            marginVertical: -10,
          }}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'white'}
          secureTextEntry
        />
        <TouchableOpacity
          style={{
            width: '100%',
            display: 'flex',
            padding: 14,
            backgroundColor: 'black',
            borderRadius: 20,
            marginTop: 50,
            gap: 10,
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              width: '100%',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              marginTop: 20,
            }}
          >
            Forgot Password?{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  box: {
    backgroundColor: '#333333',
    padding: 10,
    width: '100%',
    height: 600,
    borderRadius: 30,
    marginTop: 30,
  },
});
export default Register;
