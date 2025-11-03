// import React, { useRef, useEffect } from "react";
// import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
// import icon from "../assets/icon.png";
// import { useRouter } from "expo-router";

// export default function Index() {
//  const router = useRouter();

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(0.8)).current;

//   useEffect(() => {
    
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 5,
//         useNativeDriver: true,
//       }),
//     ]).start();

    
//     const timeout = setTimeout(() => {
//       router.replace("/onboarding"); 
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, [fadeAnim, router, scaleAnim]);

//   return (
//      <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.center,
//           {
//             opacity: fadeAnim,
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//       >
//         <Image source={icon} resizeMode="contain" style={{ width: 200, height: 200 }} />
//         <Text style={styles.text}>Beni Mellal Guide</Text>
//         <Text style={styles.subtitel}>
//           Discover the beauty of Beni Mellal! Explore waterfalls, lakes, historic sites...
//         </Text>
//       </Animated.View>
  


//       {/* <SafeAreaView style={styles.safeBtn}>
//         <Animated.View
//           style={[
//             {
//               transform: [{ translateY: slideAnim }],
//               opacity: fadeAnim,
//               width: "100%",
//             },
//           ]}
//         >
//           <TouchableOpacity onPress={()=>router.push('/logIn')} style={styles.btn}>
//             <Text style={styles.btnText}>Log In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>router.push('/signUp')} style={styles.btn}>
//             <Text style={styles.btnText}>Sign Up</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </SafeAreaView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   center: {
//     alignItems: "center",
//     gap: 10,
//     marginBottom:70,
//   },
//   text: {
//     fontSize: 35,
//     fontWeight: "bold",
//   },
//   subtitel: {
//     fontSize: 20,
//     textAlign: "center",
//     color: "#555",
//   },
//   // safeBtn: {
//   //   position: "absolute",
//   //   bottom: 0,
//   //   width: "100%",
//   //   paddingHorizontal: 20,
//   //   paddingBottom: 20, 
//   // },
//   // btn: {
//   //   backgroundColor: "#378b84ff",
//   //   paddingVertical: 15,
//   //   borderRadius: 8,
//   //   width: "100%",
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   //   marginBottom: 15,
//   // },
//   // btnText: {
//   //   color: "white",
//   //   fontSize: 18,
//   //   fontWeight: "bold",
//   // },
// });
