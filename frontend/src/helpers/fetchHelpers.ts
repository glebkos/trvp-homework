const backendURL = 'http://localhost:3000/api/v1/';

export const fetchData = async (src: string, options?: any) => {
    return await fetch(backendURL + src, {
        method: 'GET',
        ...options,
    }).then((response) => response.json())
        .catch((error) => console.log(error));
};
