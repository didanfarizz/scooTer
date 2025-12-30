import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateIssueReportData {
  issueReport_insert: IssueReport_Key;
}

export interface CreateIssueReportVariables {
  description: string;
  issueType: string;
  scooterId: UUIDString;
}

export interface EndRideData {
  ride_update?: Ride_Key | null;
}

export interface EndRideVariables {
  rideId: UUIDString;
  endLatitude: number;
  endLongitude: number;
}

export interface GetScooterLocationData {
  scooter?: {
    currentLatitude: number;
    currentLongitude: number;
  };
}

export interface GetScooterLocationVariables {
  scooterId: UUIDString;
}

export interface IssueReport_Key {
  id: UUIDString;
  __typename?: 'IssueReport_Key';
}

export interface ListAvailableScootersData {
  scooters: ({
    id: UUIDString;
    scooterID: string;
    currentLatitude: number;
    currentLongitude: number;
    batteryLevel: number;
  } & Scooter_Key)[];
}

export interface ParkingZone_Key {
  id: UUIDString;
  __typename?: 'ParkingZone_Key';
}

export interface Ride_Key {
  id: UUIDString;
  __typename?: 'Ride_Key';
}

export interface Scooter_Key {
  id: UUIDString;
  __typename?: 'Scooter_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateIssueReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateIssueReportVariables): MutationRef<CreateIssueReportData, CreateIssueReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateIssueReportVariables): MutationRef<CreateIssueReportData, CreateIssueReportVariables>;
  operationName: string;
}
export const createIssueReportRef: CreateIssueReportRef;

export function createIssueReport(vars: CreateIssueReportVariables): MutationPromise<CreateIssueReportData, CreateIssueReportVariables>;
export function createIssueReport(dc: DataConnect, vars: CreateIssueReportVariables): MutationPromise<CreateIssueReportData, CreateIssueReportVariables>;

interface GetScooterLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetScooterLocationVariables): QueryRef<GetScooterLocationData, GetScooterLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetScooterLocationVariables): QueryRef<GetScooterLocationData, GetScooterLocationVariables>;
  operationName: string;
}
export const getScooterLocationRef: GetScooterLocationRef;

export function getScooterLocation(vars: GetScooterLocationVariables): QueryPromise<GetScooterLocationData, GetScooterLocationVariables>;
export function getScooterLocation(dc: DataConnect, vars: GetScooterLocationVariables): QueryPromise<GetScooterLocationData, GetScooterLocationVariables>;

interface EndRideRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EndRideVariables): MutationRef<EndRideData, EndRideVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EndRideVariables): MutationRef<EndRideData, EndRideVariables>;
  operationName: string;
}
export const endRideRef: EndRideRef;

export function endRide(vars: EndRideVariables): MutationPromise<EndRideData, EndRideVariables>;
export function endRide(dc: DataConnect, vars: EndRideVariables): MutationPromise<EndRideData, EndRideVariables>;

interface ListAvailableScootersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableScootersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAvailableScootersData, undefined>;
  operationName: string;
}
export const listAvailableScootersRef: ListAvailableScootersRef;

export function listAvailableScooters(): QueryPromise<ListAvailableScootersData, undefined>;
export function listAvailableScooters(dc: DataConnect): QueryPromise<ListAvailableScootersData, undefined>;

