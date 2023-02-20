import { QueryClient, QueryClientProvider } from "react-query";
import { Flags } from "./Flags/Flags";

function App() {
  const api = new QueryClient();

  return (
    <QueryClientProvider client={api}>
      <Flags />
    </QueryClientProvider>
  );
}

export default App;
