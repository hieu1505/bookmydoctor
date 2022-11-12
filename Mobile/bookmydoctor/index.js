/**
 * @format
 */
 import {AppRegistry} from 'react-native';
//  import UITab from './navigation/UITab';
 import {name as appName} from './app.json'; 
//  import Clinicitem from './src/component/Clinicitem'
import Clinicitem from './src/component/Clinicitem';
import Specialistitem from './src/component/specialistitem';
import { AddMultiSchedule ,FiveStars} from './src/View';
import AppTab from './src/navigation/App'
 AppRegistry.registerComponent(appName, ()=>() =><AppTab/>)


 