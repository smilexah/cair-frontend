// Global type definitions
import type { ReactNode } from 'react';

declare global {
  type LayoutProps<T extends string = string> = {
    children: ReactNode;
    params: Promise<{ locale: string; [key: string]: string }>;
  };

  type PageProps<T extends string = string> = {
    params: Promise<{ locale: string; [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };
}

export {};

