import * as path from "path";
import * as fs from "fs";
import * as json5 from "json5";
import * as vscode from "vscode";

type Keybinding = {
  key: string;
  command: string;
  name?: string;
};

export function getBuiltInKeybindings(): Keybinding[] {
  const keybindingsPath = path.join(__dirname, "..", "keybindings.json");

  try {
    const keybindings = json5.parse(fs.readFileSync(keybindingsPath, "utf8"));
    return keybindings;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function getCustomKeybindings(): Keybinding[] {
  const keybindingsPath = path.join(
    process.env.APPDATA || "",
    "Code",
    "User",
    "keybindings.json"
  );

  try {
    const keybindings = json5.parse(fs.readFileSync(keybindingsPath, "utf8"));
    return keybindings;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function mergeKeybindings(
  builtIn: Keybinding[],
  custom: Keybinding[]
): Keybinding[] {
  return builtIn.map((builtInKeybinding) => {
    const customKeybinding = custom.find(
      (customKeybinding) =>
        customKeybinding.command === builtInKeybinding.command
    );
    return {
      ...builtInKeybinding,
      key: customKeybinding?.key || builtInKeybinding.key,
    };
  });
}

export function shouldShowCommentHint(): boolean {
  return vscode.workspace
    .getConfiguration("shortcuthinthelper")
    .get("showCommentHint", true);
}
