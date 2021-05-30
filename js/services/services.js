const postData = async function(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    });

    return await res.json();
};

const getResource = async function(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Не смогли обратиться к fetch: ${url}, статус: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResource};