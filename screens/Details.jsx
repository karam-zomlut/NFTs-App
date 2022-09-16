import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return <Text>Details</Text>;
};

export default Details;
