import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { init } from 'bright-utils/stateGo';
// import { Toaster } from '@brighthr/component-toast';
// import stateGoMappings from '../../Routing/Router/stateGoMappings';

function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    retry = false,
  } = {}
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry,
      },
    },
  });

  // init(stateGoMappings(), history);

  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <>
          {children}
          {/* <Toaster /> */}
        </>
      </Router>
    </QueryClientProvider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
}

export default renderWithRouter;
