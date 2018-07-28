import { images } from '../../../constants/Images';
import { layout } from '../../../constants/Layout';

export const styles = {
    container: {
        height: '100%'
    },
    centerContainer: {
        width: '65vw',
        height: '50vh',
        backgroundColor: 'transparent',
        display: 'flex',
        flexWrap: 'wrap',
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        overflow: 'hidden'
    },
    headshotContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    headshot: {
        borderWidth: 5,
        borderColor: 'black',
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
        color: 'white'
    }
}