"use client";

import React, { useState } from "react";
import { handleToggle } from "./logic";
import "./styles.css";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  return (
    <div className="accordion" role="region" aria-label="Accordion">
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        const headingId = `accordion-heading-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="accordion-item">
            <h3 id={headingId} className="accordion-heading">
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={handleToggle(
                  item.id,
                  allowMultiple,
                  expandedItems,
                  setExpandedItems,
                )}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon" aria-hidden="true">
                  {isExpanded ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              aria-hidden={!isExpanded}
              className={`accordion-panel ${isExpanded ? "expanded" : ""}`}
            >
              <div className="accordion-content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
