import { env } from '$env/dynamic/private';

export const load = () => {
	return {
		accessKey: env.web3forms_key
	};
};
