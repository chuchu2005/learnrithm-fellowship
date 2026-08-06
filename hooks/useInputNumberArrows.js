// hooks/useInputNumberArrows.js

"use client";

import { useEffect } from "react";

export function useInputNumberArrows(ready) {
  useEffect(() => {
    if (!ready) return;

    const buttons = document.querySelectorAll(".input-number-arrows");

    const getNumber = (value) => {
      const n = parseFloat(value);
      return Number.isNaN(n) ? null : n;
    };

    const listeners = [];

    buttons.forEach((button) => {
      const inputGroup = button.closest(".input-group");
      const input = inputGroup?.querySelector('input[type="number"]');
      if (!input) return;

      const getStep = () => {
        const s = input.step && input.step !== "any" ? getNumber(input.step) : 1;
        return s && s > 0 ? s : 1;
      };

      const getPrecision = (number) => {
        const decimal = number.toString().split(".")[1];
        return decimal ? decimal.length : 0;
      };

      const clampValue = (value) => {
        const min = getNumber(input.min);
        const max = getNumber(input.max);
        let v = value;
        if (min !== null) v = Math.max(v, min);
        if (max !== null) v = Math.min(v, max);
        return v;
      };

      const syncDisabledState = () => {
        const currentValue = getNumber(input.value);
        const min = getNumber(input.min);
        const max = getNumber(input.max);
        const action = button.dataset.inputNumberAction;

        button.disabled =
          currentValue !== null &&
          ((action === "decrement" && min !== null && currentValue <= min) ||
            (action === "increment" && max !== null && currentValue >= max));
      };

      const handleClick = () => {
        const step = getStep();
        const precision = getPrecision(step);
        const min = getNumber(input.min);
        const currentValue = getNumber(input.value) ?? min ?? 0;
        const direction = button.dataset.inputNumberAction === "decrement" ? -1 : 1;
        const nextValue = clampValue(currentValue + direction * step);

        input.value = nextValue.toFixed(precision);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));

        inputGroup.querySelectorAll(".input-number-arrows").forEach((arrow) => {
          const relatedInput = arrow
            .closest(".input-group")
            ?.querySelector('input[type="number"]');
          if (relatedInput !== input) return;

          const action = arrow.dataset.inputNumberAction;
          const value = getNumber(input.value);
          const max = getNumber(input.max);

          arrow.disabled =
            value !== null &&
            ((action === "decrement" && min !== null && value <= min) ||
              (action === "increment" && max !== null && value >= max));
        });
      };

      button.addEventListener("click", handleClick);
      input.addEventListener("input", syncDisabledState);
      syncDisabledState();

      listeners.push({ button, handleClick, input, syncDisabledState });
    });

    return () => {
      listeners.forEach(({ button, handleClick, input, syncDisabledState }) => {
        button.removeEventListener("click", handleClick);
        input.removeEventListener("input", syncDisabledState);
      });
    };
  }, [ready]);
}