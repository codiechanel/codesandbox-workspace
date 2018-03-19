import * as React from "react";
import { render } from "react-dom";
import {
    map,
    flatMap,
    scan,
    pluck,
    delay,
    concatAll,
    catchError,
    take,
    toArray,
    takeUntil,
    takeWhile,
    switchMap,
    reduce,
    concatMap,
    timeout,
    filter,
    count,
    mergeAll,
    tap
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
    merge,
    pipe,
    Observable,
    Subject,
    ReplaySubject,
    from,
    fromEvent,
    of,
    interval,
    defer,
    animationFrameScheduler,
    range,
    zip,
    timer
} from "rxjs";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function logOb(name): any {
    return {
        next: x => console.log(`${name} next:`, x),
        error: err => console.log(`${name} error:`, err),
        complete: () => console.log(`${name} completed`)
    };
}

class App extends React.Component<any, any> {
  componentDidMount() {
    range(1, 3).subscribe(logOb('x'))
  }
  render() {
    return "hello cool great"
  }
}

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to cool see some magic happen {"\u2728"}</h2>
//   </div>
// );

render(<App />, document.getElementById("root"));
