import React, { Component } from 'react';
import intl from 'react-intl-universal';

const locales = {
  'en-US': require('../locales/en-US.json'),
  'zh-CN': require('../locales/zh-CN.json')
};

export default function withIntl(HocComponent) {
  return class extends Component {
    state = { initDone: false };

    componentDidMount() {
      this.loadLocales();
    }

    loadLocales() {
      let currentLocale = intl.determineLocale({
        urlLocaleKey: "lang",
        cookieLocaleKey: "lang"
      });

      intl
        .init({
          currentLocale,
          locales
        })
        .then(() => {
          this.setState({ initDone: true });
        });
    }

    render() {
      return (
        <>
          {this.state.initDone && <HocComponent />}
        </>
      );
    }
  };
}
