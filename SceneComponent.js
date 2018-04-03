// const React = require('react');
// const ReactNative = require('react-native');
// const {Component, } = React;
// const {View, StyleSheet, } = ReactNative;
import React, {Component, } from 'react';
import {
    View, StyleSheet,
} from 'react-native';

// const StaticContainer = require('react-static-container');
import StaticContainer from 'react-static-container';

const SceneComponent = (Props) => {
    const {shouldUpdated, ...props, } = Props;
    return <View {...props}>
        <StaticContainer shouldUpdate={shouldUpdated}>
            {props.children}
        </StaticContainer>
    </View>;
};

export default SceneComponent;
