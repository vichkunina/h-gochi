import React, { Component } from 'react';
import './index.css';
class Suggest extends Component {
  render() {
    return (
        <section className="suggest toolbar-item">
            Здесь будут всякие подсказки пользователю,
            много подсказок, возможно, с длинным
            текстом.
        </section>
    );
  }
}

export default Suggest;
