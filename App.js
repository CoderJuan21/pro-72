import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
    return(
<AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteStoryScreen},
  Read:{screen:ReadStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==="Read"){
        return(
          <Image 
          source={require('./assets/read.png')}
          style={{width:50,height:50}}
          ></Image>
        )
      }

      else if(routeName==="Write"){
        return(
          <Image 
          source={require('./assets/write.png')}
          style={{width:50,height:50}}
          ></Image>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
