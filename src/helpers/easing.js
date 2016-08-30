export const easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;

  if (t < 1) {
    return c / 2 * t * t + b
  }

  t--;

  return -c / 2 * (t * (t - 2) - 1) + b;
};

export const easeInCubic = function(t, b, c, d) {
  var tc = (t /= d) * t * t;
  return b + c * (tc);
};

export const easeInOutQuint = function(t, b, c, d) {
  var ts = (t/=d) * t,
  tc = ts * t;

  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};
