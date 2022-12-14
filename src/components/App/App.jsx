import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import {  selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Container, Title } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ThreeCircles } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook </Title>
      <ContactForm />
      <Title>Contacts  </Title>
      <Filter />
      <ThreeCircles
          height="40"
          width="40"
          color="#767660"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={isLoading}
          ariaLabel="three-circles-rotating"
      />
      
      <ContactList />
    </Container>
  );
};
