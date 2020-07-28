import React, { useState } from "react";
import marked from "marked";
import jsPDF from "jspdf";

import "./styles/global.scss";

// const markdown = marked(`
// # teste
// ## jorge 2
// e se eu começar a escrever _assim_
// * teste de
// * pontuação

// `);

function App() {
  const doc = new jsPDF();
  const all: HTMLElement | null = document.querySelector("#root");
  const [markdown, setMarkdown] = useState("");

  function handleSave() {
    if (all !== null) {
      doc.fromHTML(all, 10, 10);
      doc.save("a4.pdf");
    }
  }

  const treatedMarkdown = marked(markdown);
  return (
    <section>
      <div className="text">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          className="renderInput"
          dangerouslySetInnerHTML={{ __html: treatedMarkdown }}
        />
      </div>
      <button onClick={handleSave}>Salve-me em pdf</button>
    </section>
  );
}

export default App;
