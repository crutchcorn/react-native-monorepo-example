import { ThemeProvider } from "@crutchcorn/shared-elements";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesView } from "./views/messages.view";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MessagesView/>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
