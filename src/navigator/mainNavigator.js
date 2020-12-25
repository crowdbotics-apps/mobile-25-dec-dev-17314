import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen016219Navigator from '../features/CopyOfBlankScreen016219/navigator';
import CopyOfBlankScreen016218Navigator from '../features/CopyOfBlankScreen016218/navigator';
import CopyOfBlankScreen016217Navigator from '../features/CopyOfBlankScreen016217/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen016219: { screen: CopyOfBlankScreen016219Navigator },
CopyOfBlankScreen016218: { screen: CopyOfBlankScreen016218Navigator },
CopyOfBlankScreen016217: { screen: CopyOfBlankScreen016217Navigator },

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
