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
import getLogin from '../../../router/LoginRoute';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await getLogin(email, password);
      console.log('User logged in successfully', userData);
    } catch (error) {
      console.error('Login failed', error);
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
        <Text style={{ color: 'white', fontSize: 40 }}>Welcome :D</Text>
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
          Sign in
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
          placeholderTextColor={'white'}
          onChangeText={text => setPassword(text)}
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
          onPress={handleLogin}
        >
          <Text
            style={{
              width: '100%',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Sign in
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
export default Login;
