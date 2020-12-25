import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen416313Navigator from '../features/BlankScreen416313/navigator';
import BlankScreen016292Navigator from '../features/BlankScreen016292/navigator';
import CopyOfBlankScreen016291Navigator from '../features/CopyOfBlankScreen016291/navigator';
import CopyOfCopyOfBlankScreen016290Navigator from '../features/CopyOfCopyOfBlankScreen016290/navigator';
import CopyOfCopyOfCopyOfBlankScreen016289Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen016289/navigator';
import BlankScreen616265Navigator from '../features/BlankScreen616265/navigator';
import CopyOfCopyOfCopyOfCopyOfBlankScreen116263Navigator from '../features/CopyOfCopyOfCopyOfCopyOfBlankScreen116263/navigator';
import CopyOfCopyOfCopyOfBlankScreen116262Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen116262/navigator';
import CopyOfCopyOfBlankScreen116261Navigator from '../features/CopyOfCopyOfBlankScreen116261/navigator';
import CopyOfBlankScreen116260Navigator from '../features/CopyOfBlankScreen116260/navigator';
import CopyOfBlankScreen116257Navigator from '../features/CopyOfBlankScreen116257/navigator';
import BlankScreen116256Navigator from '../features/BlankScreen116256/navigator';
import BlankScreen116254Navigator from '../features/BlankScreen116254/navigator';
import BlankScreen016251Navigator from '../features/BlankScreen016251/navigator';
import BlankScreen016248Navigator from '../features/BlankScreen016248/navigator';
import CopyOfBlankScreen016247Navigator from '../features/CopyOfBlankScreen016247/navigator';
import CopyOfCopyOfBlankScreen016246Navigator from '../features/CopyOfCopyOfBlankScreen016246/navigator';
import BlankScreen016244Navigator from '../features/BlankScreen016244/navigator';
import CopyOfBlankScreen016243Navigator from '../features/CopyOfBlankScreen016243/navigator';
import CopyOfCopyOfBlankScreen016242Navigator from '../features/CopyOfCopyOfBlankScreen016242/navigator';
import CopyOfCopyOfCopyOfBlankScreen016241Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen016241/navigator';
import BlankScreen016240Navigator from '../features/BlankScreen016240/navigator';
import CopyOfBlankScreen016239Navigator from '../features/CopyOfBlankScreen016239/navigator';
import CopyOfCopyOfCopyOfBlankScreen016237Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen016237/navigator';
import CopyOfCopyOfCopyOfBlankScreen016236Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen016236/navigator';
import CopyOfCopyOfBlankScreen016235Navigator from '../features/CopyOfCopyOfBlankScreen016235/navigator';
import BlankScreen016232Navigator from '../features/BlankScreen016232/navigator';
import BlankScreen016231Navigator from '../features/BlankScreen016231/navigator';
import CopyOfBlankScreen016230Navigator from '../features/CopyOfBlankScreen016230/navigator';
import CopyOfBlankScreen016229Navigator from '../features/CopyOfBlankScreen016229/navigator';
import CopyOfBlankScreen016226Navigator from '../features/CopyOfBlankScreen016226/navigator';
import CopyOfBlankScreen016225Navigator from '../features/CopyOfBlankScreen016225/navigator';
import CopyOfBlankScreen016223Navigator from '../features/CopyOfBlankScreen016223/navigator';
import CopyOfBlankScreen016222Navigator from '../features/CopyOfBlankScreen016222/navigator';
import BlankScreen016221Navigator from '../features/BlankScreen016221/navigator';
import CopyOfBlankScreen016220Navigator from '../features/CopyOfBlankScreen016220/navigator';
import CopyOfBlankScreen016219Navigator from '../features/CopyOfBlankScreen016219/navigator';
import CopyOfBlankScreen016218Navigator from '../features/CopyOfBlankScreen016218/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen416313: { screen: BlankScreen416313Navigator },
BlankScreen016292: { screen: BlankScreen016292Navigator },
CopyOfBlankScreen016291: { screen: CopyOfBlankScreen016291Navigator },
CopyOfCopyOfBlankScreen016290: { screen: CopyOfCopyOfBlankScreen016290Navigator },
CopyOfCopyOfCopyOfBlankScreen016289: { screen: CopyOfCopyOfCopyOfBlankScreen016289Navigator },
BlankScreen616265: { screen: BlankScreen616265Navigator },
CopyOfCopyOfCopyOfCopyOfBlankScreen116263: { screen: CopyOfCopyOfCopyOfCopyOfBlankScreen116263Navigator },
CopyOfCopyOfCopyOfBlankScreen116262: { screen: CopyOfCopyOfCopyOfBlankScreen116262Navigator },
CopyOfCopyOfBlankScreen116261: { screen: CopyOfCopyOfBlankScreen116261Navigator },
CopyOfBlankScreen116260: { screen: CopyOfBlankScreen116260Navigator },
CopyOfBlankScreen116257: { screen: CopyOfBlankScreen116257Navigator },
BlankScreen116256: { screen: BlankScreen116256Navigator },
BlankScreen116254: { screen: BlankScreen116254Navigator },
BlankScreen016251: { screen: BlankScreen016251Navigator },
BlankScreen016248: { screen: BlankScreen016248Navigator },
CopyOfBlankScreen016247: { screen: CopyOfBlankScreen016247Navigator },
CopyOfCopyOfBlankScreen016246: { screen: CopyOfCopyOfBlankScreen016246Navigator },
BlankScreen016244: { screen: BlankScreen016244Navigator },
CopyOfBlankScreen016243: { screen: CopyOfBlankScreen016243Navigator },
CopyOfCopyOfBlankScreen016242: { screen: CopyOfCopyOfBlankScreen016242Navigator },
CopyOfCopyOfCopyOfBlankScreen016241: { screen: CopyOfCopyOfCopyOfBlankScreen016241Navigator },
BlankScreen016240: { screen: BlankScreen016240Navigator },
CopyOfBlankScreen016239: { screen: CopyOfBlankScreen016239Navigator },
CopyOfCopyOfCopyOfBlankScreen016237: { screen: CopyOfCopyOfCopyOfBlankScreen016237Navigator },
CopyOfCopyOfCopyOfBlankScreen016236: { screen: CopyOfCopyOfCopyOfBlankScreen016236Navigator },
CopyOfCopyOfBlankScreen016235: { screen: CopyOfCopyOfBlankScreen016235Navigator },
BlankScreen016232: { screen: BlankScreen016232Navigator },
BlankScreen016231: { screen: BlankScreen016231Navigator },
CopyOfBlankScreen016230: { screen: CopyOfBlankScreen016230Navigator },
CopyOfBlankScreen016229: { screen: CopyOfBlankScreen016229Navigator },
CopyOfBlankScreen016226: { screen: CopyOfBlankScreen016226Navigator },
CopyOfBlankScreen016225: { screen: CopyOfBlankScreen016225Navigator },
CopyOfBlankScreen016223: { screen: CopyOfBlankScreen016223Navigator },
CopyOfBlankScreen016222: { screen: CopyOfBlankScreen016222Navigator },
BlankScreen016221: { screen: BlankScreen016221Navigator },
CopyOfBlankScreen016220: { screen: CopyOfBlankScreen016220Navigator },
CopyOfBlankScreen016219: { screen: CopyOfBlankScreen016219Navigator },
CopyOfBlankScreen016218: { screen: CopyOfBlankScreen016218Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
