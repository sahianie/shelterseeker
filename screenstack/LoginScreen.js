import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };
  

  return (
    <View style={[styles.container,{backgroundColor:'white'}]}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text  style={[styles.title,{fontSize:15,marginBottom:50}]}>Login to your account</Text>
      <TextInput
        style={[styles.input,{textAlign:'center'}]}
        placeholder="Enter your Email"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={[styles.input,{textAlign:'center'}]}
        placeholder="Enter your Password"
        placeholderTextColor="black"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.signupText}>Don't have an account?Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
  },
  input: {
    color:'black',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#caadff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 16,
    color: '#888',
    fontWeight:'500'
  },
});

export default LoginScreen;