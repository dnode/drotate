'use strict';

module.exports = function* (array, index) {
  index = index || 0;
  for (;;) {
    if (index === array.length) {
      index = 0;
    }
    yield array[index++];
  }
};
