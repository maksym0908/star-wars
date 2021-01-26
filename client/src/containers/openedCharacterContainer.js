import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OpenedCharacter } from '../components/opened_character/openedCharacter'

export const OpenedCharacterContainer = ({ characters, handleLikeState, user_info_from_storage }) => {
    
    const { name } = useParams()
    const defaultImage = "https://i.pinimg.com/236x/dd/49/dd/dd49dd83e894321a9402465c98ebc386--facebook-profile-avatar.jpg"
    const [character, setCharcter] = useState(characters.filter(c => c.name === name)[0])
    const setCharacterAvatar = image => {
        setCharcter({...character, image})
    }
    const handleImage = () => {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            setCharacterAvatar(reader.result)

        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const index = characters.findIndex(c => c.name === character.name)
        characters[index] = character
        localStorage.setItem('characters', JSON.stringify(characters)) 
    }, [character, characters])
    
    return (
        <OpenedCharacter
            user_info_from_storage={user_info_from_storage}
            character={character}
            handleImage={handleImage}
            defaultImage={defaultImage}
            handleLikeState={handleLikeState}
        />
    )
}