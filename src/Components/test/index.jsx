import React from 'react';
import styles from './test.css'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.test}> </div>
    );
  }
}
