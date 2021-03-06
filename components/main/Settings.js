import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Settings() {
    return (
    <ScrollView>

        <View style={styles.header}>
        <MaterialCommunityIcons name="cog-outline" color={COLOURS.primary} style={styles.headerIcon} size={60} />
        <Text style={styles.headerText}>Settings</Text>
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