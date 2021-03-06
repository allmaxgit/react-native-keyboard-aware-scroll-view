/* @flow */

import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native'
import KeyboardAwareMixin from './KeyboardAwareMixin'

const KeyboardAwareScrollView = React.createClass({
  propTypes: {
    ...ScrollView.propTypes,
    viewIsInsideTabBar: PropTypes.bool,
    blockContentInset: PropTypes.bool
  },
  mixins: [KeyboardAwareMixin],

  componentWillMount: function() {
    if (this.props.viewIsInsideTabBar) {
      this.setViewIsInsideTabBar(this.props.viewIsInsideTabBar)
    }
  },

  render: function () {
    return (
      <ScrollView
        ref='keyboardView'
        keyboardDismissMode='interactive'
        contentInset={this.props.blockContentInset ? {} : {bottom: this.state.keyboardSpace}}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={true}
        {...this.props}>
        {this.props.children}
      </ScrollView>
    )
  },
})

export default KeyboardAwareScrollView
