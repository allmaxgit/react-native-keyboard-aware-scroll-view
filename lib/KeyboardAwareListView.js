/* @flow */

import React, { PropTypes } from 'react'
import { ListView } from 'react-native'
import KeyboardAwareMixin from './KeyboardAwareMixin'

const KeyboardAwareListView = React.createClass({
  propTypes: {
    ...ListView.propTypes,
    viewIsInsideTabBar: React.PropTypes.bool,
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
      <ListView
        ref='keyboardView'
        keyboardDismissMode='interactive'
        contentInset={this.props.blockContentInset ? {} : {bottom: this.state.keyboardSpace}}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={true}
        {...this.props}
      />
    )
  },
})

export default KeyboardAwareListView
