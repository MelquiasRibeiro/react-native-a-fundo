/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
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

    state = {
        stars: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const { route } = this.props;

        const { user } = route.params;

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data, loading: false });
    }

    render() {
        const { stars, loading } = this.state;
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
                            keyExtractor={(star) => String(star.id)}
                            renderItem={({ item }) => (
                                <Starred>
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
