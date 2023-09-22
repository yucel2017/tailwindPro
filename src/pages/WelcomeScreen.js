import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-blue-500" >
      <SafeAreaView >

        <View className="flex-row justify-center mt-32 " >
          <Text className='text-red-600 font-bold text-4xl'>Hoşgeldin!</Text>
        </View>

        <View className="flex-row justify-center mt-28 "  >
          <Image source={require('../assets/image/mario3.png')} style={{ width: 150, height: 150 }} />
        </View>

      </SafeAreaView>

      <View className="px-8 pt-8" >
        <TouchableOpacity className="flex items-center bg-red-600 p-3 rounded-2xl" activeOpacity={0.7}
        onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-2xl font-bold text-gray-900"  >Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-7" >
        <Text className="text-black-400 font-semibold" >Bir Hesabım var {'>>'}  </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} activeOpacity={0.4} >
          <Text className="font-semibold text-red-600" onPress={() => navigation.navigate('Login')} >Giriş Yap</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})