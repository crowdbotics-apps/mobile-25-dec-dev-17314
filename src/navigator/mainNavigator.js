import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen016233Navigator from '../features/CopyOfBlankScreen016233/navigator';
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
CopyOfBlankScreen016233: { screen: CopyOfBlankScreen016233Navigator },
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
