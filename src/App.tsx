import { CodeBlock, InputFieldMulti, Layout } from "./components/ui";
import "ress";

function App() {
  return (
    <Layout>
      <InputFieldMulti placeholder="paste some strings on the field." />
      <CodeBlock />
    </Layout>
  );
}

export default App;
