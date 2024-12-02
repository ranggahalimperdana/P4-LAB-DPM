import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  score: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#f44336',
    width: '100%', // Menggunakan lebar penuh untuk tombol reset
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
