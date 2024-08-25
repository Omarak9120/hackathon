import * as assert from "assert";
import * as vscode from "vscode";
import { activate, deactivate } from "../src/extension";

suite("Extension Test Suite", () => {
  test("Extension activation", () => {
    const context = { subscriptions: [] } as unknown as vscode.ExtensionContext;
    assert.doesNotThrow(() => activate(context));
  });

  test("Extension deactivation", () => {
    assert.doesNotThrow(() => deactivate());
  });
});
