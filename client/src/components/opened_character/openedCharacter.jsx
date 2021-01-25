import React from 'react'
import classes from './openedCharacter.module.css'


export const OpenedCharacter = ({ character, user_info_from_storage, defaultImage, handleImage, handleLikeState }) => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={character.image ? character.image : defaultImage} alt="avatar" title={!user_info_from_storage ? 'Sign-in to upload or change image' : undefined} />
                    { user_info_from_storage ? <div>
                        <input id="fileInput" onChange={handleImage} type="file" />
                        <label id="label" htmlFor="fileInput" className={classes.uploadImage}>
                            {!character.image ? 'Upload image' : 'Update image'}
                        </label>
                        <label onClick={(e) => handleLikeState(e, character.name)} className={character.liked === true ? classes.dislike : classes.like}>
                            {character.liked === true ? 'Dislike' : 'Like'}
                        </label>
                    </div> : null }
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.name}>
                        <h2> <b>{character.name}</b> </h2>
                    </div>
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Height:</span> {character.height}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Mass:</span> {character.mass}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Hair color:</span> {character.hair_color}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Skin color:</span> {character.skin_color}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Birth year:</span> {character.birth_year}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Gender: </span>{character.gender}</p>
                    </div>
                    <hr />
                    <div>
                        <p className={classes.grid}><span className={classes.fieldName}>Home world: </span>{character.homeworld}</p>
                    </div>
                    <hr />
                    <div className={classes.grid}>
                        <span className={classes.fieldName}>Vehicles: </span>
                               <span>{
                                    character.vehicles.length ?
                                        character.vehicles.map((v, i) => <span key={i} className={classes.fieldValue}> {`${i + 1}) Name: ${v.name}; Model: ${v.model};`}<br /> </span> )
                                        : 'none'
                                }</span> 
                    </div>
                    <hr />
                    <div className={classes.grid}>
                            <span className={classes.fieldName}>Films: </span>
                            <span>
                            {character.films.map((f, i) => <span key={i}>{`${i + 1}) Episod ${f.episode_id}: ${f.title}; `}<br /></span> )}
                            </span>
                    </div>
                </div>
            </div>
            </>
    )
}