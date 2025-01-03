// src/utils/clerkConfig.js
import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkFrontendApi || !publishableKey) {
  throw new Error('Missing Clerk Frontend API key or Publishable Key in environment variables');
}

export const withClerk = (Component) => {
  return function ClerkWrapper(props) {
    return (
      <ClerkProvider
        frontendApi={clerkFrontendApi} 
        publishableKey={publishableKey}
      >
        <Component {...props} />
      </ClerkProvider>
    );
  };
};
