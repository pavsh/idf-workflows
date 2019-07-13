import React from 'react';

import 'rsuite/dist/styles/rsuite.min.css';
import { Drawer, Button, Divider } from 'rsuite';

import useDarkMode from 'use-dark-mode';

import { Toggle } from 'rsuite';
import workflows from './workflows';

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = React.useState(null);
  const darkMode = useDarkMode(false);

  return (
    <>
      <div style={{ float: 'left' }}>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      </div>
      <h1>בירוקרטיה, קצת אחרת</h1>
      <Divider />
      <h2>מה תרצו לעשות היום?</h2>
      <ul style={{ width: 200 }}>
        {workflows.map((workflow, i) => {
          return (
            <WorkflowListItem
              key={i}
              workflow={workflow}
              i={i}
              darkMode={darkMode}
              onClick={() => setSelectedWorkflow(workflow)}
            />
          );
        })}
      </ul>
      {selectedWorkflow && (
        <WorkflowDrawer
          workflow={selectedWorkflow}
          onHide={() => setSelectedWorkflow(null)}
        />
      )}
      <a
        style={{ float: 'left' }}
        href={'https://group2webapp.azurewebsites.net'}
        target="_blank"
      >
        מי קצינתו/מפקדתו?
      </a>
      <br />
      <br />
    </>
  );
}

function WorkflowDrawer({ workflow, onHide }) {
  return (
    <Drawer placement="left" show={!!workflow} onHide={onHide} full>
      <Drawer.Body>
        {workflow && (
          <>
            <b>{workflow.title}</b> <br /> <p>{workflow.description}</p>
          </>
        )}
        <br />
        <ol>
          {workflow &&
            workflow.steps.map((step, i) => (
              <li>
                <b style={{ color: step.isBottleneck ? 'red' : '' }}>
                  {step.title}
                </b>
                <br />
                {step.description}
                <br />
                <br />
              </li>
            ))}
        </ol>
      </Drawer.Body>
      <Drawer.Footer>
        <span>
          שימו לב, סימנו <span style={{ color: 'red' }}>באדום </span>
          צווארי בקבוק פוטנציאליים,
        </span>
        <br />
        (וכן, גם אנחנו חושבים שאפשר לשפר את התהליך, למה שלא{' '}
        {
          <span style={{ color: 'blue', textDecoration: 'underline' }}>
            תציעו הצעה?)
          </span>
        }
      </Drawer.Footer>
    </Drawer>
  );
}

function WorkflowListItem({ workflow, i, onClick, darkMode }) {
  return (
    <li
      onClick={onClick}
      style={{
        listStyle: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        padding: 4,
      }}
    >
      <Button style={{ width: 200 }}>{workflow.title}</Button>
    </li>
  );
}

export default App;
