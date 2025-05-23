export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	imagesUrl: string;
	slug: string;
	category: {
		id: number;
		name: string;
		slug: string;
	};
}
