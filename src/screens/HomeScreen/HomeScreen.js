import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTrendingRepo } from '../../store/actions';
import { Text, Button } from '../../common';
import { NAVIGATION_TO_DETAIL_SCREEN } from '../../navigation/routes';
import { translate } from '../../i18n';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // componentDidMount
    dispatch(getTrendingRepo());
  }, []);

  return (
    <View>
      <Text type="heading">{translate('homeScreen.message')}</Text>
      <Text type="subheading">{translate('homeScreen.message')}</Text>
      <Text type="body">{translate('homeScreen.message')}</Text>
      <Text bold type="heading">{translate('homeScreen.message')}</Text>
      <Text bold type="subheading">{translate('homeScreen.message')}</Text>
      <Text bold type="body">{translate('homeScreen.message')}</Text>
      <Button title="Detail Screen" onPress={() => navigation.navigate(NAVIGATION_TO_DETAIL_SCREEN)} />
    </View>
  );
};

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
