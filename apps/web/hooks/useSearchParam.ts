import {useSearchParams} from 'next/navigation';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

export const useSearchParam = (
  param: string
): [string | null, Dispatch<SetStateAction<string | null>>] => {
  const searchParams = useSearchParams();
  const search = searchParams.get(param);
  const [value, setValue] = useState<string | null>(search ?? null);

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (value === null || value === '') {
      updatedSearchParams.delete(param);
    } else {
      updatedSearchParams.set(param, value);
    }

    const queryParamsString = updatedSearchParams.toString().replace(/=(?=&|$)/gm, '');
    if (queryParamsString.length > 0) {
      window.history.pushState(null, '', '?' + queryParamsString);
    } else {
      window.history.pushState(null, '', '');
    }
  }, [value, searchParams]);

  return [value, setValue];
};