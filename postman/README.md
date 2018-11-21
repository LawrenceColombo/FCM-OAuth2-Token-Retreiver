# Postman Collection

## Usage

To use the postman collection, there are 3 postman variables that need to be set:
- `project_id`: The project id specific to your firebase project
- `bearer_token`: This is the OAuth2 access token retrieved from one of the other programs in this project
- `token`: The device token you wish to send the push notification to

Once these variables have been set, you should be able to use the existing `POST` request in the collection to post your notification
