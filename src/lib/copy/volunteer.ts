import dockSupportImg from '$lib/assets/images/volunteer/IMG_3701.jpg?w=400&imagetools';
import companionImage from '$lib/assets/images/volunteer/IMG_4296.jpg?w=400&imagetools';
import chaseImage from '$lib/assets/images/volunteer/chase_boat_2.jpg';

export const roles = [
	{
		title: 'Companion sailor',
		description:
			'Seeking experienced sailors who can ride along with our disabled sailors to make sure everyone has a smooth ride and enjoyable time on the water.',
		src: companionImage
	},
	{
		title: 'Dock support',
		description:
			'Seeking abled bodied individuals to help transport sailors to the docks, prepare the boats for launch and land our sailors safely when they return.',
		src: dockSupportImg
	},
	{
		title: 'Chase Boat Operator',
		description:
			'Seeking experienced motorboat enthusiasts who can monitor sailboats in the Harbor from our powered skiff, and communicate with sailors via radio.',
		src: chaseImage
	}
];
