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
import useScript from '../utils/useScript';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  price: 0,
  seller: '',
  category: '',
  uid: '',
  userName: '',
  firebaseKey: '',
};

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/g6TKfDrn-36ZBDDV/scene.splinecode');

// const myviewer = new marmoset.WebViewer( width, height, fileURL );

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

  useScript('https://unpkg.com/@splinetool/viewer@0.9.374/build/spline-viewer.js');

  // const params = { width: 1024, height: 768, autoStart: false };
  // const myviewer = marmoset.embed("url_to_myscene.mview", params);

  useEffect(() => {
    displayProducts();
    displayCategories();
  }, []);

  return (
    <>
      <div className="GDCData" />
      <div className="GDCTitle">
        <h1>The #1 Marketplace for 3D Artists</h1>
        <p style={{ fontSize: '15px', justifyContent: 'center', alignItems: 'center' }}><b>Curated 3D environments, characters, procedurals and more. Ready to use in games, film, and VFX projects.</b></p>
      </div>
      <div style={{ height: '330px' }} />
      <div className="MainPageBackground">
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mt-5 mb-5"
            style={{
              background: '#3D3D3D',
              borderRadius: '50px',
              justifyContent: 'space-evenly',
            }}
          >
            <Tab.Container eventKey="home" title="All" defaultactivekey="first">
              <div className="d-flex flex-wrap justify-content-center">
                {products && products?.map((product) => <ProductCard key={product.firebaseKey} productObj={product} onUpdate={displayProducts} />)}
              </div>
            </Tab.Container>
            <Tab eventKey="Props" title="Props">
              <div className="d-flex flex-wrap justify-content-center">
                {props && props?.map((prop) => <ProductCard key={prop.firebaseKey} productObj={prop} onUpdate={displayProducts} />)}
              </div>
            </Tab>
            <Tab eventKey="Textures/Materials" title="Textures/Materials">
              <div className="d-flex flex-wrap justify-content-center">
                {textures && textures?.map((texture) => <ProductCard key={texture.firebaseKey} productObj={texture} onUpdate={displayProducts} />)}
              </div>
            </Tab>
            <Tab eventKey="Environment Art" title="Environment Art">
              <div className="d-flex flex-wrap justify-content-center">
                {environ && environ?.map((environment) => <ProductCard key={environment.firebaseKey} productObj={environment} onUpdate={displayProducts} />)}
              </div>
            </Tab>
            <Tab eventKey="Character" title="Character Art">
              <div className="d-flex flex-wrap justify-content-center">
                {char && char?.map((character) => <ProductCard key={character.firebaseKey} productObj={character} onUpdate={displayProducts} />)}
              </div>
            </Tab>
            <Tab eventKey="Lighting" title="Lighting">
              <div className="d-flex flex-wrap justify-content-center">
                {lighting && lighting?.map((lightObj) => <ProductCard key={lightObj.firebaseKey} productObj={lightObj} onUpdate={displayProducts} />)}
              </div>
            </Tab>
            <Tab eventKey="Procedural" title="Procedural">
              <div className="d-flex flex-wrap justify-content-center">
                {procedural && procedural?.map((proceduralObj) => <ProductCard key={proceduralObj.firebaseKey} productObj={proceduralObj} onUpdate={displayProducts} />)}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="IndustryData" />
    </>
  );
}

CategoryBar.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    category: PropTypes.string,
    uid: PropTypes.string,
    userName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  map: PropTypes.func,
};

CategoryBar.defaultProps = {
  products: initialState,
};
