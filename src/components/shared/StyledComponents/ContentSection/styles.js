import { layout } from '../../../../constants/Layout';

export const styles = {
    container: {
        width: 'calc(65vw - 20px)',
        // marginRight: 20,
        // flex: 1,
        height: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        // borderWidth: 0,
        // borderTopWidth: 3,
        // borderBottomWidth: 3,
        // borderStyle: 'solid',
        // borderColor: 'whitesmoke',
        color: 'white'
    },
    title: {
        width: '100%',
        maxHeight: '33%',
        margin: 0,
        marginBottom: 10,
        fontSize: '5vw',
        fontFamily: layout.primaryFont,
        textAlign: 'left',
        color: 'whitesmoke',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
}