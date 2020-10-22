import { instance } from './instance';

export const Services = {
    getAllPosts: () => instance.get('/posts'),
    postPosts : (form) => instance.post('/posts',form),
    postCommantaire: (commantaire) => instance.post('comments',commantaire),
    deleteCommantaire: (id) => instance.delete('/comments/'+id),
    deletePost: (id) => instance.delete('/posts/'+id),
};