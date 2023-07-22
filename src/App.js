
import { Container } from 'react-bootstrap';
import CustomNavBar from './components/Nav';
import Footer from './components/Footer'
import PageRoutes from './components/PageRoutes';




function App() {
  return (
    <>
        <Container className='bg-primary-subtle pe-0 ps-0 vh-100'>
          <CustomNavBar/>
          <PageRoutes />
          <Footer />
        </Container>
    </>
  );
}

export default App;
