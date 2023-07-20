import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './../Phonebook/Phonebook.module.css';
// import { useAuth } from 'hooks';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';
// import PropTypes from 'prop-types';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  const loading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log({
      name: `${form.elements.name.value}`,
      email: `${form.elements.email.value}`,
      password: `${form.elements.password.value}`,
    });
    dispatch(
      register({
        name: `${form.elements.name.value}`,
        email: `${form.elements.email.value}`,
        password: `${form.elements.password.value}`,
      })
    );
    // form.reset();
  };

  return (
    <>
      <div className={`${css.card}`}>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            //   value={}
            //   onChange={e => setName(e.target.value)}
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Only for display, doesn't have to be short. Cannot be modified later."
            placeholder="Displayed username"
            required
          />

          <label className={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={css.input}
            type="email"
            id="email"
            name="email"
            // value={email}
            // onChange={e => setemail(e.target.value)}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Email address used to log in."
            placeholder="email@domain.com"
            required
          />

          <label className={css.label} htmlFor="password">
            Password
          </label>
          <input
            className={css.input}
            type="text"
            id="password"
            name="password"
            // value={password}
            // onChange={e => setpassword(e.target.value)}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Password used to log in."
            placeholder="password"
            required
          />
          <button className={`${css.login} ${css.button}`} type="submit">
            Register
          </button>
        </form>
        {loading ? <Loader /> : ''}
      </div>
    </>
  );
};

// RegisterForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   addContactHandle: PropTypes.func.isRequired,
//   setName: PropTypes.func.isRequired,
//   setpassword: PropTypes.func.isRequired,
// };
