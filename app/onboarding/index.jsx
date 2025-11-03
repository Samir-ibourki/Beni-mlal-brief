import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const slides = [
  {
    id: "1",
    title: "Discover Beni Mellal",
    description: "Explore waterfalls, lakes, and historic sites.",
    image: require("../../assets/slide1.png"),
  },
  {
    id: "2",
    title: "Plan Your Trip",
    description: "Find top places, hotels, and activities easily.",
    image: require("../../assets/slide3.png"),
  },
  {
    id: "3",
    title: "Enjoy the Experience",
    description: "Save favorites and start exploring today!",
    image: require("../../assets/slide2.png"),
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    translateAnim.setValue(40);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentIndex, fadeAnim, translateAnim]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/homescreen");
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <ImageBackground
      source={currentSlide.image}
      style={styles.background}
      resizeMode="cover"
    >
  
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: translateAnim }],
            },
          ]}
        >
          <Text style={styles.title}>{currentSlide.title}</Text>
          <Text style={styles.description}>{currentSlide.description}</Text>

          <View style={styles.btns}>
            {currentIndex > 0 && (
              <TouchableOpacity onPress={prevSlide}>
                <Text style={styles.prev}>Prev</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={nextSlide}>
              <Text style={styles.next}>
                {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)", 
  },
  container: {
   position: 'absolute',
    top: 80,            
    left: 0,
    right: 0,
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#f1f1f1",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  btns: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  next: {
    backgroundColor: "#378b84",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    fontWeight: "bold",
    overflow: "hidden",
  },
  prev: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    overflow: "hidden",
  },
});
