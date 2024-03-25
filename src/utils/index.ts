export function getTodayDate(): string | undefined {
	const today = new Date();
	return today.toISOString().split("T")[0];
}
