'use strict';

const styles = {
  overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 1000,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      MozTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      MsTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      OTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
    };
  },

  menuWrap(isOpen, width, right) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      zIndex: 1100,
      width,
      height: '100%',
      MozTransform: isOpen
        ? ''
        : right
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen
        ? ''
        : right
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen
        ? ''
        : right
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen
        ? ''
        : right
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)',
      transform: isOpen
        ? ''
        : right
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.10s ease 0s'
    };
  },

  menu() {
    return {
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'auto'
    };
  },

  itemList() {
    return {
      height: '100%'
    };
  },

  item() {
    return {
      display: 'block'
    };
  }
};

export default styles;
