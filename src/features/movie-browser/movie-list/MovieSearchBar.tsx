import { FormEventHandler, useEffect, useState } from 'react';
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';
import { Button } from '../../../components/atoms/Button';
import { Input } from '../../../components/atoms/Input';
import { convertQuery, StateQueryParams } from '../../../services/queryParams';
import styles from './MovieSearchBar.module.css';

export interface MovieSearchBar {
  params: StateQueryParams;
  onApplyClick: (params: StateQueryParams) => void;
  totalPages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}
export const MovieSearch = ({
  params,
  onApplyClick,
  totalPages,
  onPrevClick,
  onNextClick,
  ...rest
}: MovieSearchBar) => {
  const [formValues, setFormValues] = useState(() =>
    convertQuery.fromStateToForm(params)
  );

  useEffect(() => {
    setFormValues(convertQuery.fromStateToForm(params));
  }, [params]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onApplyClick(convertQuery.fromFormToState(formValues));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root} {...rest}>
      <Input
        id="movie-search-query"
        placeholder="Wpisz nazwę filmu"
        value={formValues.query}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            page: '1',
            query: e.target.value,
          }))
        }
      />
      <Input
        autoComplete="disable"
        type="number"
        id="movie-search-year"
        placeholder="Rok wydania filmu"
        value={formValues.year}
        onChange={(e) =>
          setFormValues((prev) => ({
            ...prev,
            page: '1',
            year: e.target.value,
          }))
        }
      />
      Strona
      <Input
        className={styles.pageField}
        autoComplete="disable"
        type="number"
        id="movie-search-page"
        min="1"
        max={totalPages}
        placeholder="Strona"
        value={formValues.page}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, page: e.target.value }))
        }
      />
      z  {totalPages}
      <Button type="submit">Zastosuj</Button>
      <div className={styles.spacer} />
      <Button type="button" onClick={onPrevClick}>
        <RiArrowLeftFill />
      </Button>
      <Button type="button" onClick={onNextClick}>
        <RiArrowRightFill />
      </Button>
    </form>
  );
};
