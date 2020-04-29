/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
    Fav,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ route }) => ({
        title: route.routes.params.user.name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        loading: false,
        loading: true,
        refreshing: false,
    };

    async componentDidMount() {
        this.load();
        this.setState({ loading: true });
    }

    load = async (page = 1) => {
        const { stars } = this.state;

        const { route } = this.props;

        const { user } = route.params;

        const response = await api.get(`/users/${user.login}/starred`, {
            params: { page },
        });

        this.setState({
            stars: page >= 2 ? [...stars, ...response.data] : response.data,
            page,
            loading: false,
            refreshing: false,
        });
    };

    loadMore = () => {
        const { page } = this.state;

        const nextPage = page + 1;

        this.load(nextPage);
    };

    refreshList = () => {
        this.setState({ refreshing: true, stars: [] }, this.load);
    };

    handleNavigate = (repository) => {
        const { navigation } = this.props;

        navigation.navigate('Repository', { repository });
    };

    render() {
        const { stars, loading, refreshing } = this.state;
        const { route } = this.props;
        const { user } = route.params;

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>
                {loading ? (
                    <ActivityIndicator color="#333" />
                ) : (
                    <>
                        <Fav>Repositorios favoritos:</Fav>
                        <Stars
                            data={stars}
                            onRefresh={this.refreshList}
                            refreshing={refreshing}
                            onEndReachedThreshold={0.2}
                            onEndReached={this.loadMore}
                            keyExtractor={(star) => String(star.id)}
                            renderItem={({ item }) => (
                                <Starred
                                    onPress={() => this.handleNavigate(item)}
                                >
                                    <OwnerAvatar
                                        source={{ uri: item.owner.avatar_url }}
                                    />
                                    <Info>
                                        <Title>{item.name} </Title>
                                        <Author>{item.owner.login} </Author>
                                    </Info>
                                </Starred>
                            )}
                        />
                    </>
                )}
            </Container>
        );
    }
}
