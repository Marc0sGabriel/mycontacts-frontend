import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import delay from '../../utils/delay';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import {
  Card,
  Container,
  ListHeader,
  Header,
  InputSearchContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchByName, setSearchByName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredByContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(searchByName.toLowerCase()),
      ),
    [contacts, searchByName],
  );

  useEffect(() => {
    async function loadContacts() {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3333/contacts?orderBy=${orderBy}`,
        {
          method: 'GET',
        },
      );

      await delay(800);

      const json = await response.json();
      setContacts(json);
      setIsLoading(false);
    }
    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((state) => (state === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchByName(event) {
    setSearchByName(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          onChange={handleSearchByName}
          value={searchByName}
          type="text"
          placeholder="Pesquise pelo nome..."
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredByContacts.length}
          {filteredByContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredByContacts.length > 0 && (
        <ListHeader $orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}

      {filteredByContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

// preflight
// OPTIONS
