import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript';
import {RootStackParamList} from './RootStack';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type SignupScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type VerificationScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Verification'
>;

export type TabBarNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'tabNavigator'
>;
