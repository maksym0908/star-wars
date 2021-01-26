import classes from './warning.module.css'

export const Warning = () => {
    return (
        <div className={classes.container}>Kindly proceed with  
        <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86sgsm7k4ak7ov&redirect_uri=http://localhost:3000&state=f123467876&scope=r_liteprofile%20r_emailaddress%20">
             {" "}sign-in</a> and may the force be with you...
            </div>
    )
}