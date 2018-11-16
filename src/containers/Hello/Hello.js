import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import MiniInfoBar from 'components/MiniInfoBar/MiniInfoBar';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import config from 'config';

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})
class Hello extends Component {

  render() {

     
      const styles = require('./Hello.scss');

    return (
      <div className={styles.home}>
        <Helmet title="Hello" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
              (import data here)
              </p>
            </div>


          </div>
        </div>
      <div className="container">
      
      </div>
      </div>
    );
  }
}

export default Hello;
