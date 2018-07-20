import { images } from '../../../constants/Images';
import { layout } from '../../../constants/Layout';

export const styles = {
    container: {
        height: '100%'
    },
    centerContainer: {
        width: '65vw',
        height: '50vh',
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'slategray'
    },
    headshotContainer:{
        height: window.innerWidth > 400 ? '100%' : '40%',
        width: window.innerWidth > 400 ? '40%' : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headshot: {
        height: '20vw',
        width: '20vw',
        borderRadius: '50%',
        backgroundColor: 'lightblue',
        backgroundImage: `url(${images.headshot})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }, 
    taglineContainer:{
        height: window.innerWidth > 400 ? '100%' : '60%',
        width: window.innerWidth > 400 ? '60%' : '100%',
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    taglineRow: {
        width: '100%',
        fontSize: '5vw',
        fontFamily: layout.primaryFont,
        color: 'lightgray'
    }
}