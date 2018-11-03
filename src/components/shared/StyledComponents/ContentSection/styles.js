import { layout } from '../../../../constants/Layout';

export const styles = {
    container: {
        width: 'calc(65vw - 20px)',
        height: 'calc(50vh - 20px)',
        boxSizing: 'border-box',
        padding: '10px',
        position: 'absolute',
        top: '-50vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        color: 'white',
        transition: 'top .6s linear'
    },
    heading: {
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