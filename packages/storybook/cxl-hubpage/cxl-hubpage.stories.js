import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';

export default {
  decorators: [withKnobs],
  title: 'CXL Hub Page',
};

export const CXLDHubPage = () => {
  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`
    <style>
      .widget.has-background {
        background-color: var(--lumo-shade-5pct);
      }
    </style>

    <cxl-app-layout
      id="container"
      layout="2c-l"
      scroll="${hasPanelsScroll ? 'panels' : 'document'}"
    >
      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Widget</label>
        <h3 class="widget-title">Menu</h3>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </section>

      <article class="entry">
        <header class="entry-header">
          <label>Page</label>
          <h1 class="entry-title">Title: 2-column, content left</h1>
          <p>Lorem ipsum....</p>
        </header>
        <div class="entry-content">
          <h2>Headline</h2>
          <p>Lorem ipsum....</p>
        </div>
      </article>
    </cxl-app-layout>
  `;
};

CXLDHubPage.storyName = '[cxl-hubpage]';
