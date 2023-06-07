import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { createDigitalAssets, updateDigitalAssets } from '../api/digitalAssets';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  imageUrl_1: '',
  imageUrl_2: '',
  imageUrl_3: '',
  price: 0,
  category: '',
};

function CreateAssetForm({ obj }) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateDigitalAssets(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid, userName: user.displayName };
      createDigitalAssets(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateDigitalAssets(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Product</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Product Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Product Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Main Product Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="imageUrl"
          value={formInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter a second product image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an interior image url"
          name="secondImg"
          value={formInput.imageUrl_1}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter a third product image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter another interior image url"
          name="imageUrl_2"
          value={formInput.imageUrl_2}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter a fourth product image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter one more interior image url"
          name="imageUrl_3"
          value={formInput.imageUrl_3}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="$USD" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Property type SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Main Category">
        <Form.Select
          aria-label="category"
          name="category"
          onChange={handleChange}
          className="mb-3"
          value={formInput.category} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="props">Props</option>
          <option value="character art">Character Art</option>
          <option value="environment art">Environment Art</option>
          <option value="texturing">Texturing/Material</option>
          <option value="lighting">Lighting</option>
          <option value="procedural">Procedural</option>
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Product</Button>
    </Form>
  );
}

CreateAssetForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    imageUrl_1: PropTypes.string,
    imageUrl_2: PropTypes.string,
    imageUrl_3: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

CreateAssetForm.defaultProps = {
  obj: initialState,
};

export default CreateAssetForm;
