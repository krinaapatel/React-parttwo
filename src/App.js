import React from 'react';
import './App.css';
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';
/*import Counter from './Counter';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import FragmentDemo from './FragmentDemo.js'
import Columns from './Columns.js'
import ParentComp from './ParentComp.js'
import MemoComp from './MemoComp'
import RefsDemo from './RefsDemo';
import FocusInput from './FocusInput';
import FRParentInput from './FRParentInput'
import PortalDemo from './PortalDemo'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'*/

function App() {
  return (
    <div className="App">
          {/*<FragmentDemo />*/}
          {/*<Columns />*/}
          {/*<PureComp/>*/}
          {/*<ParentComp/>*/}
          {/*<MemoComp/>*/}
          {/*<RefsDemo/>*/}
          {/*<FocusInput/>*/}
          {/*<FRParentInput/>*/}
          {/*<PortalDemo />*/}
          {/*<ClickCounter >
          <HoverCounter />
          <ClickCounterTwo />
          <HoverCounterTwo />
          <User name={(isLoggedIn) => isLoggedIn ? 'krina' : 'Pratik'} />*/}
          {/*<Counter
              render={(count, incrementCount) => (
                  <ClickCounterTwo count={count} incrementCount={incrementCount} />
              )}
          />*/}
          {/*<Counter
              render={(count, incrementCount) => (
                  <HoverCounterTwo count={count} incrementCount={incrementCount} />
              )}
          />*/}
          // step 2 providing value
          <UserProvider value = "krina">
              <ComponentC />
          </UserProvider>
    </div>
  );
}

export default App;
