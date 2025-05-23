import Link from 'next/link';

import { Icon, Text } from '@/components/common';

import { assistanceLinks, servicesLinks } from '@/lib/constants';

export const Footer = () => (
	<footer className={'bg-black'}>
		<div
			className={'w-full space-y-6 px-8 pt-12 sm:px-10 lg:px-16 lg:pt-20 xl:px-40 xl:pt-[104px]'}
		>
			<div
				className={
					'flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-0'
				}
			>
				<div
					className={
						'flex flex-col items-center space-y-6 lg:max-w-[300px] lg:items-start xl:max-w-[384px]'
					}
				>
					<Link href={'/'} className={`flex items-center gap-2 sm:block`}>
						<Icon name={'LogoWhite'} />
					</Link>
					<Text as={'p'} className={'text-center text-sm text-neutral-200 lg:text-left'}>
						We are a residential interior design firm located in Portland. Our boutique-studio
						offers more than
					</Text>
				</div>

				<div className={'flex flex-col items-center gap-2 lg:items-start'}>
					<Text as={'h4'} className={'text-base font-semibold text-neutral-200 lg:text-sm'}>
						Services
					</Text>
					<ul className={'flex flex-col items-center gap-2 lg:items-start'}>
						{servicesLinks.map((link, index) => (
							<li key={index} className={'py-1'}>
								<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className={'flex flex-col items-center gap-2 lg:items-start'}>
					<Text as={'h4'} className={'text-base font-semibold text-neutral-200 lg:text-sm'}>
						Assistance to the buyer
					</Text>
					<ul className={'flex flex-col items-center gap-2 lg:items-start'}>
						{assistanceLinks.map((link, index) => (
							<li key={index} className={'py-1'}>
								<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<ul className={'flex items-center justify-center gap-8 lg:justify-start'}>
				<li>
					<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
						<Icon name={'Twitter'} className={'size-6 lg:size-4'} />
					</Link>
				</li>
				<li>
					<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
						<Icon name={'Facebook'} className={'size-6 lg:size-4'} />
					</Link>
				</li>
				<li>
					<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
						<Icon name={'TikTok'} className={'size-6 lg:size-4'} />
					</Link>
				</li>
				<li>
					<Link href={'/'} className={'text-sm text-neutral-200 hover:text-neutral-400'}>
						<Icon name={'Instagram'} className={'size-6 lg:size-4'} />
					</Link>
				</li>
			</ul>
		</div>
		<div
			className={'mt-10 flex w-full items-center justify-center border-t border-t-neutral-300 py-8'}
		>
			<Text as={'p'} className={'text-center text-sm text-neutral-200'}>
				© {new Date().getFullYear()} All rights reserved. Developed by Albinator
			</Text>
		</div>
	</footer>
);
