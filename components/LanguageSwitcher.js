"use client";

import { useEffect, useRef, useState } from "react";

const LANGUAGES = [
    { label: "English", value: "en", flag: "us" },
    { label: "Español", value: "es", flag: "es" },
    { label: "Français", value: "fr", flag: "fr" },
    { label: "Deutsch", value: "de", flag: "de" },
    { label: "Português", value: "pt", flag: "pt" },
    { label: "Italiano", value: "it", flag: "it" },
    { label: "Nederlands", value: "nl", flag: "nl" },
    { label: "Polski", value: "pl", flag: "pl" },
    { label: "Русский", value: "ru", flag: "ru" },
    { label: "日本語", value: "ja", flag: "jp" },
    { label: "한국어", value: "ko", flag: "kr" },
    { label: "中文 (简体)", value: "zh-CN", flag: "cn" },
    { label: "العربية", value: "ar", flag: "sa" },
    { label: "हिन्दी", value: "hi", flag: "in" },
    { label: "বাংলা", value: "bn", flag: "bd" },
    { label: "Türkçe", value: "tr", flag: "tr" },
    { label: "Tiếng Việt", value: "vi", flag: "vn" },
    { label: "ไทย", value: "th", flag: "th" },
    { label: "Indonesia", value: "id", flag: "id" },
    { label: "Kiswahili", value: "sw", flag: "ke" },
    { label: "Українська", value: "uk", flag: "ua" },
];

// Load Google Translate's free script ONCE (shared across every instance).
let scriptEnsured = false;
function ensureGoogleTranslate() {
    if (scriptEnsured || document.getElementById("lr-gt-script")) {
        scriptEnsured = true;
        return;
    }
    scriptEnsured = true;

    // Hide Google's default top banner so it never shifts the page.
    if (!document.getElementById("lr-gt-style")) {
        const style = document.createElement("style");
        style.id = "lr-gt-style";
        style.textContent =
            ".skiptranslate{display:none!important}" +
            "body{top:0!important}" +
            ".goog-te-banner-frame{display:none!important}" +
            ".goog-tooltip,.goog-tooltip:hover{display:none!important}" +
            ".goog-text-highlight{background:transparent!important;box-shadow:none!important}";
        document.head.appendChild(style);
    }

    window.googleTranslateElementInit = function () {
        try {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    { pageLanguage: "en", autoDisplay: false },
                    "lr-gt-element"
                );
            }
        } catch (e) {
            /* noop */
        }
    };

    const script = document.createElement("script");
    script.id = "lr-gt-script";
    script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
}

function readCurrentLang() {
    const match = document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/);
    return match ? match[1] : "en";
}

export default function LanguageSwitcher({ menuAlign = "right" }) {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState("en");
    const ref = useRef(null);

    useEffect(() => {
        ensureGoogleTranslate();
        setCurrent(readCurrentLang());

        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const choose = (lang) => {
        setOpen(false);
        if (lang === current) return;
        const value = `/auto/${lang}`;
        const host = window.location.hostname;
        // Clear old value, then set both root and host-scoped cookies.
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `googtrans=${value}; path=/`;
        document.cookie = `googtrans=${value}; domain=${host}; path=/`;
        try {
            localStorage.setItem("ngt_lang", lang);
        } catch (e) {
            /* noop */
        }
        window.location.reload();
    };

    const currentLang = LANGUAGES.find((l) => l.value === current) || LANGUAGES[0];

    return (
        <div className="lr-lang" ref={ref}>
            <button
                type="button"
                className="lr-lang-btn"
                onClick={() => setOpen((o) => !o)}
                aria-label="Change language"
                aria-haspopup="true"
                aria-expanded={open}
            >
                <span className="lr-globe" aria-hidden="true">🌐</span>
                <span>{currentLang.value.toUpperCase()}</span>
                <span className="lr-arrow" data-open={open || undefined} aria-hidden="true">▾</span>
            </button>
            {open && (
                <div
                    className={`lr-lang-menu ${menuAlign === "right" ? "align-right" : "align-left"}`}
                    role="listbox"
                >
                    {LANGUAGES.map((l) => (
                        <div
                            key={l.value}
                            className={`lr-lang-option ${l.value === current ? "active" : ""}`}
                            role="option"
                            aria-selected={l.value === current}
                            onClick={() => choose(l.value)}
                        >
                            {l.flag && (
                                <img
                                    src={`https://flagcdn.com/16x12/${l.flag}.png`}
                                    width={16}
                                    height={12}
                                    alt=""
                                />
                            )}
                            <span>{l.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
