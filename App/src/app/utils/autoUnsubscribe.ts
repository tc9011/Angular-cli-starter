export function AutoUnsubscribe(blackList = []) {
  return function (constructor) {
    const original = constructor.prototype.ngOndestroy;

    constructor.prototype.ngOndestroy = function () {
      for (let prop in this) {
        const property = this[prop];
        if (!blackList.includes(prop)) {
          if (property && (typeof property.unsubscribe === 'function')) {
            property.unsubscribe();
          }
        }
      }

      original && typeof original === 'function' && original.apply(this, arguments);
    };
  }
}
