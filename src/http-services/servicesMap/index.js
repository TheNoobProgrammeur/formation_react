import { instance } from './instance';

export const Services = {
    getAllCountries: () => instance.get('/all')
};
