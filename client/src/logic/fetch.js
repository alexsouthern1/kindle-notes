// generic get request
export const get = async (url, options) => {
	return await coreFetch(url, options);
};

// generic post request
export const post = async (url, payload, options) => {
	return await coreFetch(url, options, "post", payload);
};

// generic put request
export const put = async (url, payload, options) => {
	return await coreFetch(url, options, "put", payload);
}

const coreFetch = async (url, options, method = "get", body) => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	const init = { headers };

	if (method === "post" || method === "put") {
		Object.assign(init, { body, method, headers });
	}

	return new Promise(async (resolve, reject) => {
		let response = undefined;
		if (options) {
			response = await fetch(url, { headers });
		} else {
			response = await fetch(url, init);
		}
		if (response.ok) {
            console.log('received ok response');
			resolve(response.json());
		} else {
            console.log('rejecting');
			reject(response.status);
		}
	});
};



