import {WebView} from 'react-native-webview';
import React, {Component} from 'react';

class WebViewCom extends Component {
  render() {
    return <WebView source={{uri: `${this.props.route.params.url}`}} />;
  }
}

export default WebViewCom;
