import * as assert from "assert";
import { getBuiltInKeybindings, getCustomKeybindings, mergeKeybindings } from "../src/configuration";

suite("Configuration Test Suite", () => {
  test("Built-in keybindings loading", () => {
    const keybindings = getBuiltInKeybindings();
    assert.ok(Array.isArray(keybindings));
  });

  test("Custom keybindings loading", () => {
    const keybindings = getCustomKeybindings();
    assert.ok(Array.isArray(keybindings));
  });

  test("Merging keybindings", () => {
    const builtIn = [{ key: "ctrl+c", command: "copy" }];
    const custom = [{ key: "ctrl+shift+c", command: "copy" }];
    const merged = mergeKeybindings(builtIn, custom);
    assert.strictEqual(merged[0].key, "ctrl+shift+c");
  });
});
