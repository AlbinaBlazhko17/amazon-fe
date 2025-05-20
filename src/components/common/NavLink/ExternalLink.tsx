import { cn } from '@/lib/utils';

export type ExternalLinkProps = React.ComponentProps<'a'> & {
	to: string;
	openInSameTab?: boolean;
	isReferring?: boolean;
	isUnderlined?: boolean;
};

export const ExternalLink = ({
	to,
	openInSameTab = false,
	isReferring = false,
	isUnderlined = false,
	...rest
}: ExternalLinkProps) => {
	return (
		<a
			target={openInSameTab ? undefined : '_blank'}
			rel={isReferring ? undefined : 'noopener noreferrer'}
			href={to}
			className={cn('cursor-pointer text-inherit no-underline', {
				underline: isUnderlined
			})}
			{...rest}
		/>
	);
};
