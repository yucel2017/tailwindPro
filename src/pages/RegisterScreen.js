import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const RegisterScreen = () => {

  const navigation = useNavigation();

  const SignUp = () => {
    auth().createUserWithEmailAndPassword("yucel.danisman@gmail.com", "emir2017")
      .then(() => {
        console.log('Created User')
      })
      .catch(error => {
        console.log('Error!')
      })
  }

  return (
    <View className="flex-1 bg-blue-500"  >

      <SafeAreaView className="flex">

        <View className="flex-row" >

          <TouchableOpacity className=" bg-red-600 p-1 rounded-3xl ml-4" activeOpacity={0.7} onPress={() => navigation.goBack()} >
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1-457733.png',
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

        </View>

        <View className="flex items-center" >
          <Image source={require('../assets/image/mario2.png')} style={{ width: 145, height: 165 }} />
        </View>

      </SafeAreaView>

      <View className="flex-1 bg-slate-100 rounded-3xl mt-1 pt-8 px-8 ">

        <View style={{ gap: 10 }}>

          <Text className="text-gray-700 ml-4 "  >E-Mail</Text>
          <TextInput className="p-4 bg-gray-300 rounded-2xl" placeholder='E-Mail Giriniz...' />

          <Text className="text-gray-700 ml-4 ">Kullanıcı Adı</Text>
          <TextInput className="p-4 bg-gray-300 rounded-2xl" placeholder='Kullanıcı Adı Giriniz...' />

          <Text className="text-gray-700 ml-4 ">Şifre</Text>
          <TextInput className="p-4 bg-gray-300 rounded-2xl" placeholder='Şifre Giriniz...' secureTextEntry />

          <TouchableOpacity className="flex items-center bg-blue-500 p-3 rounded-2xl" activeOpacity={0.7}
            onPress={SignUp}>
            <Text className="text-2xl font-bold text-gray-900" >Kayıt Ol</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-7" >
            <Text className="text-gray-400 font-semibold" >Bir Hesabım var {'>>'}  </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} activeOpacity={0.4} >
              <Text className="font-semibold text-blue-500" onPress={() => navigation.navigate('Login')} >Giriş Yap</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})