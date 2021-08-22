import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import FAQ from 'src/components/FAQ';
import NotFound from 'src/components/NotFound';
import Search from 'src/components/Search';

import './style.scss';

function getResultItems(items) {
  return items.map((result) => ({
    id: result.id,
    imageUrl: result.owner.avatar_url,
    title: result.full_name,
    username: result.owner.login,
    description: result.description,
  }));
}

export default function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);

  const loadRepos = () => {
    setLoading(true);
    setHasError(false);

    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=9`)

      .then(({ data }) => {
        const { items, total_count: totalCount } = data;
        setResults([
          ...results,
          ...items,
        ]);
        setTotal(totalCount);
        setMessage(`La recherche a donné ${totalCount} résultat${totalCount > 1 ? 's' : ''}`);
      })
      .catch((error) => {
        console.log(error);
        setMessage('Une erreur est survenue');
        setHasError(true);
      })
      .finally(() => {
        setLoading(false);
        setMessageVisible(true);
      });
  };
  const setSearchQuery = () => {
    setPage(1);
    setResults([]);
    setQuery(search);
  };

  useEffect(() => {
    if (query !== '') {
      loadRepos();
    }
  }, [query, page]);

  const showLoadMore = total > 9 && !loading && results.length < total;

  return (
    <Container className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Search
            search={search}
            setSearch={setSearch}
            onSubmitSearch={setSearchQuery}
            message={message}
            hasError={hasError}
            messageVisible={messageVisible}
            loading={loading}
            setMessageVisible={() => setMessageVisible(false)}
            results={getResultItems(results)}
            onClickLoadMore={() => setPage(page + 1)}
            showLoadMore={showLoadMore}
          />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route><NotFound /></Route>
      </Switch>
    </Container>
  );
}
