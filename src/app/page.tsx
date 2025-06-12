import { BrowseByCategory } from '@/features/browse-by-category';

import { FeaturedProducts } from '@/features';

export default function Home() {
	return (
		<>
			<FeaturedProducts />
			<BrowseByCategory />
		</>
	);
}
