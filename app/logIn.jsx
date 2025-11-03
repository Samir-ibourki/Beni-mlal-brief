// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import login from '../assets/login.png'
// import { Link } from "expo-router";
// //import { SafeAreaView } from "react-native-safe-area-context";

// export default function logIn() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.firstCont} >
//         <Image source={login} resizeMode="contain" style={{width:150,height:150}} />
//         <Text style={styles.text}> Welcome Back..!</Text>
//       </View>
//       <View style={styles.form}>
// <View>
//     <Text style={styles.label}>Email or Username</Text>
//     <TextInput style={styles.input} placeholder="Enter Your Email / Username "/>
// </View>
// <View>
//     <Text style={styles.label}>Password</Text>
//     <TextInput style={styles.input} secureTextEntry placeholder="Enter Your Password "/>
// </View>
//       </View>
//       <TouchableOpacity>
//         <Link href={'/'}>
//         <Text>
//             Login
//             </Text>
//             </Link>
//       </TouchableOpacity>
//       <View>
//         <Text>
//             Dont have an account ? <Link href={'/signUp'}>Sign Up</Link> 
//         </Text>
//         <View>
//             <Text>
//                 Or
//             </Text>
//         </View>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
// container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'space-evenly',

// },
// text:{
//     fontSize:30,
//     fontWeight:'bold'
// }
// })