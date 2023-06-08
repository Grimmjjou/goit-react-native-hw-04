import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
const trashImg = require('./trash.png');

const BottomTabs = createBottomTabNavigator();

const CreatePost = () => {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("../../fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../../fonts/Roboto-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();

        }}>
            <View style={styles.postContainer}>
                <View style={styles.postImg}>
                    <TouchableOpacity style={styles.postImgAdd} activeOpacity={0.5}>
                        <FontAwesome name="camera" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.postImgText}>Завантажте фото</Text>
                <View style={styles.postForm}>
                    <TextInput style={styles.postName} placeholder="Назва..." inputMode="text" />
                    <View >
                        <Image style={{
                            top: 66,

                        }} source={require('../CreatePostsScreen/mappin.png')} />

                        <TextInput style={{ ...styles.postName, paddingLeft: 25 }} placeholder="Місцевість..." inputMode="navigation" />
                    </View>

                    <TouchableOpacity style={styles.postButton} activeOpacity={0.5}>
                        <Text style={styles.postButtonText}>Опубліковати</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>)
};


const CreatePostsScreen = ({ navigation }) => {
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: 80, }
        }}>
            <BottomTabs.Screen
                options={{

                    tabBarIcon: () => {
                        return <TouchableOpacity style={styles.trashButton} activeOpacity={0.5} >
                            <EvilIcons name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={
                            styles.logoutButton
                        } activeOpacity={0.5}
                            onPress={() => navigation.navigate('Home', { screen: 'PostsScreen' })} >
                            <Ionicons name="arrow-back-sharp" size={24} color="#212121" />
                        </TouchableOpacity>),
                    headerLeftContainerStyle: { paddingLeft: 10 },
                    headerTitleAlign: "center",
                    headerTitleStyle: { paddingBottom: 5 },
                    headerStyle: {
                        borderBottomColor: '#E8E8E8',
                        borderBottomWidth: 2,

                    }
                }} style={{
                    fontFamily: "Roboto-Medium", fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: 17,
                    lineHeight: 22
                }} name='Створити публікацію' component={CreatePost} />
        </BottomTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    trashButton: {

        backgroundColor: '#F6F6F6',
        height: 40,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    postContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    postImg: {
        marginTop: 32,
        flex: 2,
        width: '90%',
        height: '40%',
        color: '#F6F6F6',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: 8

    },
    postImgAdd: {

        padding: 40,
        borderRadius: 60,
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
    },
    postImgText: {
        fontFamily: "Roboto-Regular",
        color: "#BDBDBD",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        marginTop: 12,
        marginRight: 200
    },
    postForm: {
        flex: 3,
    },
    postButton: {
        backgroundColor: '#E8E8E8',
        height: 50,
        width: 343,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 44,
    },
    postButtonText: {
        fontFamily: "Roboto-Regular",
        color: '#BDBDBD',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19
    },
    postName: {
        fontFamily: "Roboto-Regular",
        width: 343,
        height: 50,
        borderRadius: 8,
        marginTop: 33,
        padding: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 2,
    },


});

export default CreatePostsScreen;