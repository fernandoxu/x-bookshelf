/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { useAsync } from '../utils/hooks';
import { client } from '../utils/api-client';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

import { FaSearch, FaTimes } from 'react-icons/fa';
import { BookListUL, Input, Spinner } from '../components/lib';

import * as colors from '../styles/colors';
import { BookRow } from '../components/book-row';

const DiscoverBooksScreen = () => {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState();
  const [queried, setQueried] = useState(false);

  useEffect(() => {
    if (!queried) return;
    run(client(`books?query=${encodeURIComponent(query)}`));
  }, [queried, query, run]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQueried(true);
    setQuery(e.target.elements.search.value);
  };

  return (
    <div
      css={{ maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0' }}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input placeholder='Search books' id='search' css={{ width: '100%' }} />
        <Tooltip label='Search Books'>
          <label htmlFor='search'>
            <button
              type='submit'
              css={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'transparent',
              }}
            >
              {isLoading ? (
                <Spinner />
              ) : isError ? (
                <FaTimes aria-label='error' css={{ color: colors.danger }} />
              ) : (
                <FaSearch aria-label='search' />
              )}
            </button>
          </label>
        </Tooltip>
      </form>

      {isError ? (
        <div css={{ color: colors.danger }}>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        data?.books?.length ? (
          <BookListUL css={{ marginTop: 20 }}>
            {data.books.map((book) => (
              <li key={book.id} aria-label={book.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  );
};

export { DiscoverBooksScreen };
