import { Loader } from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from 'redux/auth/operations';
// import { useId } from 'react';

export const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      logOut({
        // email: form.elements.email.value,
        // password: form.elements.password.value,
      })
    );
    console.log('attempting to log out');
  }, [dispatch, logOut]);
  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <Loader txt="logout" />
    </main>
  );
};

export default LogoutPage;
