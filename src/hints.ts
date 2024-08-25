import * as vscode from "vscode";

export function generateContentText(
  selection: vscode.Selection,
  lineText: string
): string {
  const cursorPosition = selection.active.character;
  const lineLength = lineText.length;

  if (!selection.isEmpty) {
    // When text is selected, suggest refactoring and navigation commands
    return "💡 Alt+Shift+Arrow: Duplicate line | Ctrl+F2: Rename symbol | Alt+F12: Peek definition";
  } else if (cursorPosition === 0) {
    // When the cursor is at the start of the line, suggest line manipulation commands
    return "💡 Ctrl+Shift+K: Delete line | Ctrl+Enter: Insert line below | Ctrl+Alt+Down: Add cursor below";
  } else if (cursorPosition === lineLength) {
    // When the cursor is at the end of the line, suggest more advanced editing commands
    return "💡 Ctrl+Shift+D: Duplicate line | Ctrl+/ : Toggle comment | Ctrl+Alt+Up/Down: Move line";
  } else {
    // When the cursor is in the middle of the line, suggest navigation and editing commands
    return "💡 Ctrl+D: Select next occurrence | Ctrl+Shift+L: Select all occurrences | Ctrl+P: Quick file open";
  }
}
