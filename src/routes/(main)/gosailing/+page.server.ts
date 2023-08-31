import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = () => {
	return {
		accessKey: env.web3forms_key
	};
};
