import axios from 'axios'
const api = axios.create({
    baseURL: 'http://farmaapi2.herokuapp.com',
});

export const getProducts = async () => {
    const resp = await api.get('/product')
    console.log(resp.data)
    return resp.data;
}

export const getProductById = async (id) => {
    const resp = await api.get(`/product/${id}`)
    console.log(resp.data)
    return resp.data;
}

export const putProduct = async (id, body) => {
    const resp = await api.put(`/product/${id}`, body)
    console.log(resp)
    return resp.data.msg
}

export const postNewProduct = async (body) => {
    const resp = await api.post(`/product`, body)
}

export const deleteProduct = async (id) => {
    const resp = await api.delete(`/product/${id}`)
}