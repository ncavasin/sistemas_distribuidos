export type Message = {
	uuid: string,
	sender: string,
	message: string,
	date: Date
}

export default class Queue {
	private items: Message[];

	constructor(items?: Message[]) {
		this.items = items || [];
	}

	get length(): number {
		return this.items.length
	}

	public isEmpty(): boolean {
		return this.items.length === 0;
	}

	public head(): Message | null {
		return this.items[0] || null;
	}

	public push(message: Message): void {
		this.items.push(message)
	};

	public pop(): Message | undefined {
		return this.items.shift();
	}

	public clear() {
		this.items = [];
	}

	public clone(): Queue {
		return new Queue([ ...this.items ]);
	}

	public deleteMessage(messageUuid: string): boolean {
		const index = this.items.findIndex(message => message.uuid === messageUuid);
		if (index < 0) return false;

		this.items.splice(index, 1);

		return true
	}
}