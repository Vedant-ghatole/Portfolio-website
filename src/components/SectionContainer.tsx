import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const SectionContainer = ({ children, className = '', id }: SectionContainerProps) => {
    return (
        <section id={id} className={`relative min-h-[120vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center ${className}`}>
            {children}
        </section>
    );
};
