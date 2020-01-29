const userReference = _getReqEnv('USER_REFERENCE');
const baseUrl = _getReqEnv('BASE_URL');
const clientId = _getReqEnv('CLIENT_ID');
const clientSecret = _getReqEnv('CLIENT_SECRET');
const listenHost = _getReqEnv('LISTEN_HOST');
const listenPort = _getReqEnv('LISTEN_PORT');
const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};
const showCredentials = process.env['SHOW_CREDENTIALS'] && process.env['SHOW_CREDENTIALS'] === 'true' || false;

/**
 * PUBLIC MODULE EXPORTS
 */
module.exports = {
    userReference,
    baseUrl,
    clientId,
    clientSecret,
    listenHost,
    listenPort,
    defaultHeaders,
    showCredentials,
};

/**
 *
 *
 * @param variable
 * @private
 */
function _reportMissingAndExit(variable) {
    console.log(`Missing ${variable} environment variable`);
    process.exit(1);
}

/**
 *
 * @param variable
 * @return {string | void}
 * @private
 */
function _getReqEnv(variable) {
    return process.env[variable] || _reportMissingAndExit(variable);
}
