// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/contacts/selectors';
import { Phonebook } from 'components/Phonebook/Phonebook';
// import { Loader } from 'components/Loader/Loader';
export const PhonebookPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <Phonebook />
      {/* {isLoading ? <Loader /> : <Phonebook />} */}
    </main>
  );
};

export default PhonebookPage;
