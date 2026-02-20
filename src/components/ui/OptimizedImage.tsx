import React, { useEffect, useRef, useState } from "react";

type Props = {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    sizes?: string;
    placeholder?: string; // low-res blur data URL or small image path
};

export default function OptimizedImage({
    src,
    alt,
    className,
    width,
    height,
    sizes = "(max-width: 1024px) 100vw, 1024px",
    placeholder,
}: Props) {
    const [visible, setVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if ("loading" in HTMLImageElement.prototype) {
            // native lazy loading supported
            setVisible(true);
            return;
        }

        const node = imgRef.current;
        if (!node) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        io.disconnect();
                    }
                });
            },
            { rootMargin: "200px" }
        );

        io.observe(node);
        return () => io.disconnect();
    }, []);

    // Provide a WebP fallback via vite-imagetools query if available at build time
    const webpSrc = src.endsWith(".svg") ? src : `${src}?format=webp`;

    return (
        <div
            style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
            className={`overflow-hidden ${className ?? ""}`}
        >
            <img
                ref={imgRef}
                src={visible ? src : placeholder ?? src}
                srcSet={visible ? `${webpSrc} 1x` : undefined}
                sizes={sizes}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "filter 300ms, opacity 300ms",
                    filter: placeholder && !visible ? "blur(12px)" : "none",
                    opacity: visible ? 1 : 0.99,
                }}
            />
        </div>
    );
}
