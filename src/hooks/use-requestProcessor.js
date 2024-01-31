/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function RequestProcessor() {
  const queryClient = useQueryClient();

  function useCustomQuery(key, queryFunction, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function useCustomMutate(key, mutationFunction, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSuccess: (data) => {
        console.log(data)
      },
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { useCustomQuery, useCustomMutate };
}