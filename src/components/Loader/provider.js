import React, {useMemo, useState, useCallback} from "react";

import {LoaderContext} from "./context";

export const LoaderProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const startLoading = useCallback(() => setLoading(true), [setLoading]);
  const stopLoading = useCallback(() => setLoading(false), [setLoading]);
  const value = useMemo(() => ({loading, startLoading, stopLoading}), [loading, startLoading, stopLoading]);

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
};