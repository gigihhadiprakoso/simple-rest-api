const show = (code, response) => {
    return {
        error_code: code,
        error_desc: code_messages(code),
        data: response
    }
}

const code_messages = (code) => {
    error = Array()

    error[101] = 'User not authenticated';
    error[102] = 'User not allowed to update data';
    error[103] = 'Failed to change';
    error[104] = 'Delete failed';

    return error[code] === undefined ? '' : error[code] ;
}


module.exports = show;