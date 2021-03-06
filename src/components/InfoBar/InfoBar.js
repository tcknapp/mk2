import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';

@connect(
  state => ({ info: state.info.data }),
  { load }
)
class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.number
    }),
    load: PropTypes.func.isRequired
  };

  static defaultProps = {
    info: null
  };

  render() {
    const { info, load } = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');
    return (
      <div className={`${styles.infoBar} well`}>
        <div className="card">
          <span className={styles.time}>{info && new Date(info.time).toString()}</span>
          <button type="button" className="btn btn-success" onClick={load}>
            Start Session
          </button>
        </div>
      </div>

    );
  }
}

export default InfoBar;
