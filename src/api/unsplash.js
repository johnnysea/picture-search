import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 61e984d8b9d35a07ec03eb8db783a0e8415bfe00fa16397451b23df37514490f'
    }
});

