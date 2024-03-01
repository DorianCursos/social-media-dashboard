import { StyledSmallCard } from './small-card.styles';

const SmallCard = ({
	icon,
	iconName,
	title,
	number,
	arrowIcon,
	changesToday
}) => {
	return (
		<StyledSmallCard>
			<span>{title}</span>
			<img src={icon} alt={iconName} />
			<span>{number}</span>
			<div>
				<img src={arrowIcon} alt='' />
				<span>{changesToday}</span>
			</div>
		</StyledSmallCard>
	);
};

export default SmallCard;
