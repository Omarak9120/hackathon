import * as vscode from "vscode";

export function createDecorationType(): vscode.TextEditorDecorationType {
  return vscode.window.createTextEditorDecorationType({
    after: {
      margin: "0 0 0 1em",
      textDecoration: "none",
      color: "gray",
      contentText: "",
    },
    rangeBehavior: vscode.DecorationRangeBehavior.ClosedOpen,
  });
}


export function applyDecoration(
  editor: vscode.TextEditor,
  decorationType: vscode.TextEditorDecorationType,
  selection: vscode.Selection,
  contentText: string
) {
  const line = editor.document.lineAt(selection.active.line);
  const lineLength = line.text.length;
  const margin = `0 0 0 1ch`;  // Fixed margin

  const decoration = {
    range: new vscode.Range(
      selection.active.line,
      lineLength,
      selection.active.line,
      lineLength
    ),
    renderOptions: {
      after: {
        contentText: contentText,
        color: "gray",
        margin: margin
      }
    }
  };

  editor.setDecorations(decorationType, [decoration]);
}
