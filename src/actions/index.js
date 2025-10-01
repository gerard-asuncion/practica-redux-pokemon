import { SET_POKEMONS, SET_LOADING } from './types'

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})