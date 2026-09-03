import Image from "next/image";
import photo from "@/images/photo.jpg";
import Accordion from "@/components/Accordion";
import Alert from "@/components/Alert";
import DialogExamples from "@/components/DialogExamples";
import Avatar from "@/components/Avatar";
import BadgeExamples from "@/components/BadgeExamples";
import LoadingSpinner from "@/components/LoadingSpinner";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DismissibleAlerts,
  DismissibleBadges,
} from "@/components/DismissibleExamples";

const accordionItems = [
  {
    id: "1",
    title: "What is Next.js?",
    content:
      "Next.js is a React framework that enables server-side rendering, static site generation, and other powerful features for building modern web applications.",
  },
  {
    id: "2",
    title: "What are the benefits of TypeScript?",
    content:
      "TypeScript adds static typing to JavaScript, helping catch errors during development, improving code quality, and providing better IDE support with autocomplete and IntelliSense.",
  },
  {
    id: "3",
    title: "How does the accordion work?",
    content:
      "This accordion component is built with React hooks and follows accessibility best practices. It supports keyboard navigation, ARIA attributes, and can be configured to allow single or multiple expanded items.",
  },
];

export default function Home() {
  return (
    <div className="container content">
      <ThemeToggle />
      <h1>Main Heading (H1)</h1>

      <section style={{ margin: "2rem 0" }}>
        <h2>Accordion Component</h2>
        <Accordion items={accordionItems} />
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Alert Component</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Alert variant="neutral" title="Neutral Alert">
            This is a neutral alert for general information.
          </Alert>
          <Alert variant="info" title="Info Alert">
            This is an informational alert with helpful details.
          </Alert>
          <Alert variant="warning" title="Warning Alert">
            This is a warning alert to indicate caution is needed.
          </Alert>
          <Alert variant="critical" title="Critical Alert">
            This is a critical alert for serious issues requiring immediate
            attention.
          </Alert>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3>Dismissible Alerts</h3>
          <DismissibleAlerts />
        </div>
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Dialog Component</h2>
        <DialogExamples />
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Avatar Component</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h3>Initials with Random Colors</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Avatar name="John Doe" size="small" />
              <Avatar name="Jane Smith" size="small" />
              <Avatar name="Bob Johnson" size="small" />
              <Avatar name="Alice Williams" size="small" />
              <Avatar name="Charlie Brown" size="small" />
            </div>
          </div>

          <div>
            <h3>Different Sizes (Initials)</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Avatar name="John Doe" size="small" />
              <Avatar name="John Doe" size="medium" />
              <Avatar name="John Doe" size="large" />
            </div>
          </div>

          <div>
            <h3>With Images</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Avatar name="Photo User" src={photo.src} size="small" />
              <Avatar name="Photo User" src={photo.src} size="medium" />
              <Avatar name="Photo User" src={photo.src} size="large" />
            </div>
          </div>

          <div>
            <h3>Single Name</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Avatar name="Madonna" />
              <Avatar name="Prince" />
              <Avatar name="Cher" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Badge Component</h2>
        <BadgeExamples />
        <div style={{ marginTop: "2rem" }}>
          <h3>Dismissible Badges</h3>
          <DismissibleBadges />
        </div>
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Loading Spinner Component</h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3>Small</h3>
            <LoadingSpinner size="small" />
          </div>
          <div>
            <h3>Medium</h3>
            <LoadingSpinner size="medium" />
          </div>
          <div>
            <h3>Large</h3>
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Image Gallery Component</h2>
        <p>
          Click on any image to open the lightbox. Use arrow keys or navigation
          buttons to browse.
        </p>
      </section>

      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
      </nav>

      <main>
        <article>
          <h2>Article Heading (H2)</h2>
          <p>
            This is a paragraph with some <strong>strong text</strong>,{" "}
            <em>emphasized text</em>, and <mark>marked text</mark>.
          </p>

          <h3>Subheading (H3)</h3>
          <p>
            Another paragraph with <small>small text</small>,{" "}
            <del>deleted text</del>, and <ins>inserted text</ins>.
          </p>

          <h4>Fourth Level Heading (H4)</h4>
          <p>
            Text with <sub>subscript</sub> and <sup>superscript</sup>.
          </p>

          <h5>Fifth Level Heading (H5)</h5>
          <p>
            A paragraph with <code>inline code</code>, <kbd>keyboard input</kbd>
            , <samp>sample output</samp>, and <var>variable</var>.
          </p>

          <h6>Sixth Level Heading (H6)</h6>
          <p>The smallest heading level.</p>

          <blockquote>
            This is a blockquote. It contains quoted text from another source.
          </blockquote>

          <pre>
            This is preformatted text. It preserves spaces and line breaks.
          </pre>

          <h3>Unordered List</h3>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>

          <h3>Ordered List</h3>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>

          <h3>Definition List</h3>
          <dl>
            <dt>Term 1</dt>
            <dd>Definition for term 1</dd>
            <dt>Term 2</dt>
            <dd>Definition for term 2</dd>
          </dl>

          <h3>Table</h3>
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Footer 1</td>
                <td>Footer 2</td>
                <td>Footer 3</td>
              </tr>
            </tfoot>
          </table>

          <h3>Form</h3>
          <form>
            <fieldset>
              <legend>Personal Information</legend>

              <label>
                Name:
                <input type="text" name="name" placeholder="Enter your name" />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                />
              </label>

              <label>
                Password:
                <input type="password" name="password" />
              </label>

              <label>
                Date:
                <input type="date" name="date" />
              </label>

              <label>
                Number:
                <input type="number" name="number" min="0" max="100" />
              </label>

              <label>
                Range:
                <input type="range" name="range" min="0" max="100" />
              </label>

              <label>
                Color:
                <input type="color" name="color" />
              </label>

              <label>
                File:
                <input type="file" name="file" />
              </label>

              <label>
                <input type="checkbox" name="checkbox" />
                Checkbox
              </label>

              <label>
                <input type="radio" name="radio" value="option1" />
                Radio Option 1
              </label>
              <label>
                <input type="radio" name="radio" value="option2" />
                Radio Option 2
              </label>

              <label>
                Select:
                <select name="select">
                  <option value="">Choose an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>

              <label>
                Textarea:
                <textarea
                  name="textarea"
                  rows={4}
                  placeholder="Enter multiple lines of text"
                ></textarea>
              </label>

              <button type="submit">Submit Button</button>
              <button type="reset" className="secondary">
                Reset Button
              </button>
              <button type="button" className="tertiary">
                Regular Button
              </button>
            </fieldset>
          </form>

          <h3>Figure</h3>
          <figure>
            <Image
              src={photo.src}
              alt="Placeholder image"
              width={photo.width}
              height={photo.height}
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
            />
            <figcaption>
              This is a figure caption describing the image above
            </figcaption>
          </figure>

          <h3>Media Elements</h3>
          <audio controls>
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <video controls width="320" height="240" poster={photo.src}>
            <source
              src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4"
              type="video/mp4"
            />
            Your browser does not support the video element.
          </video>

          <h3>Details/Summary</h3>
          <details>
            <summary>Click to expand</summary>
            <p>
              This content is hidden by default and can be toggled by clicking
              the summary.
            </p>
          </details>

          <h3>Other Text Elements</h3>
          <p>
            <abbr title="HyperText Markup Language">HTML</abbr> is the standard
            markup language.
          </p>
          <p>
            <cite>The Great Gatsby</cite> by F. Scott Fitzgerald
          </p>
          <p>
            Published on <time dateTime="2026-08-19">August 19, 2026</time>
          </p>
          <p>
            Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy
          </p>

          <address>
            Contact: email@example.com 123 Main Street City, State 12345
          </address>
        </article>

        <aside>
          <h3>Sidebar Content</h3>
          <p>This is an aside element, typically used for sidebar content.</p>
        </aside>

        <section id="section1">
          <h2>Section 1</h2>
          <p>This is the first section with some content.</p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>This is the second section with some content.</p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>This is the third section with some content.</p>
        </section>
      </main>

      <footer>
        <p>Footer content goes here. Copyright 2026.</p>
      </footer>
    </div>
  );
}
