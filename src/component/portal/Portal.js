import { Component } from 'react';
import {createPortal} from 'react-dom';

import './portal.scss';

export default class Portal extends Component {

  constructor(props) {
    super(props);
    this.portalRoot = document.querySelector('#modal-root');
    this.portalContainer = document.createElement('div');
    this.portalContainer.classList.add('modal');
    this.renderChildren = this.props.children;
  }

  componentDidMount() {
    this.portalRoot.appendChild(this.portalContainer)
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.portalContainer);
  }

  render() {
    return createPortal(this.renderChildren, this.portalContainer)
  }
}
