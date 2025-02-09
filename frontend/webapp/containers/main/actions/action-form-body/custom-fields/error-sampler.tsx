import React, { useEffect, useMemo } from 'react';
import { Input } from '@/reuseable-components';
import { isEmpty, safeJsonParse } from '@/utils';
import type { ErrorSamplerSpec } from '@/types';

type Props = {
  value: string;
  setValue: (value: string) => void;
  errorMessage?: string;
};

type Parsed = ErrorSamplerSpec;

const MIN = 0,
  MAX = 100;

const ErrorSampler: React.FC<Props> = ({ value, setValue, errorMessage }) => {
  const mappedValue = useMemo(() => safeJsonParse<Parsed>(value, { fallback_sampling_ratio: 0 }).fallback_sampling_ratio, [value]);

  const handleChange = (val: string) => {
    const num = Math.max(MIN, Math.min(Number(val), MAX)) || MIN;

    const payload: Parsed = {
      fallback_sampling_ratio: num,
    };

    const str = isEmpty(payload.fallback_sampling_ratio) ? '' : JSON.stringify(payload);

    setValue(str);
  };

  useEffect(() => {
    if (isEmpty(safeJsonParse(value, {}))) handleChange('0');
  }, [value]);

  return <Input title='Fallback sampling ratio' required type='number' min={MIN} max={MAX} value={mappedValue} onChange={({ target: { value: v } }) => handleChange(v)} errorMessage={errorMessage} />;
};

export default ErrorSampler;
