const {google} = require('googleapis');
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];

/**
 * Get a valid access token.
 */
function getAccessToken() {
    return new Promise(function (resolve, reject) {
        let key = require('../resources/service-key');
        let jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}

/**
 * Log valid access token
 */
function logToken() {
    getAccessToken()
        .then(function (accessToken) {
            console.log("Access Token: " + accessToken);
        })
        .catch(function (err) {
            console.log('error: ', err);
    });
}

logToken();
