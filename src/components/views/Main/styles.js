import { images } from '../../../constants/Images';
import { layout } from '../../../constants/Layout';

export const styles = {
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topContainer: {
        width: '65vw',
        height: '25vh',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    centerRow: {
        width: '100vw',
        height: '50vh',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center'
    },
    centerContainer: {
        width: '65vw',
        height: '50vh',
        // backgroundColor: 'rgba(0, 0, 0, .8)',
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'whitesmoke',
        overflow: 'hidden',
        borderRadius: 5,
        zIndex: 5,
        boxSizing: 'border-box'
    },
    carousel: {
        width: 'calc((65vw * 4) - 20px)',
        height: 'calc(50vh - 20px)',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        transition: 'margin-left .5s linear',
    },
    dismissTypeWriterBtn: {
        position: 'absolute',
        right: 0,
        fontSize: 12
    }
}