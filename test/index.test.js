import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { trueFunc, falseFunc } from "../dist/index.js";

describe("boolbase", () => {
	it("trueFunc should return true", () => {
		assert.strictEqual(trueFunc(), true);
	});

	it("falseFunc should return false", () => {
		assert.strictEqual(falseFunc(), false);
	});
});
