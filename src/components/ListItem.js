/**
 * Created by Luteh on 12/06/2017.
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

export default ListItem;