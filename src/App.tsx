import React, {useEffect, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {RootStack} from './navigations/RootStack';
import {themeDark, themeLight} from './style/theme';

const App = () => {
  const scheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(scheme);
  const statusBarColor = theme === 'light' ? themeLight.PRIMARY_BACKGROUND_COLOR : themeDark.PRIMARY_BACKGROUND_COLOR;

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      console.log(colorScheme);
      setTheme(colorScheme);
    });
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <StatusBar backgroundColor={statusBarColor} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <RootStack />
    </ThemeProvider>
  );
};

export default App;
