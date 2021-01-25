import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Characters } from '../components/character/characters'
import { handleSignIn } from '../api/swCharactersApi'
import QueryString from 'query-string'
import { NoFilteredCharacterWarning } from './noFilteredCharacterWarning'

export const CharactersContainer =  ({ handleLikeState, liked, unliked, characters, userInfo, user_info_from_storage }) => {
    let query = QueryString.parse(useHistory().location.search).code
    let history = useHistory()
useEffect(() => {
    if (query && !userInfo) {
        handleSignIn(query).then(() => {
            history.push('/')
            history.go(0)
        })
        
    }
})

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [name, setName] = useState('')
    const showWarning = (e, name) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setName(name)
    }
     return (
          characters.length ? characters.map((character, index) => {
                return (
                    <div key={index}>
                        <Characters user_info_from_storage={user_info_from_storage} name={name} isLoggedIn={isLoggedIn} showWarning={showWarning} userInfo={userInfo} liked={liked} unliked={unliked} setLike={handleLikeState} character={character} />
                    </div>
                )
            }  ) : <NoFilteredCharacterWarning />
    )
}