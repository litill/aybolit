import '@appnest/masonry-layout';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-playbook-breadcrumbs.js';
import RenderHubs from './partials/cxl-hubpage-render-hubs';
import RenderPlaybooks from './partials/cxl-hubpage-render-playbooks';
import RenderHubsSidebar from './partials/cxl-hubpage-render-sidebar';
import breadcrumbsData from './data/cxl-hubpage.breadcrumbs.data.json';


export default {
  decorators: [withKnobs],
  title: 'CXL Hub Page',
};

export const CXLDHubPage = () => {

  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`

    <style>
      .cxl-hub-sidebar-header {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
        font-weight: normal;
        margin-bottom: var(--lumo-space-xl);
      }
      .cxl-hub-title {
        margin-top: var(--lumo-space-xl);
        margin-bottom: var(--lumo-space-xl);
      }
    </style>

    <cxl-app-layout
      id="container"
      layout="2c-r"
      scroll="${hasPanelsScroll ? 'panels' : 'document'}"
    >
      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <h2 class="cxl-hub-sidebar-header">Navigation</h2>
        ${RenderHubsSidebar()}
      </section>

      <article class="entry">
        <header class="cxl-hub-header">
          <cxl-playbook-breadcrumbs .breadcrumbs="${breadcrumbsData}"></cxl-playbook-breadcrumbs>
          <h2 class="cxl-hub-title">Write a blog.</h2>
        </header>
        <cxl-vaadin-accordion
          id="cxl-vaadin-accordion-26107"
          class="archive archive-certificate plural"
          theme="cxl-hub-cards"
        >
          <masonry-layout cols="auto" maxcolwidth="768" gap="16">${RenderHubs()}${RenderPlaybooks()}</masonry-layout>
        </cxl-vaadin-accordion>
      </article>
    </cxl-app-layout>
  `;
};

CXLDHubPage.storyName = '[cxl-hubpage]';
