
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';




export default class Button_custom extends Component {

    colors = {
        primary: {
            default: {
                background: '#BD0000',
                text: '#FFFFFF',
                border: 'none'
            },
            onTap: {
                background: '#990000',
                text: '#555555',
                border: 'none'
            },
            disable: {
                background: '#666666',
                text: '#333333',
                border: 'none'
            }
        },
        secondary: {
            default: {
                background: '#AFAFAF',
                text: '#333333',
                border: 'none'
            },
            onTap: {
                background: '#CCCCCC',
                text: '#333333',
                border: 'none'
            },
            disable: {
                background: '#666666',
                text: '#333333',
                border: 'none'
            }
        },
        tertiary: {
            default: {
                background: 'transparent',
                text: '#FFFFFF',
                border: '#CCCCCC'
            },
            onTap: {
                background: '#990000',
                text: '#FFFFFF',
                border: '#CCCCCC'
            },
            disable: {
                background: '#666666',
                text: '#333333',
                border: 'none'
            }
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            colorCategory: this.colors.primary

        };
    }

    componentWillMount() {
        switch (this.props.type) {
            case 'primary': this.setState({
                colorCategory: this.colors.primary
            });
                break;
            case 'secondary': this.setState({
                colorCategory: this.colors.secondary
            });
                break;
            case 'tertiary': this.setState({
                colorCategory: this.colors.tertiary
            });
                break;
            default: this.setState({
                colorCategory: this.colors.primary
            });
        }
    }

    _onPress() {
        this.props.onPress();
    }

    _onShowUnderlay() {
            this.setState({
                pressStatus: true
            });
    }
    _onHideUnderlay() {
            this.setState({
                pressStatus: false
            });
    }

    style_button() {
        return ({
            flex: 1,
            backgroundColor: this.state.colorCategory.default.background,
            height: 50,
        });
    }
    style_button_pressed() {
        return ({
            flex: 1,
            backgroundColor: this.state.colorCategory.default.background,
            height: 50,
        });
    }
    style_button_text() {
        return ({
            color: this.state.colorCategory.default.text,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10
        });
    }
    style_button_pressed_text() {
        return ({
            color: this.state.colorCategory.onTap.text,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10
        });
    }
    style_button_disable() {
        return ({
            flex: 1,
            backgroundColor: this.state.colorCategory.disable.background,
            height: 50,
        });
    }
    style_button_disable_text() {
        return ({
            color: this.state.colorCategory.disable.text,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={1}
                    style={this.props.disable ? this.style_button_disable() : (this.state.pressStatus ? this.style_button_pressed() : this.style_button())}
                    onPress={ !(this.props.disable) ? this._onPress.bind(this) : null}
                    onShowUnderlay={this._onShowUnderlay.bind(this)}
                    onHideUnderlay={this._onHideUnderlay.bind(this)}
                    underlayColor={this.state.colorCategory.onTap.background}
                >
                    <Text style={this.props.disable ? this.style_button_disable_text() : (this.state.pressStatus ? this.style_button_pressed_text() : this.style_button_text())}>{this.props.text}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    }
});


