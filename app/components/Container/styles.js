import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryColor: '#bfb7e6',
});

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor'
  },
})
