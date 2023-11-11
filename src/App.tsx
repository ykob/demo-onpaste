import "ress";
import { useState } from "react";
import { CodeBlock, InputFieldMulti, Layout } from "./components/ui";
import { ClipboardDataContext } from "./contexts/clipboard-data-context";

function App() {
  const [clipboardData, setClipboardData] = useState("");
  return (
    <Layout>
      <ClipboardDataContext.Provider
        value={{ clipboardData, setClipboardData }}
      >
        <InputFieldMulti placeholder="paste some strings on the field." />
        <CodeBlock>{clipboardData}</CodeBlock>
      </ClipboardDataContext.Provider>
    </Layout>
  );
}

export default App;
