import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const PressableAdd = () => {
    const navigation = useNavigation();
    return <Pressable onPress={() => navigation.navigate('Add Todo')}>
        <View style = {style.iosborder}>
            <Text style={style.press}>+</Text>
        </View>
    </Pressable>
      
}

export default PressableAdd;

const style = StyleSheet.create({
    press: {
      fontSize:30,
      marginTop:20,
      marginLeft:'auto',
      paddingHorizontal:15,
      paddingVertical:10,
    //   backgroundColor:'red'
    },
    iosborder:{
        // height:60,
        // width:60,
    }
  });