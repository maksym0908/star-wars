import { Card } from '@material-ui/core'
import { NoSavedVacancyWarning } from './noSavedVacancyWarning'
import classes from './savedItems.module.css'

export const SavedItems = ({liked, unliked, setLike, saved_characters}) => {
    return (
        <div>
            {saved_characters.length ? saved_characters.map((character, index) => {
           return <a href={`/character/${character.name}`} key={index} >
            <div className={classes.wrapper}>
                <Card style={{ padding: 20, marginBottom: 5 }}>
                    <div className={classes.content}>
                        <div>
                            <h3> <b>{character.name}</b> </h3>
                            <div>Gender: {character.gender}</div>
                            <div> Homeworld: {character.homeworld} </div>
                        </div>
                        <div onClick={(e) => setLike(e, character.name)} style={{ marginTop: 'auto' }}>
                            {character.liked === false ? unliked : liked}
                        </div>
                    </div>
                </Card>
            </div>
        </a>
            } ): <NoSavedVacancyWarning /> 
            }
        </div>
    )
} 