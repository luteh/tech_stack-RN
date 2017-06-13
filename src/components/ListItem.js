/**
 * Created by Luteh on 12/06/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    UIManager
} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescriptions() {
        const {library, expanded} = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescriptions()}
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps, actions)(ListItem);