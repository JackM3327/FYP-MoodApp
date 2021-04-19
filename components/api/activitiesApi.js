import firebase from 'react-native-firebase'

export function updateActivities(activities, updateComplete) {
    activities.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log("Updating activities in firebase");
  
    firebase.firestore()
      .collection('activites')
      .doc(activity.id).set(activity)
      .then(() => updateComplete(ectivity))
      .catch((error) => console.log(error));
  }

export async function getActivities(activitiesRetreived) {

    var activitiesList = [];

    var snapshot = await firebase.firestore()
        .collection('Activities')
        .orderBy('createdAt')
        .get()

    snapshot.forEach((doc) => {
        const activityItem = doc.data();
        foodItem.id = doc.id;
        foodList.push(activityItem);
    });

    foodsRetreived(activityList);
  }