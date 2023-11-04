import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        
        headers: {
            'X-RapidAPI-Key': 'a60fb3fcd7msh421f1894e94a609p116f9bjsn07a2d87955a2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}

