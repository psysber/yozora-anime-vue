import {useRequest} from 'vue-request'

export const panelRequest = () => {
	const {data, loading, error} = useRequest({
		url: '/api/panel',
		method: 'GET',
	})
	return {data, loading, error};
}
