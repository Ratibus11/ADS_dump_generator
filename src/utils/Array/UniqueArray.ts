abstract class UniqueArray {
	public static of<T>(array: T[]): T[] {
		return array.filter(UniqueArray.__isUnique);
	}

	private static __isUnique<T>(value: T, index: number, array: T[]) {
		return array.indexOf(value) === index;
	}
}

export { UniqueArray };
