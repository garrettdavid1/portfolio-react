import { images } from '../../../constants/Images';
import { layout } from '../../../constants/Layout';

export const styles = {
    container: {
        width: 'calc(65vw - 20px)',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden'
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
        fontFamily: layout.primaryFont,
        color: 'whitesmoke',
        whiteSpace: 'normal'
    }
}