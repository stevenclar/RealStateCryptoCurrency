import React from 'react';
import SafeAreaTemplate from '../../components/templates/SafeAreaTemplate';
import WelcomeTemplate from '../../components/templates/WelcomeTemplate';
import {NavigationProps} from '../../utils/navigation/navigationProps';

const WelcomeScreen = ({navigation}: NavigationProps<'Welcome'>) => {
  return (
    <SafeAreaTemplate>
      <WelcomeTemplate onEmail={() => navigation.replace('Home')} />
    </SafeAreaTemplate>
  );
};

export default WelcomeScreen;
