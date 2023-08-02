import { ThemeProvider } from "@crutchcorn/shared-elements/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesView } from "./views/messages/messages.view";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { SettingsView } from "./views/settings/settings.view";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<MessagesView />} />
              <Route path="settings" element={<SettingsView />} />
              <Route path="*" element={<p>There is nothing here 404</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
