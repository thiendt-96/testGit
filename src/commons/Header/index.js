import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IosContact from '../../../node_modules/react-ionicons/lib/IosContact';

export default class index extends Component {
  render() {
    return (
      <section className="header">
        <div className="header__title">Quản trị hệ thống</div>
        <div className="nav">
          <ul className="nav__category">
            <li className="nav__item" >
              <Link className="nav__link" to="/exam">Quản Lý</Link>
            </li>
            <li className="nav__item" >
              <Link className="nav__link" to="/user">Tài Khoản</Link>
            </li>
            <li className="nav__item" >
              <Link className="nav__link" to="/exam">Đề Thi</Link>
            </li>
            <li className="nav__item" >
              <Link className="nav__link" to="/question">Câu Hỏi</Link>
            </li>
          </ul>
          <div className="nav__user">
            <div className="nav__name">
              xin chào! <span className="nav__username">Admin</span>
            </div>
            <div className="nav__icon">
              <IosContact color="red" />
              <p className="logout">Thoát</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
