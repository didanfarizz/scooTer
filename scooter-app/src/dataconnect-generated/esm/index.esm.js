import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'scooter-app',
  location: 'us-east4'
};

export const createIssueReportRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateIssueReport', inputVars);
}
createIssueReportRef.operationName = 'CreateIssueReport';

export function createIssueReport(dcOrVars, vars) {
  return executeMutation(createIssueReportRef(dcOrVars, vars));
}

export const getScooterLocationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetScooterLocation', inputVars);
}
getScooterLocationRef.operationName = 'GetScooterLocation';

export function getScooterLocation(dcOrVars, vars) {
  return executeQuery(getScooterLocationRef(dcOrVars, vars));
}

export const endRideRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EndRide', inputVars);
}
endRideRef.operationName = 'EndRide';

export function endRide(dcOrVars, vars) {
  return executeMutation(endRideRef(dcOrVars, vars));
}

export const listAvailableScootersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAvailableScooters');
}
listAvailableScootersRef.operationName = 'ListAvailableScooters';

export function listAvailableScooters(dc) {
  return executeQuery(listAvailableScootersRef(dc));
}

