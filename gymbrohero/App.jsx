import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { CreateWorkoutScreen } from './screens/CreateWorkoutScreen';
import { Navbar } from './components/Navbar';
import { Topbar } from './components/Navbar';
import { StatsScreen } from './screens/StatsScreen';
import { RunningWorkout } from './screens/RunningWorkout';

const Stack = createNativeStackNavigator();

export default function App() {
<<<<<<< Updated upstream
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Main"
						component={Navbar}
						options={({ navigation }) => ({
							header: () => <Topbar navigation={navigation} title="Gymbro Hero" />,
						})}
					/>
					<Stack.Screen name="Profile" component={ProfileScreen} />
					<Stack.Screen name="Settings" component={SettingsScreen} />
					<Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
					<Stack.Screen name="Stats" component={StatsScreen} />
					<Stack.Screen name="Run Workout" component={RunningWorkout} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
=======

  const [userId, setUserId] = useState(null);

  const handleLogin = (id) => {
    setUserId(id);
  };

  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
            name="LandingPage"
            options={{ headerShown: false }}
          >
            {props => <LandingPage {...props} handleLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen
            name="Main"
            component={Navbar}
            options={({ navigation }) => ({
              header: () => (
                <Topbar navigation={navigation} title="Gymbro Hero" />
              ),
            })}
          />
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Settings" >{props =><SettingsScreen {...props} userId={userId}/>}</Stack.Screen>
          <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
          <Stack.Screen name="Run Workout" component={RunningWorkout} />
          <Stack.Screen name="StoreFront" component={StoreFront} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
>>>>>>> Stashed changes
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
