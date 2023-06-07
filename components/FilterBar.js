import {
  React,
  useState,
  useEffect,
} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  getCharacterArt,
  getDigitalAssets,
  getEnvironmentArt,
  getLighting,
  getProcedural,
  getProps,
  getTexturing,
} from '../api/digitalAssets';
import ProductCard from './ProductCard';

export default function CategoryBar() {
  const [key, setKey] = useState('home');
  const [products, setProducts] = useState();
  const [props, setProps] = useState();
  const [textures, setTextures] = useState();
  const [char, setChar] = useState();
  const [environ, setEnviron] = useState();
  const [lighting, setLighting] = useState();
  const [procedural, setProcedural] = useState();
  // const [, ] = useState();

  const displayProducts = () => {
    getDigitalAssets().then(setProducts);
  };

  const displayCategories = () => {
    getProps().then(setProps);
    getTexturing().then(setTextures);
    getCharacterArt().then(setChar);
    getEnvironmentArt().then(setEnviron);
    getLighting().then(setLighting);
    getProcedural().then(setProcedural);
  };

  useEffect(() => {
    displayProducts();
    displayCategories();
  }, []);

  return (
    <>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-4 mt-5"
          style={{
            background: '#3D3D3D',
            borderRadius: '50px',
            justifyContent: 'space-evenly',
          }}
        >
          <Tab.Container eventKey="home" title="All" defaultActiveKey="first">
            <div className="d-flex flex-wrap">
              {products?.map((product) => <ProductCard key={product.firebaseKey} productObj={product} onUpdate={displayProducts} />)}
            </div>
          </Tab.Container>
          <Tab eventKey="Props" title="Props">
            <div className="d-flex flex-wrap">
              {props?.map((prop) => <ProductCard key={prop.firebaseKey} productObj={prop} onUpdate={displayProducts} />)}
            </div>
          </Tab>
          <Tab eventKey="Textures/Materials" title="Textures/Materials">
            <div className="d-flex flex-wrap">
              {textures?.map((texture) => <ProductCard key={texture.firebaseKey} productObj={texture} onUpdate={displayProducts} />)}
            </div>
          </Tab>
          <Tab eventKey="Environment Art" title="Environment Art">
            <div className="d-flex flex-wrap">
              {environ?.map((environment) => <ProductCard key={environment.firebaseKey} productObj={environment} onUpdate={displayProducts} />)}
            </div>
          </Tab>
          <Tab eventKey="Character" title="Character Art">
            <div className="d-flex flex-wrap">
              {char?.map((character) => <ProductCard key={character.firebaseKey} productObj={character} onUpdate={displayProducts} />)}
            </div>
          </Tab>
          <Tab eventKey="Lighting" title="Lighting">
            <div className="d-flex flex-wrap">
              {lighting?.map((lightObj) => <ProductCard key={lightObj.firebaseKey} productObj={lightObj} onUpdate={displayProducts} />)}
            </div>
          </Tab>
          <Tab eventKey="Procedural" title="Procedural">
            <div className="d-flex flex-wrap">
              {procedural?.map((proceduralObj) => <ProductCard key={proceduralObj.firebaseKey} productObj={proceduralObj} onUpdate={displayProducts} />)}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

CategoryBar.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    category: PropTypes.string,
    uid: PropTypes.string,
    userName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  map: PropTypes.func.isRequired,
};
