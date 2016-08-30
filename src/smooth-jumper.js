import raf from 'raf';
import {easeInCubic, easeInOutQuint, easeInOutQuad} from './helpers/easing';

const isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const getContainerStyles = function(container) {
  var top = isNumeric(parseFloat(window.getComputedStyle(container).top)) ? parseFloat(window.getComputedStyle(container).top) : 0;
  var paddingTop = isNumeric(parseFloat(window.getComputedStyle(container).paddingTop)) ? parseFloat(window.getComputedStyle(container).paddingTop) : 0;

  return top + paddingTop;
}

const getEasingType = function(type) {
  const types = [
    'ease-in-out',
    'ease-in-cubic',
    'in-out-quint'
  ];

  const index = types.indexOf(types);

  // Default type
  let easingType = 'ease-in-out';

  if (index > -1) {
    easingType = types[index];
  }

  return easingType;
}

const calculateEasingValue = function(method, currentTime, start, change, duration) {
  var val;

  if (method === 'ease-in-cubic') {
    val = easeInCubic(currentTime, start, change, duration);
  } else if (method === 'in-out-quint') {
    val = easeInOutQuint(currentTime, start, change, duration);
  } else {
    val = easeInOutQuad(currentTime, start, change, duration);
  }

  return val;
}

const smoothJumper = function(container, to, duration = 500, options = {}) {
  // Setup the initial calculation values
  let currentTime = 0;
  const increment = 20;

  const start = container.scrollTop;
  const offset = options.hasOwnProperty('offset') ? parseFloat(options.offset) : 0;
  const easing = options.hasOwnProperty('easing') ? getEasingType(options.easing) : 'ease-in-out';

  let target = to.getBoundingClientRect().top + container.scrollTop;

  // Account for external styles and offset
  target -= (getContainerStyles(container) + offset);

  var change = target - start;

  var smoothScroll = function() {
    currentTime += increment;

    // Update the scroll position
    container.scrollTop = calculateEasingValue(easing, currentTime, start, change, duration);

    // Execute the animation if duration hasn't passed
    if (currentTime < duration) {
      raf(smoothScroll);
    }
  };

  smoothScroll();
}

module.exports = smoothJumper;
