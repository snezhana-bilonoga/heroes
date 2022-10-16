function errorLogger(err, req, res, next) {
    console.error(new String(new Date()).split(' GMT')[0]);
    console.error(err);
    next(err);
}

export default errorLogger;