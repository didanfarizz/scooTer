const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'scooter-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createIssueReportRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateIssueReport', inputVars);
}
createIssueReportRef.operationName = 'CreateIssueReport';
exports.createIssueReportRef = createIssueReportRef;

exports.createIssueReport = function createIssueReport(dcOrVars, vars) {
  return executeMutation(createIssueReportRef(dcOrVars, vars));
};

const getScooterLocationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetScooterLocation', inputVars);
}
getScooterLocationRef.operationName = 'GetScooterLocation';
exports.getScooterLocationRef = getScooterLocationRef;

exports.getScooterLocation = function getScooterLocation(dcOrVars, vars) {
  return executeQuery(getScooterLocationRef(dcOrVars, vars));
};

const endRideRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EndRide', inputVars);
}
endRideRef.operationName = 'EndRide';
exports.endRideRef = endRideRef;

exports.endRide = function endRide(dcOrVars, vars) {
  return executeMutation(endRideRef(dcOrVars, vars));
};

const listAvailableScootersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAvailableScooters');
}
listAvailableScootersRef.operationName = 'ListAvailableScooters';
exports.listAvailableScootersRef = listAvailableScootersRef;

exports.listAvailableScooters = function listAvailableScooters(dc) {
  return executeQuery(listAvailableScootersRef(dc));
};
