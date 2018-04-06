import { StyleSheet } from 'react-native';
import { color, fontSize, fontFamily, windowWidth, normalize } from '../../../theme/styles';

const resizeMode = 'contain';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8 * 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  item: {
    flex: 1,
    height: 160,
    margin: 1
  },

  list: {
    flex: 1
  },

  postImage: {
    height: 10,
    width: 10,
    resizeMode: 'cover'  // or 'stretch'    
},

  postTitle: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: 'bold',    
    textAlign: 'center'
  },
  postBody: {
    fontSize: 10,
    marginBottom: 0,
    textAlign: 'center'
  },
  separator: {
    height: 1,
    marginBottom: 4,
    backgroundColor: '#eee'
  },
  postYear: {
    textAlign: 'center'
  },
  postThumbnail: {
    width: 53,
    height: 81
  }

});

export default styles;
