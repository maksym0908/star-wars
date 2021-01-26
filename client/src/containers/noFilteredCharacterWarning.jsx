import { Card } from '@material-ui/core'


export const NoFilteredCharacterWarning = () => {
    return (
        <Card style={{ padding: 40, fontSize: 17, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{margin: 'auto 0px'}}>
                There is no character, only emptyness... Try another name for searching.
                </span>
            <img style={{ width: 80, marginRight: 100 }} src="https://i.pinimg.com/736x/bc/40/2f/bc402fc3f5660297570930062bea23cb.jpg" alt="no result" />
        </Card>
    )
}