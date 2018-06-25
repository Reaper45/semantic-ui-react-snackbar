import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';

import css from './snackbar.css';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: false }), 3000);
  }

  render() {
    const { error, info, success, children } = this.props;
    const { visible } = this.state;
    return visible ? (
      <Message info={info} error={error} success={success} className={css.message} >
        <Icon name={success ? "check circle" : error ? "times circle" : info ? "info circle" : null} />
        <b>{success ? "Hurray! " : error ? "Oups! " : info ? "Heads Up! " : null}</b>
        <span>{children}</span>
        <Icon name="times" style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.setState({ visible: false })} />
      </Message>
    ) : null;
  }
}

index.defaultProps = {
  error: false,
  info: false,
  success: false,
};

export default index;
