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
          הדגשנו עבורכם <span style={{ color: 'red' }}>באדום </span>
          צווארי בקבוק פוטנציאליים
        </span>
        <br />
        <br />
        <span>מצאתם טעות?</span>{' '}
        <a
          href={`https://github.com/moshekatz/idf-workflows/blob/master/src/workflows/${
            workflow.fileName
          }.js`}
          target="_blank"
          rel="noopener noreferrer"
        >
          תוכלו להציע תיקון כאן
        </a>
        <br />
        <b>אגב, כן.</b> גם אנחנו חושבים שאפשר לשפר את התהליך,{' '}
        <a
          href="https://chat.whatsapp.com/KnpHJ4fmdYa2u5hlNyeEEB"
          target="_blank"
          rel="noopener noreferrer"
        >
          מוזמנים לדבר איתנו
        </a>
        <br />
        <br />
        <br />
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
