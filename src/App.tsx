import React from 'react';
import { Router } from '@reach/router';
import MainLayout from './layouts/Main';

import { tabs, pages } from './data';
import contactData from './data/json/contact.json';

import { RouteComponentProps, Redirect } from '@reach/router';
import MDTab, { MDTabProps } from './components/MDTab';
import { PageProps } from './models';

type ViewProps = RouteComponentProps & PageProps;
const View: React.FC<ViewProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

type TabProps = RouteComponentProps & MDTabProps;
const Tab: React.FC<TabProps> = ({ fileName }) => {
  return <MDTab fileName={fileName} />;
};

export const routes = [
  pages.map(({ name, url, comp, ...rest }) => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  // tabs.map(({ name, url, mdFileName }) => (
  //   <Tab path={url} key={name} fileName={mdFileName} />
  // )),
  // <Redirect key="notfound" from="*" to="/" default noThrow />,
];

const App: React.FC = () => (
  <MainLayout tabs={tabs} contactData={contactData}>
    <Router>{routes}</Router>
  </MainLayout>
);

export default App;
