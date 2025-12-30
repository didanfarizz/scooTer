import { CreateIssueReportData, CreateIssueReportVariables, GetScooterLocationData, GetScooterLocationVariables, EndRideData, EndRideVariables, ListAvailableScootersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateIssueReport(options?: useDataConnectMutationOptions<CreateIssueReportData, FirebaseError, CreateIssueReportVariables>): UseDataConnectMutationResult<CreateIssueReportData, CreateIssueReportVariables>;
export function useCreateIssueReport(dc: DataConnect, options?: useDataConnectMutationOptions<CreateIssueReportData, FirebaseError, CreateIssueReportVariables>): UseDataConnectMutationResult<CreateIssueReportData, CreateIssueReportVariables>;

export function useGetScooterLocation(vars: GetScooterLocationVariables, options?: useDataConnectQueryOptions<GetScooterLocationData>): UseDataConnectQueryResult<GetScooterLocationData, GetScooterLocationVariables>;
export function useGetScooterLocation(dc: DataConnect, vars: GetScooterLocationVariables, options?: useDataConnectQueryOptions<GetScooterLocationData>): UseDataConnectQueryResult<GetScooterLocationData, GetScooterLocationVariables>;

export function useEndRide(options?: useDataConnectMutationOptions<EndRideData, FirebaseError, EndRideVariables>): UseDataConnectMutationResult<EndRideData, EndRideVariables>;
export function useEndRide(dc: DataConnect, options?: useDataConnectMutationOptions<EndRideData, FirebaseError, EndRideVariables>): UseDataConnectMutationResult<EndRideData, EndRideVariables>;

export function useListAvailableScooters(options?: useDataConnectQueryOptions<ListAvailableScootersData>): UseDataConnectQueryResult<ListAvailableScootersData, undefined>;
export function useListAvailableScooters(dc: DataConnect, options?: useDataConnectQueryOptions<ListAvailableScootersData>): UseDataConnectQueryResult<ListAvailableScootersData, undefined>;
