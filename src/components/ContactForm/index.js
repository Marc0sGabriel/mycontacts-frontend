// eslint-disable-next-line import/named
import { useState } from 'react';
import PropTypes from 'prop-types';
import useErrors from '../../hooks/useErrors';
import isValidEmail from '../../utils/isValidEmail';
import FormGroup from '../FormGroup';
import Input from '../Input/input';
import Select from '../Select/Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';
import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    removeError,
    setError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name, phone) && errors.length === 0;

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isValidEmail(event.target.value)) {
      setError({
        field: 'email',
        message: 'Formato de email inválido',
      });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      category,
    });

    setName('');
    setEmail('');
    setPhone('');
    setCategory('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameChange}
          $error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          $error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone *"
          type="tel"
          maxLength="15"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Telegram">Telegram</option>
          <option value="Whatsapp">Whatsapp</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </FormGroup>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
