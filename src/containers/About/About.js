import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import MiniInfoBar from 'components/MiniInfoBar/MiniInfoBar';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import config from 'config';

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})
class About extends Component {

  render() {

      const logoImage = require('./mknome2.png');
      const styles = require('./About.scss');

    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage} alt="knome" />
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

          </div>
        </div>
      <div className="container">
        <h1>What is metroKnome...</h1>
        <Helmet title="About" />

        <p>
        metroKnome was created for Musical Artists, Visionaries, and Hobbyists of varying skill levels. At it's core, it is a tool for users to track and monitor productivity in their musical creation journey. For the amateur, it may be difficult, frustrating, and disheartening when learning a new instrument or working with your first DAW. For the expeienced, "Through the Fire and Flames" (DragonForce) will take some practice no matter what your natural guitar talent level is. For music to be great, it takes time and practice. When using metroKnome, productivity is tracked, analyzed and delivered to the user through data and visulizations to show their progress. Users can set goals and reminders to help them stay on track for their tracks. Whether you are just picking up an instrument or curious how much time your band is actually putting in work, metroKnome will tick for you.
        </p>
      </div>
      </div>
    );
  }
}

export default About;
