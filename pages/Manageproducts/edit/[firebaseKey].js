import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleDigitalAssets } from '../../../api/digitalAssets';
import CreateAssetForm from '../../../components/createAssetForm';

export default function EditAssetForm() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDigitalAssets(firebaseKey).then(setProduct);
  }, [firebaseKey]);

  return (
    <CreateAssetForm obj={product} />
  );
}
