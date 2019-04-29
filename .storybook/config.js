import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { StateProvider } from '../src/story';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('..', true, /story\.tsx?$/));
}

addDecorator((story) => <StateProvider>{story()}</StateProvider>);

configure(loadStories, module);
