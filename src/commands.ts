import * as vscode from "vscode";

export function registerHelloWorldCommand(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "shortcuthinthelper.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from ShortcutHintHelper!"
      );
    }
  );
  context.subscriptions.push(disposable);
}
