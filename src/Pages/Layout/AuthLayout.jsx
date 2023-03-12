import React, { Suspense } from "react";
import { Await, useLoaderData, useOutlet } from "react-router-dom";
import { AuthProvider } from "../../utils/useAuth";

const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData();

  return (
    <Suspense>
      <Await
        resolve={userPromise}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};

export default AuthLayout;
