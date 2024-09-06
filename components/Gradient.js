import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
 
const Gradient = ({ children, headerPadding }) => {
    
    const headerHeight = useHeaderHeight();
    return <LinearGradient 
    colors={['#5A0003', '#360000', '#7A0000']}
    style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
     {children}
    </LinearGradient>
}

export default Gradient;