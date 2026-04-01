'use client'
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/useIsMobile"

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 }
    })
}

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 }
    })
}

export const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
}

export const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
}

export const expandX = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' }
    }
}

const VIEWPORT = { once: true, margin: '-20px' }

export function AnimatedEntrance({ index = 0, children, className }) {
    const isMobile = useIsMobile();
    return (
        <motion.div
            className={className}
            custom={index}
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedFade({ index = 0, children, className }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            className={className}
            custom={index}
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeIn}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedSlideLeft({ children, className }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            className={className}
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideLeft}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedSlideRight({ children, className }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            className={className}
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideRight}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedDivider({ className }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            className={className}
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={expandX}
        />
    )
}

export function AnimatedButton({ children, className, ...props }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={4}
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? {} : { scale: 0.97 }}
        >
            <div className={className} {...props}>
                {children}
            </div>
        </motion.div>
    )
}