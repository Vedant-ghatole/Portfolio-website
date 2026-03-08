"use client";

import { motion, MotionValue, useTransform } from 'framer-motion';

interface TreeLineProps {
    scrollYProgress: MotionValue<number>;
}

export const TreeLine = ({ scrollYProgress }: TreeLineProps) => {
    // Height maps directly to global scroll progress
    const height = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%']);

    // Thickness slightly increases as it grows deeper into the page
    const width = useTransform(scrollYProgress, [0, 1], ['4px', '24px']);

    // Color transitions from young green to sturdy dark wood
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 1],
        ['#97c5b2', '#68a68f', '#a37b67', '#3f2a20']
    );

    return (
        <div className="fixed left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 -z-10 pointer-events-none flex justify-center">
            <motion.div
                className="rounded-full shadow-lg shadow-black/40"
                style={{
                    height,
                    width,
                    backgroundColor,
                    transformOrigin: 'top',
                }}
            />
        </div>
    );
};
