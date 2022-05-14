// type to represent the state in search bar
export interface UrlQueryParams {
  query?: string;
  page?: string;
  year?: string;
}

// type to hold actual state in memory
export interface StateQueryParams {
  query: string;
  page: number;
  year: number | undefined;
}

// type used by UI form
export interface FormQueryParams {
  query: string;
  page: string;
  year: string;
}

export const convertQuery = {
  fromUrlToState: (input: UrlQueryParams): StateQueryParams => {
    return {
      page: 'page' in input ? Number(input.page) : 1,
      query: 'query' in input ? String(input.query).trim() : '',
      year: 'year' in input ? Number(input.year) : undefined,
    };
  },
  fromStateToUrl: (input: StateQueryParams): UrlQueryParams => {
    const result: UrlQueryParams = {};
    if (input.page > 1) {
      result.page = String(input.page);
    }
    if (input.query !== '') {
      result.query = input.query;
    }
    if (input.year !== undefined) {
      result.year = String(input.year);
    }
    return result;
  },
  fromStateToForm: (input: StateQueryParams): FormQueryParams => {
    return {
      page: String(input.page),
      query: input.query,
      year: input.year === undefined ? '' : String(input.year),
    };
  },
  fromFormToState: (input: FormQueryParams): StateQueryParams => {
    const clamp = (year: number) =>
      year < 1890
        ? undefined
        : year > new Date().getFullYear()
        ? undefined
        : year;

    return {
      page: Number(input.page),
      query: input.query.trim(),
      year:
        input.year.trim() === '' ? undefined : clamp(Number(input.year.trim())),
    };
  },
};
