import { Card } from '@material-ui/core'
import React from 'react'
import { Warning } from '../navigation/warning/warning'
import classes from './characters.module.css'



export const Characters = ({ liked, unliked, setLike, character, userInfo, isLoggedIn, showWarning, name, user_info_from_storage }) => {

    return (
        <>
            <a href={`/character/${character.name}`} >
                <div className={classes.wrapper}>
                    <Card style={{ padding: 20, marginBottom: 5 }}>
                        <div className={classes.content}>
                            <div>
                                <h3> <b>{character.name}</b> </h3>
                                <div>Gender: {character.gender}</div>
                                <div> Homeworld: {character.homeworld} </div>
                            </div>
                            <div onClick={userInfo ? (e) => setLike(e, character.name) : (e) => showWarning(e, character.name)} style={{ marginTop: 'auto' }}>
                                {character.liked === true && user_info_from_storage ? liked : unliked}
                            </div>
                        </div>
                        {name === character.name && !isLoggedIn ?
                        <div className={classes.warningWrapper}>
                        <Warning />
                        </div>  : null}
                    </Card>
                </div>
            </a>
        </>
    )
}