'use client';

import { useEffect, useState } from 'react';

interface ObfuscatedTextProps {
  data: string;
}

export function ObfuscatedText({ data }: ObfuscatedTextProps) {
  const [decoded, setDecoded] = useState('');

  useEffect(() => {
    try {
      setDecoded(atob(data));
    } catch (e) {
      console.error('Failed to decode Base64:', data);
      setDecoded(data);
    }
  }, [data]);

  if (!decoded) return <span>Loading...</span>;

  return decoded;
}
