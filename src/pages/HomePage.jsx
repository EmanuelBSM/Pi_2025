import Header from '../componentes/header.jsx';
import Carrossel from '../componentes/Carousel.jsx';
import Pg7 from '../pages/pg7.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <Carrossel />
      <Pg7 />
      {/* Conteúdo da página inicial pode ser adicionado aqui futuramente */}
      <main style={{ minHeight: '80vh', background: '#f2f2f2' }}></main>
    </>
  );
} 