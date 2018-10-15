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
        backgroundColor: 'rgba(0, 0, 0, .8)',
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
        // flex: 1,
        height: 'calc(50vh - 20px)',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        transition: 'margin-left .5s linear'
    },
    homeContent: {
        height: '100%',
        width: 'calc(65vw - 20px)',
        // marginRight: 20,
        // flex: 1,
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    },
    headshotContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    headshot: {
        borderWidth: 1,
        borderColor: 'whitesmoke',
        borderStyle: 'solid',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        backgroundImage: `url(${images.headshot})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    taglineContainer:{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    taglineRow: {
        width: '100%',
        fontSize: '5vw',
        fontFamily: layout.primaryFont,
        color: 'whitesmoke',
        whiteSpace: 'normal'
    }
}