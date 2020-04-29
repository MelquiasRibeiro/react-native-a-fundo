import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Browser } from './styles';

export default function Repository({ route }) {
    const { repository } = route.params;
    console.tron.log(repository);

    return <Browser source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
    navigation: PropTypes.shape({
        repository: PropTypes.object,
    }).isRequired,
};

Repository.navigationOptions = ({ route }) => ({
    title: route.params.repository.name,
});
