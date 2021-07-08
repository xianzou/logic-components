export const isFunction = fn => {
    return Object.prototype.toString.call(fn) === '[object Function]';
};

export const isArray = arr => {
    return Object.prototype.toString.call(arr) === '[object Array]';
};
