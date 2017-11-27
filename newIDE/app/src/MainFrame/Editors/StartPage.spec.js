// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StartPage from './StartPage';
const gd = global.gd;

describe('StartPage', () => {
  it('renders the start page with no project opened', () => {
    const tree = renderer
      .create(
        <MuiThemeProvider>
          <StartPage project={null} />
        </MuiThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the start page with a project', () => {
    const project = gd.ProjectHelper.createNewGDJSProject();
    const tree = renderer
      .create(
        <MuiThemeProvider>
          <StartPage project={project} />
        </MuiThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    project.delete();
  });
});
