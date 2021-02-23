import '@appnest/masonry-layout';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import RenderHubs from './cxl-hubpage-render-hubs';
import RenderPlaybooks from './cxl-hubpage-render-playbooks';

export default {
  decorators: [withKnobs],
  title: 'CXL Hub Page',
};

export const CXLDHubPage = () => {
  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`
    <cxl-app-layout
      id="container"
      layout="2c-r"
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
        <div class="entry-content"></div>
          <cxl-vaadin-accordion
            id="cxl-vaadin-accordion-26107"
            class="archive archive-certificate plural"
            theme="cxl-hub-cards"
          >
            <masonry-layout cols="auto" maxcolwidth="768" gap="16">${RenderHubs()}${RenderPlaybooks()}</masonry-layout>
          </cxl-vaadin-accordion>
        </div>
      </article>
    </cxl-app-layout>
  `;
};

CXLDHubPage.storyName = '[cxl-hubpage]';
