# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateIssueReport, useGetScooterLocation, useEndRide, useListAvailableScooters } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateIssueReport(createIssueReportVars);

const { data, isPending, isSuccess, isError, error } = useGetScooterLocation(getScooterLocationVars);

const { data, isPending, isSuccess, isError, error } = useEndRide(endRideVars);

const { data, isPending, isSuccess, isError, error } = useListAvailableScooters();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createIssueReport, getScooterLocation, endRide, listAvailableScooters } from '@dataconnect/generated';


// Operation CreateIssueReport:  For variables, look at type CreateIssueReportVars in ../index.d.ts
const { data } = await CreateIssueReport(dataConnect, createIssueReportVars);

// Operation GetScooterLocation:  For variables, look at type GetScooterLocationVars in ../index.d.ts
const { data } = await GetScooterLocation(dataConnect, getScooterLocationVars);

// Operation EndRide:  For variables, look at type EndRideVars in ../index.d.ts
const { data } = await EndRide(dataConnect, endRideVars);

// Operation ListAvailableScooters: 
const { data } = await ListAvailableScooters(dataConnect);


```