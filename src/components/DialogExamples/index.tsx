"use client";

import { useState } from "react";
import Dialog, { DialogTrigger } from "@/components/Dialog";

export default function DialogExamples() {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <DialogTrigger onClick={() => setIsSmallOpen(true)}>
          Open Small Dialog
        </DialogTrigger>
        <Dialog
          isOpen={isSmallOpen}
          onClose={() => setIsSmallOpen(false)}
          title="Small Dialog"
          size="small"
          actions={
            <>
              <button
                type="button"
                onClick={() => alert("Hello!")}
                className="secondary"
              >
                Say Hello
              </button>
              <button type="button" onClick={() => setIsSmallOpen(false)}>
                Close
              </button>
            </>
          }
        >
          <p>This is a small dialog with minimal width.</p>
          <p>Perfect for confirmations or simple messages.</p>
        </Dialog>
      </div>

      <div>
        <DialogTrigger onClick={() => setIsMediumOpen(true)}>
          Open Medium Dialog
        </DialogTrigger>
        <Dialog
          isOpen={isMediumOpen}
          onClose={() => setIsMediumOpen(false)}
          title="Medium Dialog (Default)"
          size="medium"
          actions={
            <>
              <button
                type="button"
                onClick={() => alert("Hello!")}
                className="secondary"
              >
                Say Hello
              </button>
              <button type="button" onClick={() => setIsMediumOpen(false)}>
                Close
              </button>
            </>
          }
        >
          <p>This is a medium-sized dialog.</p>
          <p>
            It provides a good balance between content space and screen real
            estate.
          </p>
          <p>Great for forms and detailed content.</p>
        </Dialog>
      </div>

      <div>
        <DialogTrigger onClick={() => setIsLargeOpen(true)}>
          Open Large Dialog
        </DialogTrigger>
        <Dialog
          isOpen={isLargeOpen}
          onClose={() => setIsLargeOpen(false)}
          title="Large Dialog"
          size="large"
          actions={
            <>
              <button
                type="button"
                onClick={() => alert("Hello!")}
                className="secondary"
              >
                Say Hello
              </button>
              <button type="button" onClick={() => setIsLargeOpen(false)}>
                Close
              </button>
            </>
          }
        >
          <p>This is a large dialog with maximum width.</p>
          <p>Ideal for displaying complex content or multiple sections.</p>

          <h3>Features:</h3>
          <ul>
            <li>Accessible with ARIA attributes</li>
            <li>Keyboard support (ESC to close)</li>
            <li>Click outside to close</li>
            <li>Focus management</li>
            <li>Prevents body scroll when open</li>
            <li>Optional action buttons in footer</li>
          </ul>
        </Dialog>
      </div>

      <div>
        <DialogTrigger
          onClick={() => setIsCustomOpen(true)}
          className="secondary"
          additionalProps={{
            style: { padding: "0.75rem 1.5rem" },
          }}
        >
          Custom Styled Button
        </DialogTrigger>
        <Dialog
          isOpen={isCustomOpen}
          onClose={() => setIsCustomOpen(false)}
          title="Custom Button Example"
        >
          <p>
            The DialogTrigger component accepts a <code>className</code> prop
            for styling and an <code>additionalProps</code> prop for any other
            button attributes.
          </p>
          <p>
            This allows you to customize the trigger button to match your design
            system while maintaining the dialog functionality.
          </p>{" "}
          <p>
            The <code>actions</code> prop is optional and can contain any
            buttons you need with custom functions.
          </p>{" "}
        </Dialog>
      </div>
    </div>
  );
}
