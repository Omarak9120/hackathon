import * as assert from "assert";
import * as vscode from "vscode";
import { createDecorationType, applyDecoration } from "../src/decorations";

suite("Decorations Test Suite", () => {
  test("Decoration type creation", () => {
    const decorationType = createDecorationType();
    assert.ok(decorationType);
  });

  test("Applying decoration", () => {
    const decorationType = createDecorationType();
    const editor = {
      document: { lineAt: () => ({ text: "test line" }) },
      setDecorations: () => {},
    } as unknown as vscode.TextEditor;
    const selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));

    assert.doesNotThrow(() =>
      applyDecoration(editor, decorationType, selection, "Test Hint")
    );
  });
});
