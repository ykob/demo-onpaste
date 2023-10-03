import { CodeBlock, InputFieldMulti } from "./components/ui";
import "ress";

function App() {
  return (
    <>
      <InputFieldMulti placeholder="paste some strings on the field." />
      <CodeBlock />
    </>
  );
}

export default App;
