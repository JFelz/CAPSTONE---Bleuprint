import React, { useEffect, useState } from 'react';
import { getUserLibraryOrders } from '../../api/digitalAssets';
import TotalRevenue from '../../components/TotalRevenue';
import { useAuth } from '../../utils/context/authContext';

const FinancialAnalytics = () => {
  const [amount, setAmount] = useState();
  const { user } = useAuth();

  const getData = () => {
    getUserLibraryOrders(user.uid).then(setAmount);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div>
        {amount?.map((obj) => <TotalRevenue key={obj.firebaseKey} currentRevenue={obj} />)};
      </div>
    </>
  );
};

export default FinancialAnalytics;
