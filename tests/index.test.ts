/* libs */
import { expect, test, describe } from "bun:test";

/* utils */
import { checker } from "@/utils";

/* types */
import type { I_Collection } from "@/@types";

// ==========================

describe("CHECKER TEST", () => {
	test("should return true for valid data", () => {
		const data: I_Collection[] = [
			{
				name: "valid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is a valid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(true);
	});

	test("should return false for empty URL", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "",
				ref: "",
				description: "This is an invalid collection.",
				note: -1,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for empty keywords array", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: [],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: 0,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for empty description", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "",
				note: 3,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for note out of range", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: 6,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-string name", () => {
		const data: I_Collection[] = [
			{
				// @ts-ignore
				name: 123,
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-string keywords", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				// @ts-ignore
				keywords: [123, "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-string URL", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				// @ts-ignore
				url: 123,
				ref: "",
				description: "This is an invalid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-string ref", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				// @ts-ignore
				ref: 123,
				description: "This is an invalid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-string description", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				// @ts-ignore
				description: 123,
				note: 5,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for non-number note", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				// @ts-ignore
				note: "5",
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false if one of the collections is invalid", () => {
		const data: I_Collection[] = [
			{
				name: "valid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is a valid collection.",
				note: 5,
			},
			{
				name: "invalid collection",
				keywords: ["keyword1", "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: -2,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});

	test("should return false for multiple errors", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: [],
				url: "",
				ref: "",
				description: "",
				note: -2,
			},
		];
		expect(checker(data, true)).resolves.toBe(false);
	});
});
