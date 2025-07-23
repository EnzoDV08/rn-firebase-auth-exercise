// TODO: Create Register Screen & Register Functionality
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const register = () => {
    registerUser(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Login')}>
  <Text style={styles.linkText}>Already have an account? Sign in</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 30
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  linkText: {
  color: 'blue',
  marginTop: 10,
  textAlign: 'center',
 }

});
