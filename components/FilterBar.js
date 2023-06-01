import {
  React,
  useState,
  useEffect,
} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import getDigitalAssets from '../api/digitalAssets';
import ProductCard from './ProductCard';

export default function CategoryBar() {
  const [key, setKey] = useState('home');
  const [products, setProducts] = useState();

  const displayProducts = () => {
    getDigitalAssets().then(setProducts);
  };

  useEffect(() => {
    displayProducts();
  }, []);

  return (
    <>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-4 mt-5"
          style={{ background: '#3D3D3D', borderRadius: '50px', justifyContent: 'center' }}
          justify
        >
          <Tab.Container eventKey="home" title="All" defaultActiveKey="first">
            <div className="d-flex flex-wrap">
              {products?.map((product) => <ProductCard key={product.firebaseKey} productObj={product} onUpdate={displayProducts} />)}
            </div>
          </Tab.Container>
          <Tab eventKey="Props" title="Props">
            {/* {products?.map((product) => {
              if (product.category === "props"){
              }
            })} */}
          </Tab>
          <Tab eventKey="PBR Textures" title="PBR Textures">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Environment Art" title="Environment Art">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Character" title="Character Art">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Lighting" title="Lighting">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Procedural" title="Procedural">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
