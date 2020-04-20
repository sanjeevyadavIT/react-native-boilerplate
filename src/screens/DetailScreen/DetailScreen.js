import React from 'react';
import { StyleSheet } from 'react-native';
import { GenericTemplate, Text } from '../../common';
import { translate } from '../../i18n';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <GenericTemplate
      isScrollable={false}
    >
      <Text>{JSON.stringify(item)}</Text>
    </GenericTemplate>
  );
};

const styles = StyleSheet.create({});

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;
