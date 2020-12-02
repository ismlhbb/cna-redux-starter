import { NextPage } from 'next';
import { ExampleItem } from 'components/example/example-item';

const HomePage: NextPage = () => (
  <div>
    <h1>Home Page</h1>
    <ExampleItem props1="1" props2="3" />
  </div>
);

export default HomePage;
