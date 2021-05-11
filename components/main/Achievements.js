import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Slider, ListItem } from 'react-native-elements'
import firebase from '../../constants/firebase';
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Achievements() {
    return (
    <ScrollView>

        <View style={styles.header}>
        <MaterialCommunityIcons name="trophy" color={COLOURS.primary} style={styles.headerIcon} size={60} />
        <Text style={styles.headerText}>Achievements</Text>
        </View>
    </ScrollView>
)
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: COLOURS.white,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
      fontSize: 20,
      color: COLOURS.primary
    },
})