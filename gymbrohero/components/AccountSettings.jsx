import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import { Separator } from '../screens/SettingsScreen';

export const AccountSettings = (props) => {
  console.log(props)
  const [pushIsOn, setPushIsOn] = useState(false);
  const [AreYouSureIsOn, setAreYouSureIsOn] = useState(false);
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('')
  console.log(props.navigation.getId, '<<props user id')

  const togglePushSwitch = () => {
    setPushIsOn((currentState) => !currentState);
    //need to add push functionlity here
  };
  const toggleSureSwitch = () => {
    setAreYouSureIsOn((currentState) => !currentState);
  };
  const seeDeleteOptions = () => {
    setViewDelete((currentState) => !currentState);
  };
  const handleDeleteSubmit = () => {
    if(AreYouSureIsOn === true) {
      setDeleteMessage('profile is being deleted...')
      //get user state 
      //add delete request here!  
      props.navigation.navigate("LandingPage");
    }
    else{
      setDeleteMessage('please check are you sure!')
    }

  };

  return (
    <View>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingText}>Notification Settings</Text>
      </View>
      <View style={styles.swipeSection}>
        <Text style={styles.switchText}>Enable Push Notifications? </Text>
        <Switch
          trackColor={{ false: 'grey', true: '#06ac68' }}
          onValueChange={togglePushSwitch}
          value={pushIsOn}
          thumbColor={pushIsOn ? '#14a174' : '#f4f3f4'}
        />
      </View>
      <Separator />
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingText}>Your data</Text>
      </View>
      <View>
        <Pressable onPress={seeDeleteOptions} style={styles.button}>
          <Text>I want to delete my profile </Text>
        </Pressable>

      </View>
      {viewDelete ? (
            <View>
              <View style={styles.swipeSection}>
                <Text style={styles.switchText}>Are You Sure?</Text>
                <Switch
                  trackColor={{ false: 'grey', true: '#06ac68' }}
                  onValueChange={toggleSureSwitch}
                  value={AreYouSureIsOn}
                  thumbColor={AreYouSureIsOn ? '#14a174' : '#f4f3f4'}
                />
              </View>
              <Text>{deleteMessage}</Text>
              <Pressable style={styles.button} onPress={handleDeleteSubmit}>
                <Text>DELETE</Text>
              </Pressable>
            </View>
      ) : (
        <></>
      )}
      <Separator />
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionHeadingText}>Terms and conditions</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          obcaecati voluptates! Magni possimus adipisci consequuntur officia
          officiis, cupiditate optio sequi iure nostrum ducimus perspiciatis cum
          aperiam quisquam hic voluptate id.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeSection: {
    flexDirection: 'row',
    gap: 10,
  },
  switchText: {
    padding: 20,
  },
  sectionHeading: {},
  sectionHeadingText: {
    textTransform: 'uppercase',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'orangered',
  },
});