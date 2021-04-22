import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchUserPosts } from '../redux/actions/index'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import AddEntryScreen from './main/AddEntry'
import InformationScreen from './main/Information'
import HomeScreen from './main/Home'
import ProfileScreen from './main/Profile'
import StatisticsScreen from './main/Statistics'
import { COLOURS } from '../constants';

import firebase from 'firebase'
require('firebase/firestore')
// import { connect } from 'react-redux'

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
    
    componentDidMount() {
        // this.props.clearData();
        this.props.fetchUser();
        this.props.fetchUserPosts();
    }

    render() {
        const { currentUser } = this.props;

        // if (currentUser == undefined) {
        // return (
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <Text> currentUser is not defined</Text>
        //     </View>
        // )}

        return (
            <Tab.Navigator initialRouteName="Home" labeled={false}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={COLOURS.white} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Information" component={InformationScreen} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="information-outline" color={COLOURS.white} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Statistics" component={StatisticsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-bar" color={COLOURS.white} size={26} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={COLOURS.white} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main)
