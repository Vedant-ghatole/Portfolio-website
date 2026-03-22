"use client";

import { motion, MotionValue, useTransform } from 'framer-motion';

interface TreeLineProps {
    scrollYProgress: MotionValue<number>;
}

export const TreeLine = ({ scrollYProgress }: TreeLineProps) => {
    // Height maps directly to global scroll progress
    const height = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%']);

    // Thickness slightly increases as it grows deeper into the page
    const width = useTransform(scrollYProgress, [0, 1], ['2px', '8px']);

    // Color transitions: Purple -> Blue -> Cyan -> Green (Seed to Bloom)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ['#9d4edd', '#4361ee', '#4cc9f0', '#06d6a0']
    );

    const boxShadow = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        [
            '0 0 20px #9d4edd',
            '0 0 20px #4361ee',
            '0 0 20px #4cc9f0',
            '0 0 20px #06d6a0'
        ]
    );

    return (
        <div className="fixed left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 -z-10 pointer-events-none flex justify-center">
            <motion.div
                className="rounded-full"
                style={{
                    height,
                    width,
                    backgroundColor,
                    boxShadow,
                    transformOrigin: 'top',
                }}
            />
        </div>
    );
};
