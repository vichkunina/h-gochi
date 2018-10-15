import React, { Component } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import './index.css';

const b = b_.with('suggest');

export default class Suggest extends Component {
  render() {
    const { mixClass } = this.props
    return (
        <section className={mix(b(), mixClass)}>
            Здесь будут всякие подсказки пользователю,
            много подсказок, возможно, с длинным
            текстом.
        </section>
    );
  }
}
