import * as assert from "assert";
import * as vscode from "vscode";
import { registerHelloWorldCommand } from "../src/commands";

suite("Commands Test Suite", () => {
  test("Hello World command registration", () => {
    const context = { subscriptions: [] } as unknown as vscode.ExtensionContext;
    registerHelloWorldCommand(context);
    assert.strictEqual(context.subscriptions.length, 1);
  });
});
