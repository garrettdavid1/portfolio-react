import { layout } from '../../../../constants/Layout';

export const styles = {
    container: {
        width: 'calc(65vw - 20px)',
        height: 'calc(50vh - 20px)',
        boxSizing: 'border-box',
        padding: '10px',
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        color: 'white',
        zIndex: 5,
        textAlign: 'left'
    },
    heading: {
        width: '100%',
        maxHeight: '33%',
        margin: 0,
        marginBottom: 10,
        fontSize: '4vw',
        fontFamily: layout.primaryFont,
        textAlign: 'left',
        color: 'whitesmoke',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
}