import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ViewEntry({ navigation }) {

   const exercisepos = navigation.getParam('exercisepos');
   const foodpos = navigation.getParam('foodpos')
   const workpos = navigation.getParam('workpos')
   const relationshipspos = navigation.getParam('relatioshipspos');
   const hobbiespos = navigation.getParam('hobbiespos');
   const hobbiesneg  = navigation.getParam('hobbiesneg');
   const relationshipsneg  = navigation.getParam('relationshipsneg');
   const workneg = navigation.getParam('workneg');
   const foodneg = navigation.getParam('foodneg');
   const exerciseneg = navigation.getParam('exerciseneg');
   const posvalue = exercisepos + foodpos + workpos + relationshipspos + hobbiespos;
   const negvalue = exerciseneg + foodneg + workneg + relationshipsneg + hobbiesneg;
   const textInputValue  = navigation.getParam('textInputValue'); 
  
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
            <Text>Icon</Text>
            </View>
            <View style={styles.centerContainer}>
            <Slider
            style={{ flex: 1, width: "100%", alignItems: 'stretch', justifyContent: 'center' }}
            value={exercisepos}
            maximumValue={exercisepos + exerciseneg}
            minimumValue={exerciseneg}
            step={1}
            disabled='true'
            trackStyle={{ height: 20 }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: COLOURS.primary }}
            minimumTrackTintColor={ COLOURS.primary }
            maximumTrackTintColor={ COLOURS.lightGray}
            else
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.valueText}>{exercisepos}:{exerciseneg}</Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});