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
		expect(checker(data, true)).toBe(true);
	});

	test("should return false and warn for empty URL", () => {
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
		expect(checker(data, true)).toBe(false);
	});

	test("should return false and warn for empty keywords array", () => {
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
		expect(checker(data, true)).toBe(false);
	});

	test("should return false and warn for empty description", () => {
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
		expect(checker(data, true)).toBe(false);
	});

	test("should return false and warn for note out of range", () => {
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
		expect(checker(data, true)).toBe(false);
	});

	// test("should return false and warn for non-string name", () => {
	// 	const data: I_Collection[] = [
	// 		{
	// 			name: 123 as any,
	// 			keywords: ["keyword1", "keyword2"],
	// 			url: "https://example.com",
	// 			ref: "",
	// 			description: "This is an invalid collection.",
	// 			note: 5,
	// 		},
	// 	];
	// 	expect(checker(data, true)).toBe(false);
	// });

	test("should return false and warn for non-string keywords", () => {
		const data: I_Collection[] = [
			{
				name: "invalid collection",
				keywords: [123 as any, "keyword2"],
				url: "https://example.com",
				ref: "",
				description: "This is an invalid collection.",
				note: 5,
			},
		];
		expect(checker(data, true)).toBe(false);
	});

	// test("should return false and warn for non-string URL", () => {
	// 	const data: I_Collection[] = [
	// 		{
	// 			name: "invalid collection",
	// 			keywords: ["keyword1", "keyword2"],
	// 			url: 123 as any,
	// 			ref: "",
	// 			description: "This is an invalid collection.",
	// 			note: 5,
	// 		},
	// 	];
	// 	expect(checker(data, true)).toBe(false);
	// });

	// test("should return false and warn for non-string ref", () => {
	// 	const data: I_Collection[] = [
	// 		{
	// 			name: "invalid collection",
	// 			keywords: ["keyword1", "keyword2"],
	// 			url: "https://example.com",
	// 			ref: 123 as any,
	// 			description: "This is an invalid collection.",
	// 			note: 5,
	// 		},
	// 	];
	// 	expect(checker(data, true)).toBe(false);
	// });

	// test("should return false and warn for non-string description", () => {
	// 	const data: I_Collection[] = [
	// 		{
	// 			name: "invalid collection",
	// 			keywords: ["keyword1", "keyword2"],
	// 			url: "https://example.com",
	// 			ref: "",
	// 			description: 123 as any,
	// 			note: 5,
	// 		},
	// 	];
	// 	expect(checker(data, true)).toBe(false);
	// });

	// test("should return false and warn for non-number note", () => {
	// 	const data: I_Collection[] = [
	// 		{
	// 			name: "invalid collection",
	// 			keywords: ["keyword1", "keyword2"],
	// 			url: "https://example.com",
	// 			ref: "",
	// 			description: "This is an invalid collection.",
	// 			note: "5" as any,
	// 		},
	// 	];
	// 	expect(checker(data, true)).toBe(false);
	// });

	test("should return false and warn if one of the collections is invalid", () => {
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
		expect(checker(data, true)).toBe(false);
	});

	test("should return false and warn for multiple errors", () => {
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
		expect(checker(data, true)).toBe(false);
	});
});
