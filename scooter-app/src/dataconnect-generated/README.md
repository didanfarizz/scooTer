# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetScooterLocation*](#getscooterlocation)
  - [*ListAvailableScooters*](#listavailablescooters)
- [**Mutations**](#mutations)
  - [*CreateIssueReport*](#createissuereport)
  - [*EndRide*](#endride)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetScooterLocation
You can execute the `GetScooterLocation` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getScooterLocation(vars: GetScooterLocationVariables): QueryPromise<GetScooterLocationData, GetScooterLocationVariables>;

interface GetScooterLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetScooterLocationVariables): QueryRef<GetScooterLocationData, GetScooterLocationVariables>;
}
export const getScooterLocationRef: GetScooterLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getScooterLocation(dc: DataConnect, vars: GetScooterLocationVariables): QueryPromise<GetScooterLocationData, GetScooterLocationVariables>;

interface GetScooterLocationRef {
  ...
  (dc: DataConnect, vars: GetScooterLocationVariables): QueryRef<GetScooterLocationData, GetScooterLocationVariables>;
}
export const getScooterLocationRef: GetScooterLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getScooterLocationRef:
```typescript
const name = getScooterLocationRef.operationName;
console.log(name);
```

### Variables
The `GetScooterLocation` query requires an argument of type `GetScooterLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetScooterLocationVariables {
  scooterId: UUIDString;
}
```
### Return Type
Recall that executing the `GetScooterLocation` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetScooterLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetScooterLocationData {
  scooter?: {
    currentLatitude: number;
    currentLongitude: number;
  };
}
```
### Using `GetScooterLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getScooterLocation, GetScooterLocationVariables } from '@dataconnect/generated';

// The `GetScooterLocation` query requires an argument of type `GetScooterLocationVariables`:
const getScooterLocationVars: GetScooterLocationVariables = {
  scooterId: ..., 
};

// Call the `getScooterLocation()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getScooterLocation(getScooterLocationVars);
// Variables can be defined inline as well.
const { data } = await getScooterLocation({ scooterId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getScooterLocation(dataConnect, getScooterLocationVars);

console.log(data.scooter);

// Or, you can use the `Promise` API.
getScooterLocation(getScooterLocationVars).then((response) => {
  const data = response.data;
  console.log(data.scooter);
});
```

### Using `GetScooterLocation`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getScooterLocationRef, GetScooterLocationVariables } from '@dataconnect/generated';

// The `GetScooterLocation` query requires an argument of type `GetScooterLocationVariables`:
const getScooterLocationVars: GetScooterLocationVariables = {
  scooterId: ..., 
};

// Call the `getScooterLocationRef()` function to get a reference to the query.
const ref = getScooterLocationRef(getScooterLocationVars);
// Variables can be defined inline as well.
const ref = getScooterLocationRef({ scooterId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getScooterLocationRef(dataConnect, getScooterLocationVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.scooter);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.scooter);
});
```

## ListAvailableScooters
You can execute the `ListAvailableScooters` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAvailableScooters(): QueryPromise<ListAvailableScootersData, undefined>;

interface ListAvailableScootersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableScootersData, undefined>;
}
export const listAvailableScootersRef: ListAvailableScootersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAvailableScooters(dc: DataConnect): QueryPromise<ListAvailableScootersData, undefined>;

interface ListAvailableScootersRef {
  ...
  (dc: DataConnect): QueryRef<ListAvailableScootersData, undefined>;
}
export const listAvailableScootersRef: ListAvailableScootersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAvailableScootersRef:
```typescript
const name = listAvailableScootersRef.operationName;
console.log(name);
```

### Variables
The `ListAvailableScooters` query has no variables.
### Return Type
Recall that executing the `ListAvailableScooters` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAvailableScootersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAvailableScootersData {
  scooters: ({
    id: UUIDString;
    scooterID: string;
    currentLatitude: number;
    currentLongitude: number;
    batteryLevel: number;
  } & Scooter_Key)[];
}
```
### Using `ListAvailableScooters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAvailableScooters } from '@dataconnect/generated';


// Call the `listAvailableScooters()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAvailableScooters();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAvailableScooters(dataConnect);

console.log(data.scooters);

// Or, you can use the `Promise` API.
listAvailableScooters().then((response) => {
  const data = response.data;
  console.log(data.scooters);
});
```

### Using `ListAvailableScooters`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAvailableScootersRef } from '@dataconnect/generated';


// Call the `listAvailableScootersRef()` function to get a reference to the query.
const ref = listAvailableScootersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAvailableScootersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.scooters);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.scooters);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateIssueReport
You can execute the `CreateIssueReport` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createIssueReport(vars: CreateIssueReportVariables): MutationPromise<CreateIssueReportData, CreateIssueReportVariables>;

interface CreateIssueReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateIssueReportVariables): MutationRef<CreateIssueReportData, CreateIssueReportVariables>;
}
export const createIssueReportRef: CreateIssueReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createIssueReport(dc: DataConnect, vars: CreateIssueReportVariables): MutationPromise<CreateIssueReportData, CreateIssueReportVariables>;

interface CreateIssueReportRef {
  ...
  (dc: DataConnect, vars: CreateIssueReportVariables): MutationRef<CreateIssueReportData, CreateIssueReportVariables>;
}
export const createIssueReportRef: CreateIssueReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createIssueReportRef:
```typescript
const name = createIssueReportRef.operationName;
console.log(name);
```

### Variables
The `CreateIssueReport` mutation requires an argument of type `CreateIssueReportVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateIssueReportVariables {
  description: string;
  issueType: string;
  scooterId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateIssueReport` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateIssueReportData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateIssueReportData {
  issueReport_insert: IssueReport_Key;
}
```
### Using `CreateIssueReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createIssueReport, CreateIssueReportVariables } from '@dataconnect/generated';

// The `CreateIssueReport` mutation requires an argument of type `CreateIssueReportVariables`:
const createIssueReportVars: CreateIssueReportVariables = {
  description: ..., 
  issueType: ..., 
  scooterId: ..., 
};

// Call the `createIssueReport()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createIssueReport(createIssueReportVars);
// Variables can be defined inline as well.
const { data } = await createIssueReport({ description: ..., issueType: ..., scooterId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createIssueReport(dataConnect, createIssueReportVars);

console.log(data.issueReport_insert);

// Or, you can use the `Promise` API.
createIssueReport(createIssueReportVars).then((response) => {
  const data = response.data;
  console.log(data.issueReport_insert);
});
```

### Using `CreateIssueReport`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createIssueReportRef, CreateIssueReportVariables } from '@dataconnect/generated';

// The `CreateIssueReport` mutation requires an argument of type `CreateIssueReportVariables`:
const createIssueReportVars: CreateIssueReportVariables = {
  description: ..., 
  issueType: ..., 
  scooterId: ..., 
};

// Call the `createIssueReportRef()` function to get a reference to the mutation.
const ref = createIssueReportRef(createIssueReportVars);
// Variables can be defined inline as well.
const ref = createIssueReportRef({ description: ..., issueType: ..., scooterId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createIssueReportRef(dataConnect, createIssueReportVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.issueReport_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.issueReport_insert);
});
```

## EndRide
You can execute the `EndRide` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
endRide(vars: EndRideVariables): MutationPromise<EndRideData, EndRideVariables>;

interface EndRideRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EndRideVariables): MutationRef<EndRideData, EndRideVariables>;
}
export const endRideRef: EndRideRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
endRide(dc: DataConnect, vars: EndRideVariables): MutationPromise<EndRideData, EndRideVariables>;

interface EndRideRef {
  ...
  (dc: DataConnect, vars: EndRideVariables): MutationRef<EndRideData, EndRideVariables>;
}
export const endRideRef: EndRideRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the endRideRef:
```typescript
const name = endRideRef.operationName;
console.log(name);
```

### Variables
The `EndRide` mutation requires an argument of type `EndRideVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EndRideVariables {
  rideId: UUIDString;
  endLatitude: number;
  endLongitude: number;
}
```
### Return Type
Recall that executing the `EndRide` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EndRideData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EndRideData {
  ride_update?: Ride_Key | null;
}
```
### Using `EndRide`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, endRide, EndRideVariables } from '@dataconnect/generated';

// The `EndRide` mutation requires an argument of type `EndRideVariables`:
const endRideVars: EndRideVariables = {
  rideId: ..., 
  endLatitude: ..., 
  endLongitude: ..., 
};

// Call the `endRide()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await endRide(endRideVars);
// Variables can be defined inline as well.
const { data } = await endRide({ rideId: ..., endLatitude: ..., endLongitude: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await endRide(dataConnect, endRideVars);

console.log(data.ride_update);

// Or, you can use the `Promise` API.
endRide(endRideVars).then((response) => {
  const data = response.data;
  console.log(data.ride_update);
});
```

### Using `EndRide`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, endRideRef, EndRideVariables } from '@dataconnect/generated';

// The `EndRide` mutation requires an argument of type `EndRideVariables`:
const endRideVars: EndRideVariables = {
  rideId: ..., 
  endLatitude: ..., 
  endLongitude: ..., 
};

// Call the `endRideRef()` function to get a reference to the mutation.
const ref = endRideRef(endRideVars);
// Variables can be defined inline as well.
const ref = endRideRef({ rideId: ..., endLatitude: ..., endLongitude: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = endRideRef(dataConnect, endRideVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.ride_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.ride_update);
});
```

