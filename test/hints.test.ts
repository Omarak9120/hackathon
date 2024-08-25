import * as assert from 'assert';
import * as vscode from 'vscode';
import { generateContentText } from '../src/hints';

suite('Hints Test Suite', () => {

  test('generateContentText with selected text', () => {
    const mockSelection = {
      active: { character: 5 }, // Mock cursor position in the middle of the line
      isEmpty: false            // Indicates that some text is selected
    } as unknown as vscode.Selection;

    const mockLineText = "console.log('Hello, World!');"; // Mocked line text

    const contentText = generateContentText(mockSelection, mockLineText);
    assert.strictEqual(
      contentText,
      '💡 Ctrl+C: Copy | Ctrl+X: Cut | Ctrl+Shift+K: Delete line | Ctrl+D: Select next occurrence'
    );
  });

  test('generateContentText when cursor is at the start of the line', () => {
    const mockSelection = {
      active: { character: 0 }, // Cursor is at the start of the line
      isEmpty: true             // No text is selected
    } as unknown as vscode.Selection;

    const mockLineText = "console.log('Hello, World!');"; // Mocked line text

    const contentText = generateContentText(mockSelection, mockLineText);
    assert.strictEqual(
      contentText,
      '💡 Ctrl+Shift+K: Delete line | Ctrl+Enter: Insert line below | Ctrl+Shift+Enter: Insert line above'
    );
  });

  test('generateContentText when cursor is at the end of the line', () => {
    const mockSelection = {
      active: { character: 26 }, // Cursor is at the end of the line (26 characters in line)
      isEmpty: true              // No text is selected
    } as unknown as vscode.Selection;

    const mockLineText = "console.log('Hello, World!');"; // Mocked line text

    const contentText = generateContentText(mockSelection, mockLineText);
    assert.strictEqual(
      contentText,
      '💡 Alt+Up/Down: Move line | Ctrl+D: Select next occurrence | Ctrl+/ : Toggle comment'
    );
  });

  test('generateContentText when cursor is in the middle of the line', () => {
    const mockSelection = {
      active: { character: 10 }, // Cursor is in the middle of the line
      isEmpty: true              // No text is selected
    } as unknown as vscode.Selection;

    const mockLineText = "console.log('Hello, World!');"; // Mocked line text

    const contentText = generateContentText(mockSelection, mockLineText);
    assert.strictEqual(
      contentText,
      '💡 Ctrl+L: Select line | Ctrl+Shift+K: Delete line | Ctrl+D: Select next occurrence'
    );
  });
});
