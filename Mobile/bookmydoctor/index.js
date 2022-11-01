/**
 * @format
 */
 import {AppRegistry} from 'react-native';
 import {Appointmentitem,Login,Dangky,Wellcome,User,ChangePassword,Forgotpassword,Home,DoctorList,Tabbar,TabSpecial,TabDoctor, TabClinic,Appointmentbyuser, Doctorbyid} from './src/View'
//  import UITab from './navigation/UITab';
 import {name as appName} from './app.json'; 
//  import Clinicitem from './src/component/Clinicitem'
import Clinicitem from './src/component/Clinicitem';
import Specialistitem from './src/component/specialistitem';
import AppTab from './src/navigation/App'
 AppRegistry.registerComponent(appName, ()=>() =><AppTab/>)


 