import React, { useEffect, useState } from 'react';
import { getUserLibraryOrders } from '../api/digitalAssets';
import Footer from '../components/Footer';
import LibraryCard from '../components/LibraryCard';
import { useAuth } from '../utils/context/authContext';

export default function MyLibrary() {
  const [library, setLibrary] = useState();
  const { user } = useAuth();

  const getMyLibraryOrder = () => {
    getUserLibraryOrders(user.uid).then(setLibrary);
  };

  useEffect(() => {
    getMyLibraryOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (library) ? (
      <>
        <div className="LibraryTitle">
          <h1 style={{ color: 'white', marginBottom: '30px' }}>My Library</h1>
          <div className="MyLibraryCard">
            {library && library?.map((obj) => <LibraryCard productObj={obj} key={obj.firebaseKey} onUpdate={getMyLibraryOrder} />)}
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <div style={{ color: 'red' }}>
        <h1> </h1>
      </div>
    )
  );
}
