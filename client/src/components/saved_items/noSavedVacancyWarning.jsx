import { Card } from '@material-ui/core'


export const NoSavedVacancyWarning = () => {
    return (
            <Card style={{padding: 40, fontSize: 17}}>
                There is no character, only emptyness... To avoid looking into emptyness you need to hit little Yoda on the <b><a style={{color: '#6284B2'}} href="/">main</a></b> page.
            </Card>
    )
}