import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAllData } from '../api/swCharactersApi'
import App from '../App'
import { Loader } from '../components/character/assets/loader/loader'
import { Yoda } from '../components/character/assets/SVGs'

export const AppContainer = () => {
    const characters_from_storage = JSON.parse(localStorage.getItem('characters')) || []
    const user_info_from_storage = JSON.parse(localStorage.getItem('userData'))
    const saved_characters = characters_from_storage.filter(c => c.liked === true) 
    const [storage, setStorage] = useState(characters_from_storage)
    const [characters, setCharacters] = useState(characters_from_storage  || [])
    const history = useHistory()
    const { liked, unliked } = Yoda()
    const handleFilterCharacters = text => {
        let filteredCharacters = characters_from_storage.filter(c => {
           return c.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        } )
        setCharacters(filteredCharacters)
    }

    const handleLikeState =  (e ,name) => {
        e.preventDefault();
        let character = characters.filter(c => c.name === name)[0]
        let characterFromStorage = characters_from_storage.filter(c => c.name === name)[0]
        let res = (arr, val) => arr.map(c => {
            if (c === val) {
                c.liked = !val.liked
            }
            return c
        })
        localStorage.setItem('characters', JSON.stringify(res(characters_from_storage, characterFromStorage)))
        setStorage(res(characters_from_storage, characterFromStorage))
        setCharacters(res(characters, character))
}

const handleSignOut = () => {
    localStorage.removeItem('userData')
    history.go(0)
}
    useEffect(() => {
        async function initializeApp() {
                if (!storage.length) {
                    const data = await getAllData()
                    localStorage.setItem('characters', JSON.stringify(data))
                    if (!characters.length) {
                        setCharacters(data)
                        setStorage(data)
                    }
                }
            }
            initializeApp()
        }, [storage.length, characters.length])

    return (
        characters_from_storage.length ? <App
            characters_from_storage={characters_from_storage}
            user_info_from_storage={user_info_from_storage}
            handleSignOut={handleSignOut}
            saved_characters={saved_characters}
            userInfo={user_info_from_storage}
            characters={characters}
            filterCharacters={handleFilterCharacters}
            handleLikeState={handleLikeState}
            state={storage}
            liked={liked}
            unliked={unliked} /> :<Loader />
    )
}