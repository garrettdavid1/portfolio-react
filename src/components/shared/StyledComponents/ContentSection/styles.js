import { layout } from '../../../../constants/Layout';

export const styles = {
    container: {
        width: '100%',
        height: 'auto',
        padding: '10px',
        backgroundColor: '#DEDECD',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        borderWidth: 0,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderStyle: 'solid',
        borderColor: 'slategray'
    },
    title: {
        width: '200vw',
        fontSize: '10vw',
        fontFamily: layout.primaryFont,
        textAlign: 'left',
        color: '#DEDECD',
        WebkitTextStrokeWidth: '3px',
        WebkitTextStrokeColor: 'black',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
}