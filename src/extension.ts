import * as vscode from "vscode";
import { applyDecoration } from "./decorations";
import { generateContentText } from "./hints";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "shortcuthinthelper" is now active!');

  const decorationType = vscode.window.createTextEditorDecorationType({
    after: {
      margin: "0 0 0 1ch",
      textDecoration: "none",
      color: "gray",
      contentText: "",
    },
    rangeBehavior: vscode.DecorationRangeBehavior.ClosedOpen,
  });

  vscode.window.onDidChangeTextEditorSelection((event) => {
    const editor = event.textEditor;
    const selection = editor.selection;

    editor.setDecorations(decorationType, []);

    if (shouldShowCommentHint()) {
      const contentText = generateContentText(
        selection,
        editor.document.lineAt(selection.active.line).text
      );
      applyDecoration(editor, decorationType, selection, contentText);
    }
  });
}

export function deactivate() {}

function shouldShowCommentHint(): boolean {
  return vscode.workspace
    .getConfiguration("shortcuthinthelper")
    .get("showCommentHint", true);
}
