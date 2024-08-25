"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
const hints_1 = require("../src/hints");
suite('Hint Generation Tests', () => {
    const mockEditor = {
        document: {
            lineAt: (lineNumber) => ({
                text: 'This is a test line',
            })
        }
    };
    test('Should generate hint for cursor at start of line', () => {
        const selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));
        const hint = (0, hints_1.generateContentText)(mockEditor, selection);
        assert.strictEqual(hint, '💡 Ctrl+Shift+K: Delete line | Ctrl+Enter: Insert line below | Ctrl+Shift+Enter: Insert line above');
    });
    test('Should generate hint for cursor in middle of line', () => {
        const selection = new vscode.Selection(new vscode.Position(0, 5), new vscode.Position(0, 5));
        const hint = (0, hints_1.generateContentText)(mockEditor, selection);
        assert.strictEqual(hint, '💡 Ctrl+L: Select line | Ctrl+Shift+K: Delete line | Ctrl+D: Select next occurrence');
    });
    test('Should generate hint for cursor at end of line', () => {
        const selection = new vscode.Selection(new vscode.Position(0, 18), new vscode.Position(0, 18));
        const hint = (0, hints_1.generateContentText)(mockEditor, selection);
        assert.strictEqual(hint, '💡 Alt+Up/Down: Move line | Ctrl+D: Select next occurrence | Ctrl+/ : Toggle comment');
    });
});
