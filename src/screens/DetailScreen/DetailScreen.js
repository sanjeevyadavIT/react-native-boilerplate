import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from '../../common';
import { translate } from '../../i18n';

const DetailScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
      <Text bold type="heading">{translate('detailScreen.heading')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;
