"use client";

import { useEffect } from 'react';

export default function FAQBehaviorClient() {
    useEffect(() => {
        const selector = '.faq-item';
        const items = Array.from(document.querySelectorAll(selector));
        if (!items.length) return;

        function onToggle(e) {
            const opened = e.target;
            if (!opened.open) return; // only react when an item is opened
            items.forEach((it) => {
                if (it !== opened && it.open) it.open = false;
            });
        }

        items.forEach((it) => it.addEventListener('toggle', onToggle));
        return () => items.forEach((it) => it.removeEventListener('toggle', onToggle));
    }, []);

    return null;
}
