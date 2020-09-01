import { useQuery } from '@apollo/react-hooks';

const useTransactionsQuery = (vars, QUERY) => {
  const setPage = () => {
    if ((vars.page = 1)) return null;
    if (vars.page > 1) return vars.page * 10 - 10;
  };

  const { data, loading } = useQuery(QUERY, {
    variables: { after: setPage(), first: vars.pageSize },
  });
  return { data, loading };
};

export default useTransactionsQuery;
