import { Button, Input } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Navbar.module.css'

export const Navbar = ({ filterCharacters, userInfo, lengthOfCharacter, handleSignOut }) => {
    const characterPage = useHistory().location.pathname.includes('character')
    const styles = {
        image: {
            width: 40, 
            display: 'block'
        },
        button: {
            display: 'flex',
            background: '#F9FCFF', 
            textTransform: 'none', 
            fontSize: 15, 
            marginLeft: 10, 
            color: '#6284B2'
        }, 
         navbar: {
             display: 'flex',
             margin: 'auto 0px'
         },
         input: {
             width: '350px',
            color: '#fff',
            borderRadius: '5px', 
            marginRight: '80'
        }, 
        savedCharactersNumber: {
            color: '#FFF',
            background: '#D64A4F',
            borderRadius: '30px', 
            display: 'flex', 
            textAlign: 'center', 
            lineHeight: 0.6, 
            padding: 5, 
            marginLeft: '10px'
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <span style={{display: 'flex'}}>
                <a href='/' style={{margin: 'auto 0px'}}><img style={styles.image} src="https://www.pngkey.com/png/full/142-1428384_resistance-logo-rebel-alliance.png" alt="Go back" title="Go home"/></a>
            {userInfo && <p style={{color: '#fff', fontSize: 17, marginLeft: 30}}>Welcome, <b>{userInfo.localizedFirstName + " " + userInfo.localizedLastName}</b> </p>}
                </span>

            <div style={styles.navbar}>
                <div style={{marginRight: 40}}>
                {!characterPage && <Input onChange={e => filterCharacters(e.target.value)} placeholder="Put in a name of a character you're looking for..." style={styles.input} />}
                </div>
                {!userInfo ? <Button style={styles.button} href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86sgsm7k4ak7ov&redirect_uri=http://localhost:3000&state=f123467876&scope=r_liteprofile%20r_emailaddress%20">Sign-in</Button>
                : <>  
                <Button style={styles.button} href="/saved-items">Saved characters <span style={styles.savedCharactersNumber}>{lengthOfCharacter}</span> </Button>
                 <Button style={styles.button} onClick={() => handleSignOut()}>Sign-out</Button>
                 </>
            }
            </div>
            </div>
            
        </div>
    )
}