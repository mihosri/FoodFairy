
/**
 * @author Sri
 * @desc Only invoked incase of undefined routes 
 */
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}


/**
 * @author Sri 
 * @desc invoked when error encountered in handling DB requests
 */
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CasrError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        'message': message,
        'stack':  process.env.NODE_ENV === production ? null : err.stack
    });
}

export {notFound, errorHandler};