// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1142?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported. Trace: bd5c824c-fdfd-40f5-9438-f28affc6f988 Time: 2016-07-01T12:06:09.0094557-07:00\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '200',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bd5c824c-fdfd-40f5-9438-f28affc6f988',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '83f83591-eb24-4097-842b-075d5b36a215',
  'x-ms-routing-request-id': 'WESTUS:20160701T190609Z:83f83591-eb24-4097-842b-075d5b36a215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:06:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1142?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported. Trace: bd5c824c-fdfd-40f5-9438-f28affc6f988 Time: 2016-07-01T12:06:09.0094557-07:00\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '200',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bd5c824c-fdfd-40f5-9438-f28affc6f988',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '83f83591-eb24-4097-842b-075d5b36a215',
  'x-ms-routing-request-id': 'WESTUS:20160701T190609Z:83f83591-eb24-4097-842b-075d5b36a215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:06:08 GMT',
  connection: 'close' });
 return result; }]];