
import { About, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
    </div>
  </div>
);

export default Home;
